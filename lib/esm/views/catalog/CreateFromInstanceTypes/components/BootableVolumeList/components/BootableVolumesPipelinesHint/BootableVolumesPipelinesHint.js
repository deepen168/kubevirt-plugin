import React from 'react';
import { Trans } from 'react-i18next';
import AddBootableVolumeLink from '@catalog/CreateFromInstanceTypes/components/AddBootableVolumeLink/AddBootableVolumeLink';
import QuickStartLauncherLink from '@catalog/CreateFromInstanceTypes/components/BootableVolumeList/components/BootableVolumesPipelinesHint/QuickStartLauncherLink/QuickStartLauncherLink';
import useBootableVolumeOSes from '@catalog/CreateFromInstanceTypes/components/BootableVolumeList/hooks/useBootableVolumeOSes';
import useQuickStart from '@catalog/CreateFromInstanceTypes/components/BootableVolumeList/hooks/useQuickStart';
import { WINDOWS_BOOTSOURCE_PIPELINE } from '@catalog/CreateFromInstanceTypes/components/BootableVolumeList/utils/constants';
import useInstanceTypesAndPreferences from '@catalog/CreateFromInstanceTypes/state/hooks/useInstanceTypesAndPreferences';
import { getIconByOSName } from '@catalog/templatescatalog/utils/os-icons';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import './BootableVolumesPipelinesHint.scss';
var BootableVolumesPipelinesHint = function (_a) {
    var bootableVolumes = _a.bootableVolumes;
    var t = useKubevirtTranslation().t;
    var loadError = useInstanceTypesAndPreferences().loadError;
    var _b = useQuickStart(WINDOWS_BOOTSOURCE_PIPELINE), windowsQS = _b[0], windowsQSLoaded = _b[1];
    var _c = useBootableVolumeOSes(bootableVolumes), hasRHEL = _c.hasRHEL, hasWindows = _c.hasWindows;
    var windowsIcon = getIconByOSName(OS_NAME_TYPES.windows);
    var rhelIcon = getIconByOSName(OS_NAME_TYPES.rhel);
    if (!hasWindows && !hasRHEL) {
        return (React.createElement("div", { className: "bootable-volumes-pipelines-hint" },
            React.createElement("img", { alt: "os-icon", className: "bootable-volumes-pipelines-hint__icon", src: rhelIcon }),
            React.createElement("img", { alt: "os-icon", className: "bootable-volumes-pipelines-hint__icon", src: windowsIcon }),
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "Interested in other ",
                React.createElement("b", null, "Bootable Volumes"),
                "? Click",
                ' ',
                React.createElement(AddBootableVolumeLink, { loadError: loadError }),
                " to get started.")));
    }
    if (!hasWindows) {
        return (React.createElement("div", { className: "bootable-volumes-pipelines-hint" },
            React.createElement("img", { alt: "os-icon", className: "bootable-volumes-pipelines-hint__icon", src: windowsIcon }),
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "Interested in using a ",
                React.createElement("b", null, "Windows Bootable Volume"),
                "? Click",
                ' ',
                React.createElement(AddBootableVolumeLink, { loadError: loadError }),
                " to get started. To learn more, follow the",
                ' ',
                React.createElement(QuickStartLauncherLink, { quickStart: windowsQS, quickStartLoaded: windowsQSLoaded, text: t('Create a Windows boot source') }),
                ' ',
                "quick start.")));
    }
    if (!hasRHEL) {
        return (React.createElement("div", { className: "bootable-volumes-pipelines-hint" },
            React.createElement("img", { alt: "os-icon", className: "bootable-volumes-pipelines-hint__icon", src: rhelIcon }),
            React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                "Interested in using a ",
                React.createElement("b", null, "RHEL Bootable Volume"),
                "? Click",
                ' ',
                React.createElement(AddBootableVolumeLink, { loadError: loadError }),
                " to get started.")));
    }
    return null;
};
export default BootableVolumesPipelinesHint;
//# sourceMappingURL=BootableVolumesPipelinesHint.js.map