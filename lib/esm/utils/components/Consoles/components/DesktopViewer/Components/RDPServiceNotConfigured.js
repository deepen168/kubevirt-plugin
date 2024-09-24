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
import { Trans } from 'react-i18next';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant } from '@patternfly/react-core';
import RDPServiceModal from './RDPServiceModal';
import './rdp-service.scss';
var RDPServiceNotConfigured = function (_a) {
    var vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
        React.createElement("span", null, "This is a Windows VirtualMachine but no Service for the RDP (Remote Desktop Protocol) can be found."),
        React.createElement("br", null),
        React.createElement("span", null,
            "For better experience accessing Windows console, it is recommended to use the RDP.",
            React.createElement(Button, { className: "kv-create-rdp-service-button", onClick: function () { return createModal(function (props) { return React.createElement(RDPServiceModal, __assign({ vm: vm, vmi: vmi }, props)); }); }, variant: ButtonVariant.secondary }, "Create RDP Service"))));
};
export default RDPServiceNotConfigured;
//# sourceMappingURL=RDPServiceNotConfigured.js.map