import React from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import HorizontalNavbar from '@kubevirt-utils/components/HorizontalNavbar/HorizontalNavbar';
import { SidebarEditorProvider } from '@kubevirt-utils/components/SidebarEditor/SidebarEditorContext';
import { Stack, StackItem } from '@patternfly/react-core';
import { useWizardVMContext } from '../utils/WizardVMContext';
import { WizardEmptyState } from './components/WizardEmptyState';
import { WizardFooter } from './components/WizardFooter';
import { WizardHeader } from './components/WizardHeader';
import { wizardNavPages } from './tabs';
import './Wizard.scss';
var Wizard = function () {
    var ns = useParams().ns;
    var vm = useWizardVMContext().vm;
    if (!vm)
        return React.createElement(WizardEmptyState, { namespace: ns });
    return (React.createElement(SidebarEditorProvider, null,
        React.createElement(Stack, { hasGutter: true },
            React.createElement(WizardHeader, { namespace: ns }),
            React.createElement(StackItem, { className: "vm-wizard-body", isFilled: true },
                React.createElement(HorizontalNavbar, { pages: wizardNavPages, vm: vm })),
            React.createElement(WizardFooter, { namespace: ns }))));
};
export default Wizard;
//# sourceMappingURL=Wizard.js.map