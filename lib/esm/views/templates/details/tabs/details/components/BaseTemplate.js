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
import * as React from 'react';
import { getVMTemplateBaseName } from 'src/views/templates/utils/selectors';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, TemplateModel } from '@kubevirt-utils/models';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Text } from '@patternfly/react-core';
var BaseTemplate = function (_a) {
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var baseTemplate = getVMTemplateBaseName(template);
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: baseTemplate ? (React.createElement(ResourceLink, __assign({ groupVersionKind: modelToGroupVersionKind(TemplateModel) }, baseTemplate))) : (React.createElement(Text, { className: "text-muted" }, t('Not available'))), descriptionHeader: t('Base template') }));
};
export default BaseTemplate;
//# sourceMappingURL=BaseTemplate.js.map