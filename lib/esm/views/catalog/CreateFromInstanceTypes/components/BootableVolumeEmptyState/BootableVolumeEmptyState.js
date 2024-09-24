import React from 'react';
import { Trans } from 'react-i18next';
import AddBootableVolumeLink from '@catalog/CreateFromInstanceTypes/components/AddBootableVolumeLink/AddBootableVolumeLink';
import BootableVolumeOSIcons from '@catalog/CreateFromInstanceTypes/components/BootableVolumeEmptyState/BootableVolumeOSIcons';
import useInstanceTypesAndPreferences from '@catalog/CreateFromInstanceTypes/state/hooks/useInstanceTypesAndPreferences';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { EmptyState, Title } from '@patternfly/react-core';
import './BootableVolumeEmptyState.scss';
var BootableVolumeEmptyState = function () {
    var t = useKubevirtTranslation().t;
    var loadError = useInstanceTypesAndPreferences().loadError;
    return (React.createElement(EmptyState, null,
        React.createElement("div", { className: "bootable-volume-empty-state" },
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                React.createElement(Title, { className: "bootable-volume-empty-state__title", headingLevel: "h3" }, "No volumes found"),
                "To add a bootable volume, click ",
                React.createElement(AddBootableVolumeLink, { loadError: loadError }),
                " Add volume"),
            React.createElement(BootableVolumeOSIcons, null))));
};
export default BootableVolumeEmptyState;
//# sourceMappingURL=BootableVolumeEmptyState.js.map