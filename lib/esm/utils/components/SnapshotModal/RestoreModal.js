import React, { useMemo } from 'react';
import { Trans } from 'react-i18next';
import VirtualMachineRestoreModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineRestoreModel';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { getVMRestoreSnapshotResource } from '../../../views/virtualmachines/details/tabs/snapshots/utils/helpers';
import './restore-modal.scss';
var RestoreModal = function (_a) {
    var _b, _c;
    var isOpen = _a.isOpen, onClose = _a.onClose, snapshot = _a.snapshot;
    var t = useKubevirtTranslation().t;
    var resultRestore = useMemo(function () {
        var restore = getVMRestoreSnapshotResource(snapshot);
        return restore;
    }, [snapshot]);
    return (React.createElement(TabModal, { onSubmit: function (obj) {
            return k8sCreate({
                data: obj,
                model: VirtualMachineRestoreModel,
            });
        }, headerText: t('Restore snapshot'), isOpen: isOpen, obj: resultRestore, onClose: onClose, submitBtnText: t('Restore') },
        React.createElement(Trans, { t: t },
            "Are you sure you want to restore ",
            { vmName: (_c = (_b = snapshot === null || snapshot === void 0 ? void 0 : snapshot.spec) === null || _b === void 0 ? void 0 : _b.source) === null || _c === void 0 ? void 0 : _c.name },
            " from snapshot",
            ' ',
            { snapshotName: snapshot.metadata.name },
            "?",
            React.createElement("div", { className: "RestoreModal--note_text" },
                React.createElement("b", null, "Note: "),
                "Data from the last snapshot taken will be lost. To prevent losing current data, take another snapshot before restoring from this one."))));
};
export default RestoreModal;
//# sourceMappingURL=RestoreModal.js.map