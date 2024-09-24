import React from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { Text, TextVariants, Title } from '@patternfly/react-core';
var CutomizeITVMHeader = function () {
    var t = useKubevirtTranslation().t;
    var selectedBootableVolume = useInstanceTypeVMStore().instanceTypeVMState.selectedBootableVolume;
    return (React.createElement("div", { className: "pf-c-page__main-breadcrumb wizard-header" },
        React.createElement(Title, { headingLevel: "h1" }, t('Customize and create VirtualMachine')),
        React.createElement(Text, { component: TextVariants.small, "data-test": "wizard title help" }, t('Bootable volume: {{bootableVolumeName}}', {
            bootableVolumeName: getName(selectedBootableVolume),
        }))));
};
export default CutomizeITVMHeader;
//# sourceMappingURL=CustomizeITVMHeader.js.map