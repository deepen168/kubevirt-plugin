import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { startTour } from '@kubevirt-utils/components/GuidedTour/utils/constants';
import { ALL_NAMESPACES, ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, Split, SplitItem } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
var WelcomeButtons = function (_a) {
    var onClose = _a.onClose;
    var t = useKubevirtTranslation().t;
    var activeNamespace = useActiveNamespace()[0];
    var navigate = useNavigate();
    var namespace = activeNamespace === ALL_NAMESPACES_SESSION_KEY ? ALL_NAMESPACES : "ns/".concat(activeNamespace);
    return (React.createElement(Split, { hasGutter: true },
        React.createElement(SplitItem, null,
            React.createElement(Button, { onClick: function () {
                    navigate("/k8s/".concat(namespace, "/catalog"));
                    onClose();
                }, className: "WelcomeModal__button", variant: ButtonVariant.primary }, t('Create VirtualMachine'))),
        React.createElement(SplitItem, null,
            React.createElement(Button, { onClick: function () {
                    startTour();
                    onClose();
                }, className: "WelcomeModal__button", variant: ButtonVariant.secondary }, t('Start Tour'))),
        React.createElement(SplitItem, { isFilled: true }),
        React.createElement(SplitItem, null,
            React.createElement(Button, { onClick: function () {
                    navigate("/k8s/".concat(namespace, "/virtualization-overview"));
                    onClose();
                }, className: "WelcomeModal__button", icon: React.createElement(ExternalLinkAltIcon, null), iconPosition: "end", variant: ButtonVariant.link }, t('Getting started resources')))));
};
export default WelcomeButtons;
//# sourceMappingURL=WelcomeButtons.js.map