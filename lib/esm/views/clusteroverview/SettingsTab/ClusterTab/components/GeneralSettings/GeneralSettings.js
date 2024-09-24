import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-utils/models';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Stack, StackItem } from '@patternfly/react-core';
import ExpandSection from '../../../ExpandSection/ExpandSection';
import AutomaticImagesDownload from './AutomaticImagesDownload/AutomaticImagesDownload';
import BootableVolumeProjectSection from './BootableVolumeProjectSection/BootableVolumeProjectSection';
import LiveMigrationSection from './LiveMigrationSection/LiveMigrationSection';
import MemoryDensity from './MemoryDensity/MemoryDensity';
import SSHConfiguration from './SSHConfiguration/SSHConfiguration';
import TemplatesProjectSection from './TemplatesProjectSection/TemplatesProjectSection';
var GeneralSettings = function (_a) {
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, newBadge = _a.newBadge;
    var t = useKubevirtTranslation().t;
    var projectsData = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
    });
    return (React.createElement(ExpandSection, { toggleText: t('General settings') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, { isFilled: true },
                React.createElement(LiveMigrationSection, { hyperConvergeConfiguration: hyperConvergeConfiguration })),
            React.createElement(StackItem, { isFilled: true },
                React.createElement(SSHConfiguration, { newBadge: newBadge })),
            React.createElement(StackItem, { isFilled: true },
                React.createElement(TemplatesProjectSection, { hyperConvergeConfiguration: hyperConvergeConfiguration, projectsData: projectsData })),
            React.createElement(StackItem, { isFilled: true },
                React.createElement(BootableVolumeProjectSection, { hyperConvergeConfiguration: hyperConvergeConfiguration, projectsData: projectsData })),
            React.createElement(StackItem, { isFilled: true },
                React.createElement(MemoryDensity, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge })),
            React.createElement(StackItem, null,
                React.createElement(AutomaticImagesDownload, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge })))));
};
export default GeneralSettings;
//# sourceMappingURL=GeneralSettings.js.map