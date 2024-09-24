var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, SplitItem } from '@patternfly/react-core';
import BootableVolumeListModal from '../BootableVolumeListModal/BootableVolumeListModal';
var ShowAllBootableVolumesButton = function (props) {
    var t = useKubevirtTranslation().t;
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    return (React.createElement(SplitItem, { className: "bootable-volume-list-bar__show-all-btn" },
        React.createElement(Button, { onClick: function () { return setIsOpen(true); }, variant: ButtonVariant.link }, t('Show all')),
        React.createElement(BootableVolumeListModal, __assign({ isOpen: isOpen, onClose: function () { return setIsOpen(false); } }, props))));
};
export default ShowAllBootableVolumesButton;
//# sourceMappingURL=ShowAllBootableVolumesButton.js.map