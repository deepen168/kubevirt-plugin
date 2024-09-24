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
import React, { useCallback, useState } from 'react';
import { Trans } from 'react-i18next';
import openCulture from 'images/openCulture.svg';
import { runningTourSignal } from '@kubevirt-utils/components/GuidedTour/utils/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettings from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettings';
import { Checkbox, Grid, GridItem, Modal, ModalVariant, Stack, Text, TextVariants, Title, } from '@patternfly/react-core';
import WelcomeButtons from './components/WelcomeButtons';
import './WelcomeModal.scss';
var WelcomeModal = function () {
    var t = useKubevirtTranslation().t;
    var _a = useState(true), isOpen = _a[0], setIsOpen = _a[1];
    var _b = useKubevirtUserSettings('quickStart'), quickStarts = _b[0], setQuickStarts = _b[1], loaded = _b[2];
    var onClose = useCallback(function () { return setIsOpen(false); }, []);
    if (runningTourSignal.value || !loaded || (quickStarts === null || quickStarts === void 0 ? void 0 : quickStarts.dontShowWelcomeModal))
        return null;
    return (React.createElement(Modal, { "aria-label": t('Welcome modal'), isOpen: isOpen, onClose: onClose, variant: ModalVariant.large },
        React.createElement(Grid, { className: "WelcomeModal__grid", hasGutter: true },
            React.createElement(GridItem, { span: 4 },
                React.createElement("img", { className: "WelcomeModal__image", src: openCulture })),
            React.createElement(GridItem, { span: 8 },
                React.createElement(Stack, null,
                    React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                        React.createElement(Title, { headingLevel: "h2" }, "Welcome to"),
                        React.createElement(Title, { headingLevel: "h1" }, "OpenShift Virtualization"),
                        React.createElement(Text, { className: "text-muted WelcomeModal__text", component: TextVariants.p }, "Use OpenShift Virtualization to run and manage virtualized workloads alongside container workloads. You can manage both Linux and Windows virtual machines."),
                        React.createElement(Title, { headingLevel: "h3" }, "What do you want to do next?"),
                        React.createElement(WelcomeButtons, { onClose: onClose }),
                        React.createElement(Checkbox, { onChange: function (_event, value) {
                                return setQuickStarts(__assign(__assign({}, quickStarts), { dontShowWelcomeModal: value }));
                            }, className: "WelcomeModal__checkbox", id: "welcome-modal-checkbox", isChecked: quickStarts === null || quickStarts === void 0 ? void 0 : quickStarts.dontShowWelcomeModal, label: t('Do not show this again') })))))));
};
export default WelcomeModal;
//# sourceMappingURL=WelcomeModal.js.map