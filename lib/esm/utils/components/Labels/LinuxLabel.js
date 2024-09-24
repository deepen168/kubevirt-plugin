import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Label } from '@patternfly/react-core';
import { LinuxIcon } from '@patternfly/react-icons';
import './labels.scss';
var LinuxLabel = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Label, { className: "os-label", icon: React.createElement(LinuxIcon, null), variant: "outline" }, t('Linux only')));
};
export default LinuxLabel;
//# sourceMappingURL=LinuxLabel.js.map