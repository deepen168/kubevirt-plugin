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
import React, { useMemo } from 'react';
import VirtualMachineClusterPreferenceModel, { VirtualMachineClusterPreferenceModelRef, } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineClusterPreferenceModel';
import CloneResourceModal from '@kubevirt-utils/components/CloneResourceModal/CloneResourceModal';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { k8sDelete, useK8sModel } from '@openshift-console/dynamic-plugin-sdk';
var useClusterPreferenceActionsProvider = function (preference) {
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _a = useK8sModel(VirtualMachineClusterPreferenceModelRef), inFlight = _a[1];
    var actions = useMemo(function () {
        return [
            {
                accessReview: asAccessReview(VirtualMachineClusterPreferenceModel, preference, 'create'),
                cta: function () {
                    return createModal(function (modalProps) {
                        return (React.createElement(CloneResourceModal, __assign({}, modalProps, { model: VirtualMachineClusterPreferenceModel, object: preference })));
                    });
                },
                disabled: false,
                id: 'preference-clone-action',
                label: t('Clone'),
            },
            {
                accessReview: asAccessReview(VirtualMachineClusterPreferenceModel, preference, 'delete'),
                cta: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(DeleteModal, { onDeleteSubmit: function () {
                                return k8sDelete({
                                    model: VirtualMachineClusterPreferenceModel,
                                    resource: preference,
                                });
                            }, headerText: t('Delete VirtualMachineClusterPreference?'), isOpen: isOpen, obj: preference, onClose: onClose }));
                    });
                },
                disabled: false,
                id: 'preference-delete-action',
                label: t('Delete'),
            },
        ];
    }, [createModal, preference, t]);
    return useMemo(function () { return [actions, !inFlight]; }, [actions, inFlight]);
};
export default useClusterPreferenceActionsProvider;
//# sourceMappingURL=useClusterPreferenceActionsProvider.js.map