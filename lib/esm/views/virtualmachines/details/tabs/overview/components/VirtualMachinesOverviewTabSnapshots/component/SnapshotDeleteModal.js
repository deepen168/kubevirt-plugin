import * as React from 'react';
import VirtualMachineSnapshotModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotModel';
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sDelete } from '@openshift-console/dynamic-plugin-sdk';
import { ButtonVariant } from '@patternfly/react-core';
var SnapshotDeleteModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, snapshot = _a.snapshot;
    var t = useKubevirtTranslation().t;
    return (React.createElement(TabModal, { onSubmit: function (obj) {
            return k8sDelete({
                json: undefined,
                model: VirtualMachineSnapshotModel,
                requestInit: undefined,
                resource: obj,
            });
        }, headerText: t('Delete VirtualMachineSnapshot?'), isOpen: isOpen, obj: snapshot, onClose: onClose, submitBtnText: t('Delete'), submitBtnVariant: ButtonVariant.danger },
        React.createElement(ConfirmActionMessage, { obj: snapshot })));
};
export default SnapshotDeleteModal;
//# sourceMappingURL=SnapshotDeleteModal.js.map