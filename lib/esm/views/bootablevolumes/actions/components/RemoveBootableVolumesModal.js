import React from 'react';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useLastNamespacePath } from '@kubevirt-utils/hooks/useLastNamespacePath';
import { deleteBootableVolumeMetadata } from '../../utils/utils';
var RemoveBootableVolumesModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, source = _a.source;
    var t = useKubevirtTranslation().t;
    var lastNamespacePath = useLastNamespacePath();
    return (React.createElement(DeleteModal, { body: t('Remove from list will mark this volume as non-bootable. The volume will still be available in the cluster.'), headerText: t('Remove from list?'), isOpen: isOpen, obj: source, onClose: onClose, onDeleteSubmit: deleteBootableVolumeMetadata(source), redirectUrl: "/k8s/".concat(lastNamespacePath, "/bootablevolumes") }));
};
export default RemoveBootableVolumesModal;
//# sourceMappingURL=RemoveBootableVolumesModal.js.map