import * as React from 'react';
export declare type ModalComponentProps = {
    appendTo: () => HTMLElement;
    isOpen: boolean;
    onClose: () => void;
};
export declare type ModalComponent = React.ComponentType<ModalComponentProps>;
export declare type ModalContextType = {
    /** receives a modal component as an argument and injects it to the dom, the component callback will receive the following parameters,
     * isOpen: open state of the modal
     * onClose: callback to close the modal
     * appendTo: callback to get the dom element to append the modal to
     * @example
     * const { createModal } = useModal();
     *
     * createModal(({ isOpen, onClose, appendTo }) => (
     *  <ExampleModal isOpen={isOpen} onClose={onClose} appendTo={appendTo} />
     * ))
     *
     */
    createModal?: (modal: ModalComponent) => void;
    /** whether the modal is open */
    isOpen?: boolean;
    /** the modal component to render */
    modal?: ModalComponent;
    /** callback to close the modal */
    onClose?: () => void;
};
export declare const ModalContext: React.Context<ModalContextType>;
/**
 * A hook that returns a global modal context. This context is used to inject a modal component to the dom.
 * @example
 * const { createModal } = useModal();
 *
 * createModal(({ isOpen, onClose, appendTo }) => (
 *  <ExampleModal isOpen={isOpen} onClose={onClose} appendTo={appendTo} />
 * ))
 */
export declare const useModal: () => ModalContextType;
export declare const useModalValue: () => ModalContextType;
export declare const ModalProvider: React.FC<{
    value: ModalContextType;
}>;
