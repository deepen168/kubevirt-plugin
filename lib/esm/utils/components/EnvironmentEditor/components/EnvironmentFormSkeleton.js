import React, { memo } from 'react';
import { Skeleton, Stack, StackItem } from '@patternfly/react-core';
import EnvironmentFormTitle from './EnvironmentFormTitle';
var EnvironmentFormSkeleton = memo(function () { return (React.createElement(Stack, { hasGutter: true },
    React.createElement(EnvironmentFormTitle, null),
    React.createElement(StackItem, null),
    React.createElement(Skeleton, { height: "40px", width: "80%" }),
    React.createElement(Skeleton, { height: "30px", width: "40%" }))); });
EnvironmentFormSkeleton.displayName = 'EnvironmentFormSkeleton';
export default EnvironmentFormSkeleton;
//# sourceMappingURL=EnvironmentFormSkeleton.js.map