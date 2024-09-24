import React from 'react';
import { logTemplateFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { CANCEL_CREATE_VM_BUTTON_CLICKED } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { getTemplateName } from '@kubevirt-utils/resources/template/utils/selectors';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import { Modal } from '@patternfly/react-core';
import { getTemplateOSIcon } from '../../utils/os-icons';
import { DrawerContextProvider } from './hooks/useDrawerContext';
import { TemplatesCatalogDrawerFooter } from './TemplatesCatalogDrawerFooter';
import { TemplatesCatalogDrawerPanel } from './TemplatesCatalogDrawerPanel';
import './TemplateCatalogDrawer.scss';
export var TemplatesCatalogDrawer = function (_a) {
    var _b;
    var isOpen = _a.isOpen, namespace = _a.namespace, onClose = _a.onClose, template = _a.template;
    var templateName = getTemplateName(template);
    var osIcon = getTemplateOSIcon(template);
    if (!isOpen)
        return null;
    var handleCancel = function () {
        logTemplateFlowEvent(CANCEL_CREATE_VM_BUTTON_CLICKED, template);
        onClose();
    };
    return (React.createElement(DrawerContextProvider, { template: template },
        React.createElement(Modal, { footer: template && React.createElement(TemplatesCatalogDrawerFooter, { namespace: namespace, onCancel: handleCancel }), header: React.createElement(CatalogItemHeader, { className: "co-catalog-page__overlay-header", iconImg: osIcon, title: templateName, vendor: (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.name }), "aria-label": "Template drawer", className: "pf-v5-c-modal-box ocs-modal co-catalog-page__overlay co-catalog-page__overlay--right template-catalog-drawer", disableFocusTrap: true, isOpen: isOpen, onClose: onClose },
            React.createElement(TemplatesCatalogDrawerPanel, null))));
};
//# sourceMappingURL=TemplatesCatalogDrawer.js.map