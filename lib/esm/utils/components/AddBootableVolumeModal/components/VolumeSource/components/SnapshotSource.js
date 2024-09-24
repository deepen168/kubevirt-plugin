import React from 'react';
import SelectSnapshot from '@kubevirt-utils/components/SelectSnapshot/SelectSnapshot';
var SnapshotSource = function (_a) {
    var bootableVolume = _a.bootableVolume, setBootableVolumeField = _a.setBootableVolumeField;
    var _b = bootableVolume || {}, snapshotName = _b.snapshotName, snapshotNamespace = _b.snapshotNamespace;
    return (React.createElement(SelectSnapshot, { selectSnapshotName: setBootableVolumeField('snapshotName'), selectSnapshotNamespace: setBootableVolumeField('snapshotNamespace'), snapshotNameSelected: snapshotName, snapshotNamespaceSelected: snapshotNamespace }));
};
export default SnapshotSource;
//# sourceMappingURL=SnapshotSource.js.map