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
import { useEffect, useState } from 'react';
import { ProcessedTemplatesModel } from '@kubevirt-ui/kubevirt-api/console';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { generateParamsWithPrettyName } from './../utils/helpers';
/**
 * A Hook that processes a given template and returns the processed template.
 * @param {V1Template} template V1Template to process
 * @param {string} namespace Namespace to process the template in
 * @returns the processed template.
 */
export var useProcessedTemplate = function (template, namespace) {
    if (namespace === void 0) { namespace = DEFAULT_NAMESPACE; }
    var _a = useState(undefined), processedTemplate = _a[0], setProcessedTemplate = _a[1];
    var _b = useState(false), loaded = _b[0], setLoaded = _b[1];
    var _c = useState(), error = _c[0], setError = _c[1];
    useEffect(function () {
        setLoaded(false);
        if (template) {
            var parameters = generateParamsWithPrettyName(template);
            k8sCreate({
                data: __assign(__assign({}, template), { metadata: __assign(__assign({}, template === null || template === void 0 ? void 0 : template.metadata), { namespace: namespace }), parameters: parameters }),
                model: ProcessedTemplatesModel,
                ns: namespace,
                queryParams: {
                    dryRun: 'All',
                },
            })
                .then(function (temp) {
                setProcessedTemplate(temp);
                setLoaded(true);
            })
                .catch(function (err) {
                setProcessedTemplate(undefined);
                setLoaded(true);
                setError(err);
            });
        }
    }, [template, namespace]);
    return [processedTemplate, loaded, error];
};
//# sourceMappingURL=useProcessedTemplate.js.map