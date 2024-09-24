import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DescriptionList, Title } from '@patternfly/react-core';
import Detail from './Detail';
var ManualConnection = function (_a) {
    var _b = _a.rdp, rdp = _b === void 0 ? null : _b, _c = _a.spice, spice = _c === void 0 ? null : _c, textAddress = _a.textAddress, textConnectWith = _a.textConnectWith, textManualConnection = _a.textManualConnection, textNoProtocol = _a.textNoProtocol, textRdpAddress = _a.textRdpAddress, textRDPPort = _a.textRDPPort, textSpiceAddress = _a.textSpiceAddress, textSpicePort = _a.textSpicePort, textSpiceTlsPort = _a.textSpiceTlsPort, textVNCAddress = _a.textVNCAddress, textVNCPort = _a.textVNCPort, textVNCTlsPort = _a.textVNCTlsPort, _d = _a.vnc, vnc = _d === void 0 ? null : _d;
    var t = useKubevirtTranslation().t;
    var msg = spice || vnc
        ? textConnectWith || t('Connect with any viewer application for following protocols')
        : textNoProtocol || t('No connection available.');
    var address = spice && vnc && (spice === null || spice === void 0 ? void 0 : spice.address) === (vnc === null || vnc === void 0 ? void 0 : vnc.address) && (spice === null || spice === void 0 ? void 0 : spice.address);
    var rdpAddress = rdp && (rdp === null || rdp === void 0 ? void 0 : rdp.address) !== address ? rdp === null || rdp === void 0 ? void 0 : rdp.address : null;
    return (React.createElement("div", { className: "pf-c-console__manual-connection" },
        React.createElement(Title, { headingLevel: "h2", size: "3xl" }, textManualConnection || t('Manual Connection')),
        React.createElement("p", null, msg),
        React.createElement(DescriptionList, { className: "pf-c-description-list" },
            address && React.createElement(Detail, { title: textAddress || t('Address'), value: address }),
            !address && spice && (React.createElement(Detail, { title: textSpiceAddress || t('SPICE Address'), value: spice === null || spice === void 0 ? void 0 : spice.address })),
            rdpAddress && React.createElement(Detail, { title: textRdpAddress || t('RDP Address'), value: rdpAddress }),
            (spice === null || spice === void 0 ? void 0 : spice.port) && React.createElement(Detail, { title: textSpicePort || t('SPICE Port'), value: spice === null || spice === void 0 ? void 0 : spice.port }),
            (spice === null || spice === void 0 ? void 0 : spice.tlsPort) && (React.createElement(Detail, { title: textSpiceTlsPort || t('SPICE TLS Port'), value: spice === null || spice === void 0 ? void 0 : spice.tlsPort })),
            !address && vnc && (React.createElement(Detail, { title: textVNCAddress || t('VNC Address'), value: vnc === null || vnc === void 0 ? void 0 : vnc.address })),
            (vnc === null || vnc === void 0 ? void 0 : vnc.port) && React.createElement(Detail, { title: textVNCPort || t('VNC Port'), value: vnc === null || vnc === void 0 ? void 0 : vnc.port }),
            (vnc === null || vnc === void 0 ? void 0 : vnc.tlsPort) && (React.createElement(Detail, { title: textVNCTlsPort || t('VNC TLS Port'), value: vnc === null || vnc === void 0 ? void 0 : vnc.tlsPort })),
            (rdp === null || rdp === void 0 ? void 0 : rdp.port) && React.createElement(Detail, { title: textRDPPort || t('RDP Port'), value: rdp === null || rdp === void 0 ? void 0 : rdp.port }))));
};
export default ManualConnection;
//# sourceMappingURL=ManualConnection.js.map