var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { memo } from 'react';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-ui/kubevirt-api/console';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Text, TextVariants } from '@patternfly/react-core';
import './TemplatesCatalogProjectsDropdown.scss';
export var TemplatesCatalogProjectsDropdown = memo(function (_a) {
    var onChange = _a.onChange, selectedProject = _a.selectedProject;
    var t = useKubevirtTranslation().t;
    var projects = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: false,
    })[0];
    var onSelect = function (value) {
        onChange(value === ALL_PROJECTS ? '' : value);
    };
    return (React.createElement("div", { className: "templates-catalog-project-dropdown" },
        React.createElement(Text, { className: "templates-catalog-project-dropdown-label", component: TextVariants.h6 }, t('Template project')),
        React.createElement(InlineFilterSelect, { options: __spreadArray([
                { children: ALL_PROJECTS, value: ALL_PROJECTS }
            ], projects
                .sort(function (a, b) { return getName(a).localeCompare(getName(b)); })
                .map(function (proj) {
                var name = getName(proj);
                return { children: name, value: name };
            }), true), selected: selectedProject || ALL_PROJECTS, setSelected: onSelect, toggleProps: { isFullWidth: true } })));
});
TemplatesCatalogProjectsDropdown.displayName = 'TemplatesCatalogProjectsDropdown';
//# sourceMappingURL=TemplatesCatalogProjectsDropdown.js.map