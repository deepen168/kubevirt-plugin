import React, { useCallback } from 'react';
import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import SectionWithSwitch from '@kubevirt-utils/components/SectionWithSwitch/SectionWithSwitch';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Skeleton } from '@patternfly/react-core';
import ExpandSection from '../../../../ExpandSection/ExpandSection';
import { MEMORY_OVERCOMMIT_END_VALUE, MEMORY_OVERCOMMIT_STARTING_VALUE } from './utils/const';
var MemoryDensity = function (_a) {
    var _b, _c;
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, newBadge = _a.newBadge;
    var t = useKubevirtTranslation().t;
    var isAdmin = useIsAdmin();
    var hyperConverge = hyperConvergeConfiguration[0], hyperLoaded = hyperConvergeConfiguration[1];
    var onChange = useCallback(function (checked) {
        k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: "/spec/higherWorkloadDensity/memoryOvercommitPercentage",
                    value: checked ? MEMORY_OVERCOMMIT_END_VALUE : MEMORY_OVERCOMMIT_STARTING_VALUE,
                },
            ],
            model: HyperConvergedModel,
            resource: hyperConverge,
        });
    }, [hyperConverge]);
    if (!hyperLoaded)
        return React.createElement(Skeleton, { width: '300px' });
    var higherDensity = (_c = (_b = hyperConverge.spec) === null || _b === void 0 ? void 0 : _b.higherWorkloadDensity) === null || _c === void 0 ? void 0 : _c.memoryOvercommitPercentage;
    return (React.createElement(ExpandSection, { toggleText: t('Memory density') },
        React.createElement(SectionWithSwitch, { helpTextIconContent: t('Configures the VM workloads to use swap for higher density'), id: "memory-density-feature", isDisabled: !hyperLoaded || !isAdmin, newBadge: newBadge, switchIsOn: Boolean(higherDensity > MEMORY_OVERCOMMIT_STARTING_VALUE), title: t('Enable memory density'), turnOnSwitch: onChange })));
};
export default MemoryDensity;
//# sourceMappingURL=MemoryDensity.js.map