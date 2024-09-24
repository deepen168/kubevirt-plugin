import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateBootSourceType } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { getVMBootSourceLabel } from '@kubevirt-utils/resources/vm/utils/source';
import { Badge, Label, Split, SplitItem } from '@patternfly/react-core';
import './VirtualMachineTemplatesSource.scss';
var VirtualMachineTemplatesSource = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var availableDatasources = _a.availableDatasources, availableTemplatesUID = _a.availableTemplatesUID, cloneInProgressDatasources = _a.cloneInProgressDatasources, template = _a.template;
    var t = useKubevirtTranslation().t;
    var bootSource = getTemplateBootSourceType(template);
    var dataSource = availableDatasources === null || availableDatasources === void 0 ? void 0 : availableDatasources["".concat((_c = (_b = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _b === void 0 ? void 0 : _b.sourceRef) === null || _c === void 0 ? void 0 : _c.namespace, "-").concat((_e = (_d = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _d === void 0 ? void 0 : _d.sourceRef) === null || _e === void 0 ? void 0 : _e.name)];
    var bootSourceLabel = t(getVMBootSourceLabel(bootSource === null || bootSource === void 0 ? void 0 : bootSource.type, dataSource));
    var isBootSourceAvailable = availableTemplatesUID.has((_f = template === null || template === void 0 ? void 0 : template.metadata) === null || _f === void 0 ? void 0 : _f.uid);
    var isCloningSource = !!(cloneInProgressDatasources === null || cloneInProgressDatasources === void 0 ? void 0 : cloneInProgressDatasources["".concat((_h = (_g = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _g === void 0 ? void 0 : _g.sourceRef) === null || _h === void 0 ? void 0 : _h.namespace, "-").concat((_k = (_j = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _j === void 0 ? void 0 : _j.sourceRef) === null || _k === void 0 ? void 0 : _k.name)]);
    return (React.createElement(Split, { hasGutter: true },
        React.createElement(SplitItem, { className: "virtual-machine-templates-source__boot-source-label" }, bootSourceLabel),
        isBootSourceAvailable && (React.createElement(SplitItem, null,
            React.createElement(Badge, { key: "available-boot" }, t('Source available')))),
        isCloningSource && (React.createElement(SplitItem, null,
            React.createElement(Label, null, t('Clone in progress'))))));
};
export default VirtualMachineTemplatesSource;
//# sourceMappingURL=VirtualMachineTemplatesSource.js.map