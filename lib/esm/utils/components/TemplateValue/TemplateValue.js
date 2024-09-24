import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isTemplateParameter } from '@kubevirt-utils/utils/utils';
import './template-value.scss';
var TemplateNameTableData = function (_a) {
    var children = _a.children, value = _a.value;
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: "template-value" },
        children || value,
        isTemplateParameter(value) && (React.createElement("div", { className: "template-parameter" }, t('Template parameter')))));
};
export default TemplateNameTableData;
//# sourceMappingURL=TemplateValue.js.map