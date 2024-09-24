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
import React from 'react';
import classnames from 'classnames';
import { WizardDescriptionItem } from '@catalog/wizard/components/WizardDescriptionItem';
import AlertScripts from '@kubevirt-utils/components/AlertScripts/AlertScripts';
import { CloudInitDescription } from '@kubevirt-utils/components/CloudinitDescription/CloudInitDescription';
import CloudinitModal from '@kubevirt-utils/components/CloudinitModal/CloudinitModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { DescriptionList, DescriptionListDescription, Divider, PageSection, PageSectionVariants, } from '@patternfly/react-core';
import DynamicSSHKeyInjectionWizard from './components/DynamicSSHKeyInjectionWizard';
import SSHKey from './components/SSHKey';
import Sysprep from './components/Sysprep';
import './WizardScriptsTab.scss';
var WizardScriptsTab = function (_a) {
    var tabsData = _a.tabsData, updateVM = _a.updateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(PageSection, { className: "wizard-scripts-tab", variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onResourceUpdate: function (newVM) { return updateVM(newVM); }, pathsToHighlight: PATHS_TO_HIGHLIGHT.SCRIPTS_TAB, resource: vm },
            React.createElement(DescriptionList, { className: classnames('pf-c-description-list', 'wizard-scripts-tab__description-list') },
                React.createElement(DescriptionListDescription, null,
                    React.createElement(AlertScripts, null)),
                React.createElement(WizardDescriptionItem, { onEditClick: function () {
                        return createModal(function (modalProps) { return (React.createElement(CloudinitModal, __assign({}, modalProps, { onSubmit: updateVM, vm: vm }))); });
                    }, description: React.createElement(CloudInitDescription, { vm: vm }), isDisabled: tabsData.overview.templateMetadata.osType === OS_NAME_TYPES.windows, isEdit: true, showEditOnTitle: true, testId: "wizard-cloudinit", title: t('Cloud-init') }),
                React.createElement(Divider, null),
                React.createElement(SSHKey, null),
                React.createElement(Divider, null),
                React.createElement(DynamicSSHKeyInjectionWizard, null),
                React.createElement(Divider, null),
                React.createElement(Sysprep, null)))));
};
export default WizardScriptsTab;
//# sourceMappingURL=WizardScriptsTab.js.map