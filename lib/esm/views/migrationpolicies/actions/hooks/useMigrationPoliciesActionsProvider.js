import React, { useMemo } from 'react';
import { MigrationPolicyModelRef } from '@kubevirt-ui/kubevirt-api/console';
import MigrationPolicyModel from '@kubevirt-ui/kubevirt-api/console/models/MigrationPolicyModel';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { k8sDelete, useK8sModel } from '@openshift-console/dynamic-plugin-sdk';
import MigrationPolicyEditModal from '../../components/MigrationPolicyEditModal/MigrationPolicyEditModal';
var useMigrationPoliciesActionsProvider = function (mp) {
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _a = useK8sModel(MigrationPolicyModelRef), inFlight = _a[1];
    var actions = useMemo(function () {
        return [
            {
                accessReview: asAccessReview(MigrationPolicyModel, mp, 'patch'),
                cta: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(MigrationPolicyEditModal, { isOpen: isOpen, mp: mp, onClose: onClose }));
                    });
                },
                disabled: false,
                id: 'mp-action-edit',
                label: t('Edit'),
            },
            {
                accessReview: asAccessReview(MigrationPolicyModel, mp, 'delete'),
                cta: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(DeleteModal, { headerText: t('Delete MigrationPolicy?'), isOpen: isOpen, obj: mp, onClose: onClose, onDeleteSubmit: function () { return k8sDelete({ model: MigrationPolicyModel, resource: mp }); } }));
                    });
                },
                disabled: false,
                id: 'mp-action-delete',
                label: t('Delete'),
            },
        ];
    }, [createModal, mp, t]);
    return React.useMemo(function () { return [actions, !inFlight]; }, [actions, inFlight]);
};
export default useMigrationPoliciesActionsProvider;
//# sourceMappingURL=useMigrationPoliciesActionsProvider.js.map