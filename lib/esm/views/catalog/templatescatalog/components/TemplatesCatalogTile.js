import * as React from 'react';
import DeprecatedBadge from '@kubevirt-utils/components/badges/DeprecatedBadge/DeprecatedBadge';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateFlavorData, isDeprecatedTemplate, WORKLOADS_LABELS, } from '@kubevirt-utils/resources/template';
import { getTemplateBootSourceType } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { getTemplateName, getTemplateWorkload, } from '@kubevirt-utils/resources/template/utils/selectors';
import { getVMBootSourceLabel } from '@kubevirt-utils/resources/vm/utils/source';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { CatalogTile } from '@patternfly/react-catalog-view-extension';
import { Badge, Skeleton, Stack, StackItem } from '@patternfly/react-core';
import { getTemplateOSIcon } from '../utils/os-icons';
export var TemplateTile = React.memo(function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var availableDatasources = _a.availableDatasources, availableTemplatesUID = _a.availableTemplatesUID, bootSourcesLoaded = _a.bootSourcesLoaded, onClick = _a.onClick, template = _a.template;
    var t = useKubevirtTranslation().t;
    var isDeprecated = isDeprecatedTemplate(template);
    var workload = getTemplateWorkload(template);
    var displayName = getTemplateName(template);
    var bootSource = getTemplateBootSourceType(template);
    var isBootSourceAvailable = availableTemplatesUID.has(template.metadata.uid);
    var dataSource = availableDatasources["".concat((_c = (_b = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _b === void 0 ? void 0 : _b.sourceRef) === null || _c === void 0 ? void 0 : _c.namespace, "-").concat((_e = (_d = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _d === void 0 ? void 0 : _d.sourceRef) === null || _e === void 0 ? void 0 : _e.name)];
    var _j = getTemplateFlavorData(template), cpuCount = _j.cpuCount, memory = _j.memory;
    var icon = React.useMemo(function () {
        return getTemplateOSIcon(template);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [(_g = (_f = template === null || template === void 0 ? void 0 : template.metadata) === null || _f === void 0 ? void 0 : _f.annotations) === null || _g === void 0 ? void 0 : _g.iconClass]);
    return (React.createElement("div", { onClick: function () { return onClick(template); } },
        React.createElement(CatalogTile, { badges: [
                React.createElement(Stack, { className: "badge-stack", key: "badge-stack" },
                    bootSourcesLoaded
                        ? isBootSourceAvailable && [
                            React.createElement(Badge, { key: "available-boot" }, t('Source available')),
                        ]
                        : [
                            React.createElement(Skeleton, { className: "badgeload", height: "18px", key: "loading-sources", width: "105px" }),
                        ],
                    isDeprecated ? React.createElement(DeprecatedBadge, { className: "deprecated-template" }) : null),
            ], title: React.createElement(Stack, null,
                React.createElement(StackItem, null,
                    React.createElement("b", null, displayName)),
                React.createElement(StackItem, { className: "text-secondary" }, template.metadata.name)), className: "vm-catalog-grid-tile", "data-test-id": template.metadata.name, iconImg: icon },
            React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, null,
                    React.createElement(Stack, null,
                        React.createElement(StackItem, null,
                            React.createElement("b", null, t('Project')),
                            " ",
                            template.metadata.namespace),
                        React.createElement(StackItem, null,
                            React.createElement("b", null, t('Boot source')),
                            " ",
                            getVMBootSourceLabel(bootSource === null || bootSource === void 0 ? void 0 : bootSource.type, dataSource)),
                        React.createElement(StackItem, null,
                            React.createElement("b", null, t('Workload')),
                            " ", (_h = WORKLOADS_LABELS === null || WORKLOADS_LABELS === void 0 ? void 0 : WORKLOADS_LABELS[workload]) !== null && _h !== void 0 ? _h : t('Other')),
                        React.createElement(StackItem, null,
                            React.createElement(StackItem, null,
                                React.createElement("b", null, t('CPU')),
                                " ",
                                cpuCount),
                            React.createElement(StackItem, null,
                                React.createElement("b", null, t('Memory')),
                                " ",
                                readableSizeUnit(memory)))))))));
});
//# sourceMappingURL=TemplatesCatalogTile.js.map