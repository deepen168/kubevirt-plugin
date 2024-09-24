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
import { useWizardVMContext } from '../utils/WizardVMContext';
import WizardDisksTab from './tabs/disks/WizardDisksTab';
import WizardEnvironmentTab from './tabs/environment/WizardEnvironmentTab';
import WizardMetadataTab from './tabs/metadata/WizardMetadataTab';
import WizardNetworkTab from './tabs/network/WizardNetworkTab';
import WizardOverviewTab from './tabs/overview/WizardOverviewTab';
import WizardSchedulingTab from './tabs/scheduling/WizardSchedulingTab';
import WizardScriptsTab from './tabs/scripts/WizardScriptsTab';
import WizardYAMLTab from './tabs/yaml/WizardYAMLTab';
var withWizardVMContext = function (Tab) { return function (routeProps) {
    var vmContext = useWizardVMContext();
    return React.createElement(Tab, __assign({}, vmContext, routeProps));
}; };
export var wizardNavPages = [
    {
        component: withWizardVMContext(WizardOverviewTab),
        href: '',
        name: 'Overview',
    },
    {
        component: withWizardVMContext(WizardYAMLTab),
        href: 'yaml',
        name: 'YAML',
    },
    {
        component: withWizardVMContext(WizardSchedulingTab),
        href: 'scheduling',
        name: 'Scheduling',
    },
    {
        component: withWizardVMContext(WizardEnvironmentTab),
        href: 'environment',
        name: 'Environment',
    },
    {
        component: withWizardVMContext(WizardNetworkTab),
        href: 'network-interfaces',
        name: 'Network interfaces',
    },
    {
        component: withWizardVMContext(WizardDisksTab),
        href: 'disks',
        name: 'Disks',
    },
    {
        component: withWizardVMContext(WizardScriptsTab),
        href: 'scripts',
        name: 'Scripts',
    },
    {
        component: withWizardVMContext(WizardMetadataTab),
        href: 'metadata',
        name: 'Metadata',
    },
];
//# sourceMappingURL=tabs.js.map