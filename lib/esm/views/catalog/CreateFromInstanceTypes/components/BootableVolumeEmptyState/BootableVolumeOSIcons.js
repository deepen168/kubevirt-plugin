import React from 'react';
import { getIconByOSName } from '@catalog/templatescatalog/utils/os-icons';
import { LINUX, OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { Split, SplitItem } from '@patternfly/react-core';
import './BootableVolumeEmptyState.scss';
var BootableVolumeOSIcons = function () {
    var linuxIcon = getIconByOSName(LINUX);
    var rhelIcon = getIconByOSName(OS_NAME_TYPES.rhel);
    var windowsIcon = getIconByOSName(OS_NAME_TYPES.windows);
    var osIcons = [linuxIcon, rhelIcon, windowsIcon];
    return (React.createElement(Split, { className: "bootable-volume-empty-state__icon-bar" }, osIcons === null || osIcons === void 0 ? void 0 : osIcons.map(function (icon) {
        return (React.createElement(SplitItem, { key: icon },
            React.createElement("img", { alt: "os-icon", className: "bootable-volume-empty-state__icon", src: icon })));
    })));
};
export default BootableVolumeOSIcons;
//# sourceMappingURL=BootableVolumeOSIcons.js.map