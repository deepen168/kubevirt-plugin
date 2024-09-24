import React from 'react';
import { modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getInstanceTypeModelFromMatcher } from '@kubevirt-utils/resources/instancetype/helper';
import useInstanceType from '@kubevirt-utils/resources/vm/hooks/useInstanceType';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Skeleton, TextListItem, TextListItemVariants } from '@patternfly/react-core';
var InstanceTypeConfiguration = function (_a) {
    var itMatcher = _a.itMatcher;
    var t = useKubevirtTranslation().t;
    var _b = useInstanceType(itMatcher), instanceType = _b.instanceType, instanceTypeLoaded = _b.instanceTypeLoaded;
    return (React.createElement(React.Fragment, null,
        React.createElement(TextListItem, { className: "text-muted", component: TextListItemVariants.dt }, t('InstanceType')),
        React.createElement(TextListItem, { component: TextListItemVariants.dd }, instanceTypeLoaded ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(getInstanceTypeModelFromMatcher(itMatcher)), namespace: instanceType.metadata.namespace }, instanceType.metadata.name)) : (React.createElement(Skeleton, { className: "pf-m-width-sm" })))));
};
export default InstanceTypeConfiguration;
//# sourceMappingURL=InstanceTypeConfiguration.js.map