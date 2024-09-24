import React, { memo, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { ActionList, ActionListItem, Alert, AlertVariant, Button, Modal, Stack, StackItem, } from '@patternfly/react-core';
import './TabModal.scss';
var TabModal = memo(function (_a) {
    var children = _a.children, _b = _a.closeOnSubmit, closeOnSubmit = _b === void 0 ? true : _b, headerText = _a.headerText, isDisabled = _a.isDisabled, isLoading = _a.isLoading, isOpen = _a.isOpen, modalError = _a.modalError, modalVariant = _a.modalVariant, obj = _a.obj, onClose = _a.onClose, onSubmit = _a.onSubmit, _c = _a.positionTop, positionTop = _c === void 0 ? true : _c, submitBtnText = _a.submitBtnText, submitBtnVariant = _a.submitBtnVariant, titleIconVariant = _a.titleIconVariant;
    var t = useKubevirtTranslation().t;
    var _d = useState(false), isSubmitting = _d[0], setIsSubmitting = _d[1];
    var _e = useState(undefined), apiError = _e[0], setApiError = _e[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        setIsSubmitting(true);
        setApiError(undefined);
        onSubmit(obj)
            .then(function () { return closeOnSubmit && onClose(); })
            .catch(function (submitError) {
            setApiError(submitError);
            kubevirtConsole.error(submitError);
        })
            .finally(function () { return setIsSubmitting(false); });
    };
    var closeModal = function () {
        setApiError(undefined);
        setIsSubmitting(false);
        var promise = onClose();
        if (promise)
            promise === null || promise === void 0 ? void 0 : promise.catch(setApiError);
    };
    var error = apiError || modalError;
    return (React.createElement(Modal, { footer: React.createElement(Stack, { className: "kv-tabmodal-footer", hasGutter: true },
            error && (React.createElement(StackItem, null,
                React.createElement(Alert, { isInline: true, title: t('An error occurred'), variant: AlertVariant.danger },
                    React.createElement(Stack, { hasGutter: true },
                        React.createElement(StackItem, null, error.message),
                        (error === null || error === void 0 ? void 0 : error.href) && (React.createElement(StackItem, null,
                            React.createElement("a", { href: error.href, rel: "noreferrer", target: "_blank" }, error.href))))))),
            React.createElement(StackItem, null,
                React.createElement(ActionList, null,
                    React.createElement(ActionListItem, null,
                        React.createElement(Button, { isDisabled: isDisabled || isSubmitting, isLoading: isLoading || isSubmitting, onClick: handleSubmit, variant: submitBtnVariant !== null && submitBtnVariant !== void 0 ? submitBtnVariant : 'primary' }, submitBtnText || t('Save'))),
                    React.createElement(ActionListItem, null,
                        React.createElement(Button, { onClick: closeModal, variant: "link" }, t('Cancel')))))), className: "ocs-modal", id: "tab-modal", isOpen: isOpen, onClose: closeModal, position: positionTop ? 'top' : undefined, title: headerText, titleIconVariant: titleIconVariant, variant: modalVariant !== null && modalVariant !== void 0 ? modalVariant : 'small' }, children));
});
export default TabModal;
//# sourceMappingURL=TabModal.js.map