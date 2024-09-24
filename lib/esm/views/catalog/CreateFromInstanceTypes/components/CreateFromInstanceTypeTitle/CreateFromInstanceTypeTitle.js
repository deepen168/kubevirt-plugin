import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Popover, PopoverPosition } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import AddBootableVolumeLink from '../AddBootableVolumeLink/AddBootableVolumeLink';
var CreateFromInstanceTypeTitle = function (_a) {
    var instanceTypesAndPreferencesData = _a.instanceTypesAndPreferencesData;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        t('Select volume to boot from'),
        ' ',
        React.createElement(Popover, { bodyContent: function (hide) { return (React.createElement(React.Fragment, null,
                React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                    React.createElement("div", null, "From the Volume table, select a bootable volume to boot your VirtualMachine."),
                    React.createElement("div", null,
                        "To add a bootable volume that is not listed, click",
                        ' ',
                        React.createElement(AddBootableVolumeLink, { hidePopover: hide, loadError: instanceTypesAndPreferencesData.loadError, text: t('Add Volume.') })),
                    React.createElement("div", null,
                        "Learn how to",
                        ' ',
                        React.createElement(Link, { to: "/quickstart?quickstart=windows-bootsource-pipeline" }, "create a bootable volume automatically by using pipelines"))))); }, className: "create-vm-instance-type-section__HelpTextIcon", position: PopoverPosition.right },
            React.createElement(HelpIcon, { className: "help-icon__cursor" }))));
};
export default CreateFromInstanceTypeTitle;
//# sourceMappingURL=CreateFromInstanceTypeTitle.js.map