import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Stack, StackItem } from '@patternfly/react-core';
import ExpandSection from '../../../ExpandSection/ExpandSection';
import AutoComputeCPULimits from './components/AutoComputeCPULimits/AutoComputeCPULimits';
import KernelSamepageMerging from './components/KernelSamepageMerging/KernelSamepageMerging';
var ResourceManagementSection = function (_a) {
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, newBadge = _a.newBadge;
    var t = useKubevirtTranslation().t;
    return (React.createElement(ExpandSection, { toggleText: t('Resource management') },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, { isFilled: true },
                React.createElement(AutoComputeCPULimits, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge })),
            React.createElement(StackItem, { isFilled: true },
                React.createElement(KernelSamepageMerging, { hyperConvergeConfiguration: hyperConvergeConfiguration, newBadge: newBadge })))));
};
export default ResourceManagementSection;
//# sourceMappingURL=ResourceManagementSection.js.map