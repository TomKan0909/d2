import { useCallback, useState } from 'react';

/**
 * React hook which extends useState to include handler
 * @param {*} init - Initial state value
 * @param {Function} effect - Side effect of handler
 * @returns {Array} - [state, handler]
 */
type Init = string | boolean | object | number;
export const useHandler = (
    init: Init,
    effect: ((props: any) => void),
): [Init, ((props: any) => void), React.Dispatch<React.SetStateAction<Init>>] => {
    const [state, dispatch] = useState(init);
    const handler = useCallback(
        ({ target }): void => {
            if (effect) effect(target.value);
            dispatch(target.value);
        },
        [dispatch, effect],
    );
    return [state, handler, dispatch];
};
