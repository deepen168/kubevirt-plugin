import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ExpandableSection } from '@patternfly/react-core';
import { RDP_CONSOLE_TYPE, SPICE_CONSOLE_TYPE, VNC_CONSOLE_TYPE } from '../../utils/ConsoleConsts';
import { DEFAULT_RDP_FILENAME, DEFAULT_RDP_MIMETYPE, DEFAULT_VV_FILENAME, DEFAULT_VV_MIMETYPE, } from '../utils/constants';
import { downloadFile, generateDescriptorFile } from '../utils/utils';
import MoreInformationDefault from './MoreInformationDefault';
var RemoteViewer = function (_a) {
    var _b = _a.onDownload, onDownload = _b === void 0 ? downloadFile : _b, _c = _a.onGenerate, onGenerate = _c === void 0 ? generateDescriptorFile : _c, _d = _a.rdp, rdp = _d === void 0 ? null : _d, _e = _a.spice, spice = _e === void 0 ? null : _e, textConnectWithRDP = _a.textConnectWithRDP, textConnectWithRemoteViewer = _a.textConnectWithRemoteViewer, textMoreInfo = _a.textMoreInfo, textMoreInfoContent = _a.textMoreInfoContent, textMoreRDPInfo = _a.textMoreRDPInfo, textMoreRDPInfoContent = _a.textMoreRDPInfoContent, _f = _a.vnc, vnc = _f === void 0 ? null : _f;
    var t = useKubevirtTranslation().t;
    var _g = React.useState(false), isExpandedDefault = _g[0], setIsExpandedDefault = _g[1];
    var _h = React.useState(false), isExpandedRDP = _h[0], setIsExpandedRDP = _h[1];
    var console = spice || vnc;
    var onClickVV = function () {
        var type = spice ? SPICE_CONSOLE_TYPE : VNC_CONSOLE_TYPE;
        if (console) {
            var vv = onGenerate(console, type);
            return onDownload(DEFAULT_VV_FILENAME, vv === null || vv === void 0 ? void 0 : vv.content, (vv === null || vv === void 0 ? void 0 : vv.mimeType) || DEFAULT_VV_MIMETYPE);
        }
    };
    var onClickRDP = function () {
        var rdpFile = onGenerate(rdp, RDP_CONSOLE_TYPE);
        return onDownload(DEFAULT_RDP_FILENAME, rdpFile === null || rdpFile === void 0 ? void 0 : rdpFile.content, (rdpFile === null || rdpFile === void 0 ? void 0 : rdpFile.mimeType) || DEFAULT_RDP_MIMETYPE);
    };
    return (React.createElement("div", { className: "pf-c-console__remote-viewer" },
        React.createElement("div", { className: "pf-c-console__remote-viewer-launch" },
            React.createElement(Button, { className: "pf-c-console__remote-viewer-launch-vv", isDisabled: !console, onClick: onClickVV }, textConnectWithRemoteViewer || t('Launch Remote Viewer')),
            !!rdp && (React.createElement(Button, { className: "pf-c-console__remote-viewer-launch-rdp", onClick: onClickRDP }, textConnectWithRDP || t('Launch Remote Desktop')))),
        !!console && (React.createElement(ExpandableSection, { isExpanded: isExpandedDefault, onToggle: function (_event, isExpanded) { return setIsExpandedDefault(isExpanded); }, toggleText: textMoreInfo || t('Remote Viewer Details') },
            React.createElement(MoreInformationDefault, { textMoreInfoContent: textMoreInfoContent }))),
        !!rdp && (React.createElement(ExpandableSection, { isExpanded: isExpandedRDP, onToggle: function (_event, isExpanded) { return setIsExpandedRDP(isExpanded); }, toggleText: textMoreRDPInfo || t('Remote Desktop Details') }, textMoreRDPInfoContent !== null && textMoreRDPInfoContent !== void 0 ? textMoreRDPInfoContent : (React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            React.createElement("p", null,
                "Clicking \"Launch Remote Desktop\" will download an .rdp file and launch",
                ' ',
                React.createElement("i", null, "Remote Desktop Viewer"),
                "."),
            React.createElement("p", null, "Since the RDP is native Windows protocol, the best experience is achieved when used on Windows-based desktop."),
            React.createElement("p", null,
                "For other operating systems, the ",
                React.createElement("i", null, "Remote Viewer"),
                " is recommended. If RDP needs to be accessed anyway, the ",
                React.createElement("a", { href: "https://www.remmina.org/wp/" }, "Remmina"),
                " client is available.")))))));
};
export default RemoteViewer;
//# sourceMappingURL=RemoteViewer.js.map