import React from 'react';
import { StatusIconAndText } from '@openshift-console/dynamic-plugin-sdk';
import { iconMapper } from '../../utils/consts';
var SnapshotStatusIcon = function (_a) {
    var phase = _a.phase;
    var StatusIcon = (iconMapper === null || iconMapper === void 0 ? void 0 : iconMapper[phase]) || iconMapper.default;
    return React.createElement(StatusIconAndText, { icon: React.createElement(StatusIcon, null), title: phase });
};
export default SnapshotStatusIcon;
//# sourceMappingURL=SnapshotStatusIcon.js.map