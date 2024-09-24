import React from 'react';
import xbytes from 'xbytes';
import { removeByteSuffix } from '@kubevirt-utils/components/CapacityInput/utils';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { hasSizeUnit } from '@kubevirt-utils/resources/vm/utils/disk/size';
import { Checkbox, PopoverPosition, Split, SplitItem } from '@patternfly/react-core';
import DiskSourcePVCSelect from './DiskSourcePVCSelect';
var PVCSource = function (_a) {
    var bootableVolume = _a.bootableVolume, setBootableVolumeField = _a.setBootableVolumeField;
    var t = useKubevirtTranslation().t;
    var _b = bootableVolume || {}, pvcName = _b.pvcName, pvcNamespace = _b.pvcNamespace;
    return (React.createElement(React.Fragment, null,
        React.createElement(DiskSourcePVCSelect, { setDiskSize: function (newSize) {
                return setBootableVolumeField('size')(hasSizeUnit(newSize)
                    ? removeByteSuffix(newSize)
                    : removeByteSuffix(xbytes(Number(newSize), { iec: true, space: false })));
            }, pvcNameSelected: pvcName, pvcNamespaceSelected: pvcNamespace, selectPVCName: setBootableVolumeField('pvcName'), selectPVCNamespace: setBootableVolumeField('pvcNamespace') }),
        React.createElement(Split, { hasGutter: true },
            React.createElement(SplitItem, null,
                React.createElement(Checkbox, { id: "clone-pvc-checkbox", isChecked: true, isDisabled: true, label: t('Clone existing Volume') })),
            React.createElement(SplitItem, null,
                React.createElement(HelpTextIcon, { bodyContent: t('This will create a cloned copy of the Volume in the destination project.'), position: PopoverPosition.right })))));
};
export default PVCSource;
//# sourceMappingURL=PVCSource.js.map