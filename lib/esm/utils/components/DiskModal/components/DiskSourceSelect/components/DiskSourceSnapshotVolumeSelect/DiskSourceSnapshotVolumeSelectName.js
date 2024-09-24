import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { bytesToDiskSize } from '@catalog/utils/quantity';
import { modelToGroupVersionKind, VolumeSnapshotModel } from '@kubevirt-ui/kubevirt-api/console';
import { removeByteSuffix } from '@kubevirt-utils/components/CapacityInput/utils';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import useSnapshots from '@kubevirt-utils/components/SelectSnapshot/useSnapshots';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { convertResourceArrayToMap, getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { FormGroup, ValidatedOptions } from '@patternfly/react-core';
import { DATAVOLUME_SNAPSHOT_NAME, DATAVOLUME_SNAPSHOT_NAMESPACE, DISK_SIZE_FIELD, } from '../../../utils/constants';
import { getErrorSnapshotName } from '../../../utils/selectors';
import { diskSourceSnapshotVolumeNameFieldID } from '../../utils/constants';
var DiskSourceSnapshotVolumeSelectName = function () {
    var t = useKubevirtTranslation().t;
    var _a = useFormContext(), control = _a.control, errors = _a.formState.errors, setValue = _a.setValue, watch = _a.watch;
    var namespace = watch(DATAVOLUME_SNAPSHOT_NAMESPACE);
    var _b = useSnapshots(namespace), snapshots = _b.snapshots, snapshotsLoaded = _b.snapshotsLoaded;
    var snapshotNames = useMemo(function () { return snapshots === null || snapshots === void 0 ? void 0 : snapshots.map(getName); }, [snapshots]);
    if (!snapshotsLoaded)
        return React.createElement(Loading, null);
    var snapshotsMapper = convertResourceArrayToMap(snapshots);
    var error = getErrorSnapshotName(errors);
    return (React.createElement(Controller, { render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value;
            return (React.createElement(FormGroup, { fieldId: diskSourceSnapshotVolumeNameFieldID, id: diskSourceSnapshotVolumeNameFieldID, isRequired: true, label: t('VolumeSnapshot name') },
                React.createElement(InlineFilterSelect, { options: snapshotNames === null || snapshotNames === void 0 ? void 0 : snapshotNames.map(function (name) { return ({
                        children: name,
                        groupVersionKind: modelToGroupVersionKind(VolumeSnapshotModel),
                        value: name,
                    }); }), setSelected: function (snapshotName) {
                        var _a;
                        onChange(snapshotName);
                        var selectedSnapshot = snapshotsMapper[snapshotName];
                        var selectedSnapshotSize = (_a = selectedSnapshot === null || selectedSnapshot === void 0 ? void 0 : selectedSnapshot.status) === null || _a === void 0 ? void 0 : _a.restoreSize;
                        setValue(DISK_SIZE_FIELD, removeByteSuffix(bytesToDiskSize(selectedSnapshotSize)));
                    }, toggleProps: {
                        isDisabled: isEmpty(namespace),
                        isFullWidth: true,
                        placeholder: t('Select VolumeSnapshot'),
                    }, selected: value }),
                error && (React.createElement(FormGroupHelperText, { validated: ValidatedOptions.error }, error === null || error === void 0 ? void 0 : error.message))));
        }, rules: {
            required: t('VolumeSnapshot is required.'),
        }, control: control, name: DATAVOLUME_SNAPSHOT_NAME }));
};
export default DiskSourceSnapshotVolumeSelectName;
//# sourceMappingURL=DiskSourceSnapshotVolumeSelectName.js.map