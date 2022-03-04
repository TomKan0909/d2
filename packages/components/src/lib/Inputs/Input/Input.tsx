import React from 'react';
import {
    LabelLayout,
    LabelLayoutProps,
} from '../../__Layouts';
import {InputFragment,
    InputFragmentProps} from '../../Fragments'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export interface InputProps extends LabelLayoutProps, InputFragmentProps {
    disabled?: boolean;
    placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
    ...props
}): React.ReactElement => (
    <LabelLayout {...props}>
        <InputFragment {...props} />
    </LabelLayout>
);

export default Input;
