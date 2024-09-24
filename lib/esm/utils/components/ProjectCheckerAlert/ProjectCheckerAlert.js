import React from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, Button, ButtonVariant, Flex, FlexItem, pluralize, Popover, } from '@patternfly/react-core';
var ProjectCheckerAlert = function (_a) {
    var projectsLoaded = _a.projectsLoaded, _b = _a.qualifiedProjects, qualifiedProjects = _b === void 0 ? [] : _b;
    var t = useKubevirtTranslation().t;
    if (!projectsLoaded) {
        return React.createElement(Loading, null);
    }
    var numQualifiedProjects = qualifiedProjects === null || qualifiedProjects === void 0 ? void 0 : qualifiedProjects.length;
    var matchingProjectText = pluralize(numQualifiedProjects, 'Project');
    return (React.createElement(Alert, { title: React.createElement(React.Fragment, null, numQualifiedProjects ? (React.createElement(React.Fragment, null, t('{{matchingProjectText}} matching', {
            matchingProjectText: matchingProjectText,
        }))) : (t('No matching Projects found for the labels'))), isInline: true, variant: numQualifiedProjects ? AlertVariant.success : AlertVariant.warning }, numQualifiedProjects ? (React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null, qualifiedProjects === null || qualifiedProjects === void 0 ? void 0 : qualifiedProjects.map(function (project) { return (React.createElement(Flex, { key: project.metadata.uid },
            React.createElement(FlexItem, { spacer: { default: 'spacerXs' } },
                React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(ProjectModel), name: project.metadata.name })))); })), headerContent: React.createElement(React.Fragment, null, t('{{qualifiedProjectsCount}} matching Projects found', {
            qualifiedProjectsCount: numQualifiedProjects,
        })) },
        React.createElement(Button, { isInline: true, variant: ButtonVariant.link }, t('View matching {{matchingProjectText}}', { matchingProjectText: matchingProjectText })))) : (t('Scheduling will not be possible at this state'))));
};
export default ProjectCheckerAlert;
//# sourceMappingURL=ProjectCheckerAlert.js.map