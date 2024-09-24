var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import ManualConnection from './ManualConnection';
import RemoteViewer from './RemoteViewer';
import '@patternfly/react-styles/css/components/Consoles/DesktopViewer.css';
var RDP = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.rdp, rdp = _c === void 0 ? null : _c, _d = _a.spice, spice = _d === void 0 ? null : _d, _e = _a.vnc, vnc = _e === void 0 ? null : _e, props = __rest(_a, ["children", "rdp", "spice", "vnc"]);
    return (React.createElement("div", { className: "pf-c-console__desktop-viewer" },
        React.createElement(RemoteViewer, { onDownload: props === null || props === void 0 ? void 0 : props.onDownload, onGenerate: props === null || props === void 0 ? void 0 : props.onGenerate, rdp: rdp, spice: spice, textConnectWithRDP: props === null || props === void 0 ? void 0 : props.textConnectWithRDP, textConnectWithRemoteViewer: props === null || props === void 0 ? void 0 : props.textConnectWithRemoteViewer, textMoreInfo: props === null || props === void 0 ? void 0 : props.textMoreInfo, textMoreInfoContent: props === null || props === void 0 ? void 0 : props.textMoreInfoContent, textMoreRDPInfo: props === null || props === void 0 ? void 0 : props.textMoreRDPInfo, textMoreRDPInfoContent: props === null || props === void 0 ? void 0 : props.textMoreRDPInfoContent, vnc: vnc }, children),
        React.createElement(ManualConnection, { rdp: rdp, spice: spice, textAddress: props === null || props === void 0 ? void 0 : props.textAddress, textConnectWith: props === null || props === void 0 ? void 0 : props.textConnectWith, textManualConnection: props === null || props === void 0 ? void 0 : props.textManualConnection, textNoProtocol: props === null || props === void 0 ? void 0 : props.textNoProtocol, textRdpAddress: props === null || props === void 0 ? void 0 : props.textRdpAddress, textRDPPort: props === null || props === void 0 ? void 0 : props.textRDPPort, textSpiceAddress: props === null || props === void 0 ? void 0 : props.textSpiceAddress, textSpicePort: props === null || props === void 0 ? void 0 : props.textSpicePort, textSpiceTlsPort: props === null || props === void 0 ? void 0 : props.textSpiceTlsPort, textVNCAddress: props === null || props === void 0 ? void 0 : props.textVNCAddress, textVNCPort: props === null || props === void 0 ? void 0 : props.textVNCPort, textVNCTlsPort: props === null || props === void 0 ? void 0 : props.textVNCTlsPort, vnc: vnc })));
};
export default RDP;
//# sourceMappingURL=RDP.js.map