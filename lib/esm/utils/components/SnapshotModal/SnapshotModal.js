import React, { useMemo, useState } from 'react';
import VirtualMachineSnapshotModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotModel';
import { generateSnapshotName } from '@kubevirt-utils/components/SnapshotModal/utils/utils';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { buildOwnerReference } from '@kubevirt-utils/resources/shared';
import { getVolumeSnapshotStatuses } from '@kubevirt-utils/resources/vm';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { Form, FormGroup, TextArea, TextInput } from '@patternfly/react-core';
import { deadlineUnits } from '@virtualmachines/details/tabs/snapshots/utils/consts';
import { getEmptyVMSnapshotResource, getVolumeSnapshotStatusesPartition, } from '@virtualmachines/details/tabs/snapshots/utils/helpers';
import { printableVMStatus } from '@virtualmachines/utils';
import SupportedVolumesAlert from './alerts/SupportedVolumesAlert';
import UnsupportedVolumesAlert from './alerts/UnsupportedVolumesAlert';
import SnapshotDeadlineFormField from './SnapshotFormFields/SnapshotDeadlineFormField';
import SnapshotSupportedVolumeList from './SnapshotFormFields/SnapshotSupportedVolumeList';
var SnapshotModal = function (_a) {
    var _b;
    var isOpen = _a.isOpen, onClose = _a.onClose, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _c = useState(generateSnapshotName(vm)), snapshotName = _c[0], setSnapshotName = _c[1];
    var _d = useState(undefined), description = _d[0], setDescription = _d[1];
    var _e = useState(undefined), deadline = _e[0], setDeadline = _e[1];
    var _f = useState(deadlineUnits.Seconds), deadlineUnit = _f[0], setDeadlineUnit = _f[1];
    var volumeSnapshotStatuses = getVolumeSnapshotStatuses(vm);
    var _g = getVolumeSnapshotStatusesPartition(volumeSnapshotStatuses), supportedVolumes = _g.supportedVolumes, unsupportedVolumes = _g.unsupportedVolumes;
    var _h = useState(false), isSubmitDisabled = _h[0], setSubmitDisabled = _h[1];
    var resultSnapshot = useMemo(function () {
        var snapshot = getEmptyVMSnapshotResource(vm);
        var ownerReference = buildOwnerReference(vm, { blockOwnerDeletion: false });
        snapshot.metadata.name = snapshotName;
        snapshot.metadata.ownerReferences = [ownerReference];
        if (description) {
            snapshot.metadata.annotations = { description: description };
        }
        if (deadline) {
            snapshot.spec.failureDeadline = "".concat(deadline).concat(deadlineUnit);
        }
        return snapshot;
    }, [deadline, deadlineUnit, description, snapshotName, vm]);
    return (React.createElement(TabModal, { onSubmit: function (obj) {
            return k8sCreate({
                data: obj,
                model: VirtualMachineSnapshotModel,
            });
        }, headerText: t('Take snapshot'), isDisabled: isSubmitDisabled, isOpen: isOpen, obj: resultSnapshot, onClose: onClose }, React.createElement(Form, null,
        React.createElement(SupportedVolumesAlert, { isVMRunning: ((_b = vm === null || vm === void 0 ? void 0 : vm.status) === null || _b === void 0 ? void 0 : _b.printableStatus) === printableVMStatus.Running }),
        React.createElement(FormGroup, { fieldId: "name", isRequired: true, label: t('Name') },
            React.createElement(TextInput, { id: "name", onChange: function (_, newName) { return setSnapshotName(newName); }, type: "text", value: snapshotName })),
        React.createElement(FormGroup, { fieldId: "description", label: t('Description') },
            React.createElement(TextArea, { id: "description", onChange: function (_, newDescription) { return setDescription(newDescription); }, value: description })),
        React.createElement(SnapshotDeadlineFormField, { deadline: deadline, deadlineUnit: deadlineUnit, setDeadline: setDeadline, setDeadlineUnit: setDeadlineUnit, setIsError: setSubmitDisabled }),
        React.createElement(SnapshotSupportedVolumeList, { supportedVolumes: supportedVolumes }),
        React.createElement(UnsupportedVolumesAlert, { unsupportedVolumes: unsupportedVolumes }))));
};
export default SnapshotModal;
//# sourceMappingURL=SnapshotModal.js.map