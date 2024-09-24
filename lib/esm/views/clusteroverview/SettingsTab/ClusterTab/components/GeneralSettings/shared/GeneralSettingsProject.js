import React, { useEffect, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Text, TextVariants } from '@patternfly/react-core';
import ExpandSection from '../../../../ExpandSection/ExpandSection';
import GeneralSettingsError from '../shared/GeneralSettingsError';
import GeneralSettingsProjectSelector from '../shared/GeneralSettingsProjectSelector';
import '../shared/general-settings.scss';
var GeneralSettingsProject = function (_a) {
    var description = _a.description, hcoResourceNamespace = _a.hcoResourceNamespace, hyperConvergeConfiguration = _a.hyperConvergeConfiguration, namespace = _a.namespace, onChange = _a.onChange, projectsData = _a.projectsData, toggleText = _a.toggleText;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState(), selectedProject = _c[0], setSelectedProject = _c[1];
    var _d = useState(), error = _d[0], setError = _d[1];
    var hyperConverge = hyperConvergeConfiguration[0], hyperLoaded = hyperConvergeConfiguration[1];
    var projects = projectsData[0], projectsLoaded = projectsData[1], projectsLoadingError = projectsData[2];
    useEffect(function () {
        if (hyperConverge) {
            !selectedProject && setSelectedProject(hcoResourceNamespace !== null && hcoResourceNamespace !== void 0 ? hcoResourceNamespace : namespace);
        }
    }, [hcoResourceNamespace, hyperConverge, namespace, selectedProject]);
    var onSelect = function (value) {
        setError(null);
        setSelectedProject(value);
        onChange(hyperConverge, value, setError, setLoading);
    };
    return (React.createElement(ExpandSection, { className: "project-tab__main", toggleText: toggleText },
        React.createElement(Text, { className: "project-tab__main--help", component: TextVariants.small }, description),
        React.createElement(Text, { className: "project-tab__main--field-title", component: TextVariants.h6 }, t('Project')),
        React.createElement(GeneralSettingsProjectSelector, { loaded: !loading && hyperLoaded && projectsLoaded, onSelect: onSelect, projects: projects, selectedProject: selectedProject, setSelectedProject: setSelectedProject }),
        React.createElement(GeneralSettingsError, { error: error, loading: projectsLoadingError })));
};
export default GeneralSettingsProject;
//# sourceMappingURL=GeneralSettingsProject.js.map