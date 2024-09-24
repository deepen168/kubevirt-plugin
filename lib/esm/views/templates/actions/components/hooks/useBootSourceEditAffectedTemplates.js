import * as React from 'react';
import { modelToGroupVersionKind, TemplateModel, } from '@kubevirt-ui/kubevirt-api/console';
import { getTemplateParameterValue, TEMPLATE_DATA_SOURCE_NAME_PARAMETER, TEMPLATE_DATA_SOURCE_NAMESPACE_PARAMETER, } from '@kubevirt-utils/resources/template';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useBootSourceEditAffectedTemplates = function (obj) {
    var allTemplates = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(TemplateModel),
        isList: true,
    })[0];
    var affectedTemplates = React.useMemo(function () {
        if (!allTemplates) {
            return [];
        }
        return allTemplates.filter(function (template) {
            var dataSourceName = getTemplateParameterValue(template, TEMPLATE_DATA_SOURCE_NAME_PARAMETER);
            var dataSourceNamespace = getTemplateParameterValue(template, TEMPLATE_DATA_SOURCE_NAMESPACE_PARAMETER);
            return (dataSourceName &&
                dataSourceNamespace &&
                getTemplateParameterValue(obj, TEMPLATE_DATA_SOURCE_NAME_PARAMETER) === dataSourceName &&
                getTemplateParameterValue(obj, TEMPLATE_DATA_SOURCE_NAMESPACE_PARAMETER) ===
                    dataSourceNamespace);
        });
    }, [allTemplates, obj]);
    return affectedTemplates;
};
export default useBootSourceEditAffectedTemplates;
//# sourceMappingURL=useBootSourceEditAffectedTemplates.js.map