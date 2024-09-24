import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import GeneralSettingsProject from '../shared/GeneralSettingsProject';
import { getCurrentTemplatesNamespaceFromHCO, OPENSHIFT, updateHCOCommonTemplatesNamespace, } from './utils/utils';
import '../shared/general-settings.scss';
var TemplatesProjectSection = function (_a) {
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, projectsData = _a.projectsData;
    var t = useKubevirtTranslation().t;
    return (React.createElement(GeneralSettingsProject, { description: React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            "Select a project for Red Hat templates. The default project is 'openshift'. If you want to store Red Hat templates in multiple projects, you must clone",
            React.createElement("br", null),
            "the Red Hat template by selecting ",
            React.createElement("b", null, "Clone template"),
            " from the template action menu and then selecting another project for the cloned template."), hcoResourceNamespace: getCurrentTemplatesNamespaceFromHCO(hyperConvergeConfiguration === null || hyperConvergeConfiguration === void 0 ? void 0 : hyperConvergeConfiguration[0]), hyperConvergeConfiguration: hyperConvergeConfiguration, namespace: OPENSHIFT, onChange: updateHCOCommonTemplatesNamespace, projectsData: projectsData, toggleText: t('Template project') }));
};
export default TemplatesProjectSection;
//# sourceMappingURL=TemplatesProjectSection.js.map