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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import { ProcessedTemplatesModel } from '@kubevirt-ui/kubevirt-api/console';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { generateParamsWithPrettyName } from './../utils/helpers';
export default (function (template) {
    var _a = useState(), error = _a[0], setError = _a[1];
    var _b = useParams().ns, namespace = _b === void 0 ? DEFAULT_NAMESPACE : _b;
    var _c = useState(), templateWithGeneratedValues = _c[0], setTemplateWithGeneratedValues = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    useEffect(function () {
        if (!template)
            return;
        var parameters = generateParamsWithPrettyName(template);
        var _a = parameters.reduce(function (acc, parameter) {
            if (parameter === null || parameter === void 0 ? void 0 : parameter.generate) {
                acc.parametersToGenerate.push(parameter);
                return acc;
            }
            acc.excludedParameters.push(parameter);
            return acc;
        }, { excludedParameters: [], parametersToGenerate: [] }), excludedParameters = _a.excludedParameters, parametersToGenerate = _a.parametersToGenerate;
        if (parametersToGenerate.length === 0) {
            setError(null);
            setTemplateWithGeneratedValues(__assign(__assign({}, template), { parameters: parameters }));
            return;
        }
        setLoading(true);
        k8sCreate({
            data: __assign(__assign({}, template), { metadata: __assign(__assign({}, template === null || template === void 0 ? void 0 : template.metadata), { namespace: namespace }), parameters: parametersToGenerate }),
            model: ProcessedTemplatesModel,
            ns: namespace,
            queryParams: {
                dryRun: 'All',
            },
        })
            .then(function (processedTemplate) {
            var mergedParameters = __spreadArray(__spreadArray([], processedTemplate.parameters, true), excludedParameters, true);
            setTemplateWithGeneratedValues(__assign(__assign({}, template), { parameters: mergedParameters }));
            setError(null);
            setLoading(false);
        })
            .catch(function (apiError) {
            setTemplateWithGeneratedValues(template);
            setError(apiError);
            setLoading(false);
        });
    }, [namespace, template]);
    return [templateWithGeneratedValues, loading, error];
});
//# sourceMappingURL=useVMTemplateGeneratedParams.js.map