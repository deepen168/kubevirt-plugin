import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Label } from '@patternfly/react-core';
import { WindowsIcon } from '@patternfly/react-icons';
import './labels.scss';
var WindowsLabel = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Label, { className: "os-label", icon: React.createElement(WindowsIcon, null), variant: "outline" }, t('Windows only')));
};
export default WindowsLabel;
//# sourceMappingURL=WindowsLabel.js.map