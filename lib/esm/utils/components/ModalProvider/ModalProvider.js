import * as React from 'react';
export var ModalContext = React.createContext({});
/**
 * A hook that returns a global modal context. This context is used to inject a modal component to the dom.
 * @example
 * const { createModal } = useModal();
 *
 * createModal(({ isOpen, onClose, appendTo }) => (
 *  <ExampleModal isOpen={isOpen} onClose={onClose} appendTo={appendTo} />
 * ))
 */
export var useModal = function () { return React.useContext(ModalContext); };
export var useModalValue = function () {
    var _a = React.useState(), modal = _a[0], setModal = _a[1];
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var createModal = function (newModal) {
        setIsOpen(true);
        setModal(function () { return newModal; });
    };
    var onClose = function () {
        setIsOpen(false);
        setModal(undefined);
    };
    return { createModal: createModal, isOpen: isOpen, modal: modal, onClose: onClose };
};
export var ModalProvider = function (_a) {
    var children = _a.children, _b = _a.value, value = _b === void 0 ? {} : _b;
    var isOpen = value.isOpen, Modal = value.modal, onClose = value.onClose;
    return (React.createElement(ModalContext.Provider, { value: value },
        Modal && isOpen && (React.createElement(Modal, { appendTo: function () { return document.querySelector('#modal-container'); }, isOpen: true, onClose: onClose })),
        children));
};
//# sourceMappingURL=ModalProvider.js.map