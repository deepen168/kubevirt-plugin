import React from 'react';
import { KeyEventMap } from '../constants';
/**
 * Use this hook for components that require visibility only
 * when the user is actively interacting with the document.
 */
export declare const useDocumentListener: <T extends HTMLElement>(keyEventMap?: KeyEventMap) => {
    ref: React.RefObject<T>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
};
