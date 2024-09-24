import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Popover } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
var SelectDiskSourcePopOver = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Popover, { bodyContent: function () { return (React.createElement("div", null, t('Disk Source represents the source for our disk, this can be HTTP, Registry or an existing PVC'))); }, "aria-label": 'Help' },
        React.createElement(HelpIcon, null)));
};
export default SelectDiskSourcePopOver;
//# sourceMappingURL=SelectDiskSourcePopOver.js.map