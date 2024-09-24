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
import { VirtualMachineInstancetypeModelRef } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineInstancetypeModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstancetypeModel';
import CloneResourceModal from '@kubevirt-utils/components/CloneResourceModal/CloneResourceModal';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { k8sDelete, useK8sModel } from '@openshift-console/dynamic-plugin-sdk';
var useUserInstancetypeActionsProvider = function (instanceType) {
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _a = useK8sModel(VirtualMachineInstancetypeModelRef), inFlight = _a[1];
    var actions = useMemo(function () {
        return [
            {
                accessReview: asAccessReview(VirtualMachineInstancetypeModel, instanceType, 'create'),
                cta: function () {
                    return createModal(function (modalProps) {
                        var _a;
                        return (React.createElement(CloneResourceModal, __assign({}, modalProps, { model: VirtualMachineInstancetypeModel, namespace: (_a = instanceType === null || instanceType === void 0 ? void 0 : instanceType.metadata) === null || _a === void 0 ? void 0 : _a.namespace, object: instanceType })));
                    });
                },
                disabled: false,
                id: 'instacetype-clone-action',
                label: t('Clone'),
            },
            {
                accessReview: asAccessReview(VirtualMachineInstancetypeModel, instanceType, 'delete'),
                cta: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(DeleteModal, { onDeleteSubmit: function () {
                                return k8sDelete({
                                    model: VirtualMachineInstancetypeModel,
                                    resource: instanceType,
                                });
                            }, headerText: t('Delete VirtualMachineInstancetype?'), isOpen: isOpen, obj: instanceType, onClose: onClose }));
                    });
                },
                disabled: false,
                id: 'instacetype-delete-action',
                label: t('Delete'),
            },
        ];
    }, [createModal, instanceType, t]);
    return useMemo(function () { return [actions, !inFlight]; }, [actions, inFlight]);
};
export default useUserInstancetypeActionsProvider;
//# sourceMappingURL=useUserInstancetypeActionsProvider.js.map