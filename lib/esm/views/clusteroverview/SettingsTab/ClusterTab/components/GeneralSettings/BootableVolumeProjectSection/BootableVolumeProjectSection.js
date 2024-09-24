import React from 'react';
import { OPENSHIFT_OS_IMAGES_NS } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import GeneralSettingsProject from '../shared/GeneralSettingsProject';
import { getCurrentBootableVolumesNamespaceFromHCO, updateHCOBootableVolumesNamespace, } from './utils/utils';
import '../shared/general-settings.scss';
var BootableVolumeProjectSection = function (_a) {
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, projectsData = _a.projectsData;
    var t = useKubevirtTranslation().t;
    return (React.createElement(GeneralSettingsProject, { description: t("Select a project for Red Hat bootable volumes. The default project is 'openshift-virtualization-os-images'"), hcoResourceNamespace: getCurrentBootableVolumesNamespaceFromHCO(hyperConvergeConfiguration === null || hyperConvergeConfiguration === void 0 ? void 0 : hyperConvergeConfiguration[0]), hyperConvergeConfiguration: hyperConvergeConfiguration, namespace: OPENSHIFT_OS_IMAGES_NS, onChange: updateHCOBootableVolumesNamespace, projectsData: projectsData, toggleText: t('Bootable volumes project') }));
};
export default BootableVolumeProjectSection;
//# sourceMappingURL=BootableVolumeProjectSection.js.map