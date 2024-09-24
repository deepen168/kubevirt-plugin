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
import React, { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DRAWER_FORM_ID } from '@catalog/templatescatalog/utils/consts';
import HardwareDevices from '@kubevirt-utils/components/HardwareDevices/HardwareDevices';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getGPUDevices, getHostDevices } from '@kubevirt-utils/resources/vm';
import { DescriptionListDescription, ExpandableSection, Form, Grid, GridItem, Stack, StackItem, } from '@patternfly/react-core';
import { useDrawerContext } from './hooks/useDrawerContext';
import StorageSection from './StorageSection/StorageSection';
import FieldsSections from './FieldsSections';
import { TemplateInfoSection } from './TemplateInfoSection';
export var TemplatesCatalogDrawerPanel = memo(function () {
    var _a, _b;
    var t = useKubevirtTranslation().t;
    var vm = useDrawerContext().vm;
    var hostDevicesCount = ((_a = getHostDevices(vm)) === null || _a === void 0 ? void 0 : _a.length) || 0;
    var gpusCount = ((_b = getGPUDevices(vm)) === null || _b === void 0 ? void 0 : _b.length) || 0;
    var hardwareDevicesCount = hostDevicesCount + gpusCount;
    var methods = useForm();
    return (React.createElement("div", { className: "modal-body modal-body-border modal-body-content" },
        React.createElement("div", { className: "modal-body-inner-shadow-covers" },
            React.createElement("div", { className: "co-catalog-page__overlay-body" },
                React.createElement(FormProvider, __assign({}, methods),
                    React.createElement(Form, { id: DRAWER_FORM_ID },
                        React.createElement(Grid, { hasGutter: true },
                            React.createElement(GridItem, { span: 6 },
                                React.createElement(Stack, { className: "template-catalog-drawer-info", hasGutter: true },
                                    React.createElement(StackItem, null,
                                        React.createElement(TemplateInfoSection, null),
                                        hardwareDevicesCount !== 0 && (React.createElement(ExpandableSection, { toggleText: t('Hardware devices ({{devices}})', {
                                                devices: hardwareDevicesCount,
                                            }), isIndented: true },
                                            React.createElement(DescriptionListDescription, null,
                                                React.createElement(HardwareDevices, { hideEdit: true, vm: vm }))))))),
                            React.createElement(GridItem, { span: 6 },
                                React.createElement(StorageSection, null),
                                React.createElement(FieldsSections, null)))))))));
});
TemplatesCatalogDrawerPanel.displayName = 'TemplatesCatalogDrawerPanel';
//# sourceMappingURL=TemplatesCatalogDrawerPanel.js.map