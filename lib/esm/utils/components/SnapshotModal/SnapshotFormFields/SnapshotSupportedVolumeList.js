import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ExpandableSection, FormGroup, Stack, StackItem } from '@patternfly/react-core';
var SnapshotSupportedVolumeList = function (_a) {
    var supportedVolumes = _a.supportedVolumes;
    var t = useKubevirtTranslation().t;
    var _b = React.useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var volumesCount = !isEmpty(supportedVolumes) ? supportedVolumes === null || supportedVolumes === void 0 ? void 0 : supportedVolumes.length : 0;
    var volumeCountMsg = t('Disks included in this snapshot ({{volumes}})', {
        volumes: volumesCount,
    });
    return (React.createElement(FormGroup, { fieldId: "snapshot-supported-volume-list" }, volumesCount > 0 ? (React.createElement(ExpandableSection, { isExpanded: isExpanded, onClick: function () { return setIsExpanded(function (prev) { return !prev; }); }, toggleText: volumeCountMsg },
        React.createElement(Stack, null, supportedVolumes === null || supportedVolumes === void 0 ? void 0 : supportedVolumes.map(function (vol) { return (React.createElement(StackItem, { key: vol.name }, vol.name)); })))) : (React.createElement("b", null, volumeCountMsg))));
};
export default SnapshotSupportedVolumeList;
//# sourceMappingURL=SnapshotSupportedVolumeList.js.map