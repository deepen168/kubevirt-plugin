import * as React from 'react';
/**
 * A Hook that returns an input field reference for debouncing the input change callback.
 * @param {number} delay - delay in ms
 * @param callback - callback to be executed after delay
 * @param {string} updateURLParam - name of the URL param to update
 */
export declare const useInputDebounce: ({ delay, initialValue, onChange, updateURLParam, }: {
    delay: number;
    initialValue?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    updateURLParam?: string | undefined;
}) => {
    inputRef: React.RefObject<HTMLInputElement>;
    resetValue: () => void;
    value: string | undefined;
};
