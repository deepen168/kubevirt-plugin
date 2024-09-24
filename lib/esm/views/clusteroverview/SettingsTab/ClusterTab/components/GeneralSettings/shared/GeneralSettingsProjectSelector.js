var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import CreateProjectModal from '@kubevirt-utils/components/CreateProjectModal/CreateProjectModal';
import InlineFilterSelect from '@kubevirt-utils/components/FilterSelect/InlineFilterSelect';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, ProjectModel } from '@kubevirt-utils/models';
import { getName } from '@kubevirt-utils/resources/shared';
import { Button, ButtonVariant, MenuFooter, Spinner } from '@patternfly/react-core';
var GeneralSettingsProjectSelector = function (_a) {
    var loaded = _a.loaded, onSelect = _a.onSelect, projects = _a.projects, selectedProject = _a.selectedProject, setSelectedProject = _a.setSelectedProject;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(InlineFilterSelect, { menuFooter: React.createElement(MenuFooter, null,
            React.createElement(Button, { onClick: function () {
                    return createModal(function (props) { return (React.createElement(CreateProjectModal, __assign({}, props, { createdProject: function (value) { var _a, _b; return ((_a = value === null || value === void 0 ? void 0 : value.metadata) === null || _a === void 0 ? void 0 : _a.name) && setSelectedProject((_b = value === null || value === void 0 ? void 0 : value.metadata) === null || _b === void 0 ? void 0 : _b.name); } }))); });
                }, key: "create-project", variant: ButtonVariant.secondary }, t('Create project'))), options: __spreadArray([], projects === null || projects === void 0 ? void 0 : projects.map(function (proj) { return ({
            groupVersionKind: modelToGroupVersionKind(ProjectModel),
            value: getName(proj),
        }); }).sort(function (a, b) { return a.value.localeCompare(b.value); }), true), toggleProps: {
            icon: !loaded && React.createElement(Spinner, { size: "sm" }),
            isDisabled: !loaded,
            placeholder: t('Select project'),
        }, selected: selectedProject, setSelected: onSelect }));
};
export default GeneralSettingsProjectSelector;
//# sourceMappingURL=GeneralSettingsProjectSelector.js.map