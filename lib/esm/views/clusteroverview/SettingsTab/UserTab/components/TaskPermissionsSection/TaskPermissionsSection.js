import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import usePermissions from '@kubevirt-utils/hooks/usePermissions/usePermissions';
import { GreenCheckCircleIcon, YellowExclamationTriangleIcon, } from '@openshift-console/dynamic-plugin-sdk';
import { Divider, Flex, FlexItem, Skeleton, Title } from '@patternfly/react-core';
import ExpandSection from '../../../ExpandSection/ExpandSection';
var TaskPermissionsSection = function () {
    var _a;
    var t = useKubevirtTranslation().t;
    var _b = usePermissions(), capabilitiesData = _b.capabilitiesData, isLoading = _b.isLoading;
    return (React.createElement(ExpandSection, { className: "permissions-tab--main", toggleText: t('Permissions') },
        React.createElement(Flex, null,
            React.createElement(FlexItem, null,
                React.createElement(Title, { headingLevel: "h6", size: "md" }, t('Tasks'))),
            React.createElement(FlexItem, { align: { default: 'alignRight' } },
                React.createElement(Title, { headingLevel: "h6", size: "md" }, t('Permissions')))),
        React.createElement(Divider, { className: "permissions-tab--main__divider" }),
        !isLoading ? ((_a = Object.values(capabilitiesData)) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
            var allowed = _a.allowed, taskName = _a.taskName;
            return (React.createElement(Flex, { className: "permissions-tab--main__row", key: taskName },
                React.createElement(FlexItem, null, taskName),
                React.createElement(FlexItem, { align: { default: 'alignRight' } }, allowed ? React.createElement(GreenCheckCircleIcon, null) : React.createElement(YellowExclamationTriangleIcon, null))));
        })) : (React.createElement(Skeleton, null))));
};
export default TaskPermissionsSection;
//# sourceMappingURL=TaskPermissionsSection.js.map