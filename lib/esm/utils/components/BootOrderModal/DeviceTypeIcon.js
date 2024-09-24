import React from 'react';
import { NetworkIcon, VolumeIcon } from '@patternfly/react-icons';
var DeviceTypeIconMapping = {
    DISK: VolumeIcon,
    NIC: NetworkIcon,
};
var DeviceTypeIcon = function (_a) {
    var type = _a.type;
    var Icon = DeviceTypeIconMapping[type];
    return Icon ? React.createElement(Icon, null) : React.createElement(VolumeIcon, null);
};
export default DeviceTypeIcon;
//# sourceMappingURL=DeviceTypeIcon.js.map