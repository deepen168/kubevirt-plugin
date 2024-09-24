import React from 'react';
import { Route, Routes } from 'react-router-dom-v5-compat';
import { useSignals } from '@preact/signals-react/runtime';
import CreateVMHorizontalNav from './CreateVMHorizontalNav/CreateVMHorizontalNav';
import CustomizeInstanceTypeVirtualMachine from './CustomizeInstanceType/CustomizeInstanceTypeVirtualMachine';
import { WizardVMContextProvider } from './utils/WizardVMContext';
import Wizard from './wizard/Wizard';
var Catalog = function () {
    useSignals();
    return (React.createElement(WizardVMContextProvider, null,
        React.createElement(Routes, null,
            React.createElement(Route, { Component: Wizard, path: 'template/review/*' }),
            React.createElement(Route, { Component: CustomizeInstanceTypeVirtualMachine, path: "review/*" }),
            React.createElement(Route, { Component: CreateVMHorizontalNav, path: '/*' }))));
};
export default Catalog;
//# sourceMappingURL=Catalog.js.map