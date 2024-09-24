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
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { HorizontalNav } from '@openshift-console/dynamic-plugin-sdk';
import { Bullseye, Button, Popover } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import useHCPermittedHostDevices from './hooks/useHCPermittedHostDevices';
import HardwareDevicesPageTable from './HardwareDevicesPageTable';
var HardwareDevicesPage = function (props) {
    var _a, _b;
    var t = useKubevirtTranslation().t;
    var _c = useHCPermittedHostDevices(), hcError = _c.hcError, hcLoaded = _c.hcLoaded, permittedHostDevices = _c.permittedHostDevices;
    var pages = [
        {
            component: function (pageProps) { return (React.createElement("div", { className: "co-m-pane__body" },
                React.createElement(Bullseye, null,
                    React.createElement(HardwareDevicesPageTable, __assign({}, pageProps))))); },
            href: '',
            name: t('PCI Host devices'),
            pageData: {
                devices: (_a = permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.pciHostDevices) === null || _a === void 0 ? void 0 : _a.map(function (device) { return (__assign(__assign({}, device), { selector: (device === null || device === void 0 ? void 0 : device.pciVendorSelector) || (device === null || device === void 0 ? void 0 : device.pciDeviceSelector) })); }),
                error: hcError,
                loaded: hcLoaded,
            },
        },
        {
            component: function (pageProps) { return (React.createElement("div", { className: "co-m-pane__body" },
                React.createElement(Bullseye, null,
                    React.createElement(HardwareDevicesPageTable, __assign({}, pageProps))))); },
            href: 'mediated',
            name: t('Mediated devices'),
            pageData: {
                devices: (_b = permittedHostDevices === null || permittedHostDevices === void 0 ? void 0 : permittedHostDevices.mediatedDevices) === null || _b === void 0 ? void 0 : _b.map(function (device) { return (__assign(__assign({}, device), { selector: device === null || device === void 0 ? void 0 : device.mdevNameSelector })); }),
                error: hcError,
                loaded: hcLoaded,
            },
        },
    ];
    return (React.createElement("div", { className: "co-m-list" },
        React.createElement("div", { className: "co-m-nav-title" },
            React.createElement("h1", null,
                t('Hardware Devices'),
                React.createElement(Popover, { bodyContent: t('Various types of hardware devices are assigned to virtual machines in the cluster') },
                    React.createElement(Button, { "aria-label": "Action", variant: "plain" },
                        React.createElement(HelpIcon, null))))),
        React.createElement(HorizontalNav, __assign({}, props, { match: props.match, pages: pages }))));
};
export default HardwareDevicesPage;
//# sourceMappingURL=HardwareDevicesPage.js.map