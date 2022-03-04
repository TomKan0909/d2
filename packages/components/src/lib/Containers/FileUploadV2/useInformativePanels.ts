import { useState, useCallback, useEffect } from 'react';
import { useMounted } from '../../Utils/Hooks';
import { OperationState } from '../PanelCard/PanelCard';

interface IPanel {
    /** whether it's loading file, is completed, is failure */
    operationState: OperationState;
    /** name of file associated with the informative panel */
    name: string;
    /** the file associated with the informative panel */
    file: File | null;
}

interface IInformativePanels {
    /** array of panels */
    panels: IPanel[];
    /** names of files already uploaded, or failed, or cancelled */
    makeItDisappear: string[];
    /** names of files for which we want to start workers */
    startWorkers: string[];
}

export const useInformativePanels = (
    isTestIsFailure: boolean,
    onFile: (base64StringFile: string) => void,
    onFileUpload: (base64StringFile: string) => void,
    onFileUploadCancel: (base64StringFile: string) => void,
    messageDuration: number,
): readonly [
    IPanel[],
    (acceptedFiles: File[]) => void,
    (name: string) => () => void,
] => {
    const isMounted = useMounted();
    const [informativePanels, setInformativePanels] =
        useState<IInformativePanels>({
            panels: [],
            makeItDisappear: [],
            startWorkers: [],
        });

    // start workers after files have been droped and array of informative panels
    // are loaded
    useEffect(() => {
        const { startWorkers } = informativePanels;
        if (startWorkers.length) {
            startWorkers.forEach((name) => {
                const { panels } = informativePanels;
                const informativePanel = panels.find(
                    (panel) => panel.name === name,
                );
                if (informativePanel) {
                    const { file } =
                        informativePanel;
                        if (file) {
                            onFileUpload(file.name)
                        }
                }
            });
            setInformativePanels((prev) => ({
                ...prev,
                startWorkers: [],
            }));
        }
    }, [informativePanels.startWorkers.length]);

    // make disappear informative panels in the future
    useEffect(() => {
        if (informativePanels.makeItDisappear.length) {
            informativePanels.makeItDisappear.forEach((name) => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setInformativePanels((prev) => ({
                            ...prev,
                            panels: prev.panels.filter((panel) => {
                                const { name: fileName } = panel;
                                if (fileName === name) {
                                    onFileUploadCancel(fileName)
                                    return false;
                                }
                                return true;
                            }),
                            makeItDisappear: prev.makeItDisappear.filter(
                                (name_) => name_ !== name,
                            ),
                        }));
                    }
                }, messageDuration);
            });
        }
    }, [informativePanels.makeItDisappear.length]);

    // terminate workers on clean up function
    useEffect(
        () => () => {
            if (!isMounted.current) {
                informativePanels.panels.forEach((panel) =>
                    onFileUploadCancel(panel.name)
                );
            }
        },
        [informativePanels.panels],
    );

    /**
     * load array of informative panels and send order to start workers
     */
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newInformativePanels = acceptedFiles.map((file) => {
            return {
                operationState: OperationState.isLoading,
                name: file.name,
                file,
            };
        });
        const fileNames = acceptedFiles.map((file) => file.name);
        setInformativePanels((prev) => ({
            ...prev,
            panels: [...prev.panels, ...newInformativePanels],
            startWorkers: [...fileNames],
        }));
    }, []);

    const onCancelUploading = (name: string) => () => {
        setInformativePanels((prev) => ({
            ...prev,
            panels: prev.panels.filter((panel) => {
                const { name: fileName } = panel;
                if (fileName === name) {
                    onFileUploadCancel(fileName)
                    return false;
                }
                return true;
            }),
        }));
    };

    return [informativePanels.panels, onDrop, onCancelUploading] as const;
};
