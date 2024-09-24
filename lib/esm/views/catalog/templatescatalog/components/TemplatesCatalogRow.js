import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAnnotation, getName } from '@kubevirt-utils/resources/shared';
import { ANNOTATIONS, getTemplateFlavorData, getTemplateName, getTemplateWorkload, WORKLOADS_LABELS, } from '@kubevirt-utils/resources/template';
import { getTemplateBootSourceType } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { getVMBootSourceLabel } from '@kubevirt-utils/resources/vm/utils/source';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
import { Button, Label } from '@patternfly/react-core';
import { getTemplateOSIcon } from '../utils/os-icons';
import TemplateRowAvailableSource from './TemplateRowAvailableSource/TemplateRowAvailableSource';
export var TemplatesCatalogRow = React.memo(function (_a) {
    var _b, _c, _d, _e;
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, _f = _a.rowData, availableDatasources = _f.availableDatasources, availableTemplatesUID = _f.availableTemplatesUID, onTemplateClick = _f.onTemplateClick;
    var t = useKubevirtTranslation().t;
    var bootSource = getTemplateBootSourceType(obj);
    var _g = getTemplateFlavorData(obj), cpuCount = _g.cpuCount, memory = _g.memory;
    var workload = getTemplateWorkload(obj);
    var dataSource = availableDatasources["".concat((_c = (_b = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _b === void 0 ? void 0 : _b.sourceRef) === null || _c === void 0 ? void 0 : _c.namespace, "-").concat((_e = (_d = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _d === void 0 ? void 0 : _d.sourceRef) === null || _e === void 0 ? void 0 : _e.name)];
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-40", id: "name" },
            React.createElement("img", { alt: "", className: "vm-catalog-row-icon", src: getTemplateOSIcon(obj) }),
            React.createElement(Button, { isInline: true, onClick: function () { return onTemplateClick(obj); }, variant: "link" },
                getTemplateName(obj),
                ' ',
                !isEmpty(getAnnotation(obj, ANNOTATIONS.displayName)) && (React.createElement(Label, { isCompact: true, variant: "outline" }, getName(obj))))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-10", id: "workload" }, WORKLOADS_LABELS === null || WORKLOADS_LABELS === void 0 ? void 0 : WORKLOADS_LABELS[workload]),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "source" },
            React.createElement(TemplateRowAvailableSource, { isBootSourceAvailable: availableTemplatesUID.has(obj.metadata.uid), source: getVMBootSourceLabel(bootSource === null || bootSource === void 0 ? void 0 : bootSource.type, dataSource) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "pf-m-width-20", id: "cpu" },
            t('CPU'),
            " ",
            cpuCount,
            " | ",
            t('Memory'),
            " ",
            readableSizeUnit(memory))));
});
TemplatesCatalogRow.displayName = 'TemplatesCatalogRow';
//# sourceMappingURL=TemplatesCatalogRow.js.map