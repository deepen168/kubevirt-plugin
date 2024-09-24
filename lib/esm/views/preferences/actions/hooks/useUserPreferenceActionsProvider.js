var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import VirtualMachinePreferenceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachinePreferenceModel';
import CloneResourceModal from '@kubevirt-utils/components/CloneResourceModal/CloneResourceModal';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { k8sDelete } from '@openshift-console/dynamic-plugin-sdk';
var useUserPreferenceActionsProvider = function (preference) {
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return [
        {
            accessReview: asAccessReview(VirtualMachinePreferenceModel, preference, 'create'),
            cta: function () {
                return createModal(function (modalProps) {
                    var _a;
                    return (React.createElement(CloneResourceModal, __assign({}, modalProps, { model: VirtualMachinePreferenceModel, namespace: (_a = preference === null || preference === void 0 ? void 0 : preference.metadata) === null || _a === void 0 ? void 0 : _a.namespace, object: preference })));
                });
            },
            disabled: false,
            id: 'preference-clone-action',
            label: t('Clone'),
        },
        {
            accessReview: asAccessReview(VirtualMachinePreferenceModel, preference, 'delete'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DeleteModal, { onDeleteSubmit: function () {
                            return k8sDelete({
                                model: VirtualMachinePreferenceModel,
                                resource: preference,
                            });
                        }, headerText: t('Delete VirtualMachinePreference?'), isOpen: isOpen, obj: preference, onClose: onClose }));
                });
            },
            disabled: false,
            id: 'preference-delete-action',
            label: t('Delete'),
        },
    ];
};
export default useUserPreferenceActionsProvider;
//# sourceMappingURL=useUserPreferenceActionsProvider.js.map