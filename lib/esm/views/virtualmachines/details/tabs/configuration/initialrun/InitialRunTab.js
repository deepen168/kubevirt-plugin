import React from 'react';
import { VirtualMachineModel } from 'src/views/dashboard-extensions/utils';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Divider, PageSection, PageSectionVariants, Title, } from '@patternfly/react-core';
import { onSubmitYAML } from '../details/utils/utils';
import InitialRunTabCloudinit from './components/InitialRunTabCloudinit';
import InitialRunTabSysprep from './components/InitialRunTabSysprep';
var InitialRunTab = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var accessReview = asAccessReview(VirtualMachineModel, vm, 'update');
    var canUpdateVM = useAccessReview(accessReview || {})[0];
    return (React.createElement(SidebarEditor, { onResourceUpdate: onSubmitYAML, pathsToHighlight: PATHS_TO_HIGHLIGHT.SCRIPTS_TAB, resource: vm }, function (resource) { return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(Title, { headingLevel: "h2" },
            React.createElement(SearchItem, { id: "initial-run" }, t('Initial run'))),
        React.createElement(DescriptionList, { className: "pf-c-description-list" },
            React.createElement(InitialRunTabCloudinit, { canUpdateVM: canUpdateVM, onSubmit: onSubmitYAML, vm: resource, vmi: vmi }),
            React.createElement(Divider, null),
            React.createElement(InitialRunTabSysprep, { canUpdateVM: canUpdateVM, vm: resource })))); }));
};
export default InitialRunTab;
//# sourceMappingURL=InitialRunTab.js.map