import * as React from 'react';
import { modelToGroupVersionKind, ProjectModel, TemplateModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useK8sWatchResource, useK8sWatchResources, } from '@openshift-console/dynamic-plugin-sdk';
import { Operator } from '@openshift-console/dynamic-plugin-sdk-internal/lib/api/common-types';
import { TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_LABEL, TEMPLATE_TYPE_VM } from '../utils/constants';
var OPENSHIFT_NS = 'openshift';
/** A Hook that returns VM Templates from allowed namespaces
 * @param namespace - The namespace to filter the templates by
 */
export var useVmTemplates = function (namespace) {
    var _a = React.useState([]), allowedTemplates = _a[0], setAllowedTemplates = _a[1];
    var _b = React.useState(false), allowedTemplatesloaded = _b[0], setAllowedTemplatesLoaded = _b[1];
    var _c = React.useState(''), allowedTemplatesError = _c[0], setAllowedTemplatesError = _c[1];
    var isAdmin = useIsAdmin();
    var TemplateModelGroupVersionKind = modelToGroupVersionKind(TemplateModel);
    var _d = useK8sWatchResource({
        groupVersionKind: modelToGroupVersionKind(ProjectModel),
        isList: true,
        namespaced: false,
    }), projects = _d[0], loaded = _d[1];
    // Bug fix: BZ: https://bugzilla.redhat.com/show_bug.cgi?id=2081295
    var projectNames = projects === null || projects === void 0 ? void 0 : projects.map(function (proj) { var _a; return (_a = proj === null || proj === void 0 ? void 0 : proj.metadata) === null || _a === void 0 ? void 0 : _a.name; });
    if (projectNames && !projectNames.includes(OPENSHIFT_NS)) {
        projectNames.push(OPENSHIFT_NS);
    }
    var _e = useK8sWatchResource({
        groupVersionKind: TemplateModelGroupVersionKind,
        isList: true,
        selector: {
            matchExpressions: [
                {
                    key: TEMPLATE_TYPE_LABEL,
                    operator: Operator.In,
                    values: [TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_VM],
                },
            ],
        },
    }), allTemplates = _e[0], allTemplatesLoaded = _e[1], allTemplatesError = _e[2];
    // user has limited access, so we can only get templates from allowed namespaces
    var allowedResources = useK8sWatchResources(Object.fromEntries(loaded && !isAdmin
        ? (projectNames || []).map(function (name) { return [
            name,
            {
                groupVersionKind: TemplateModelGroupVersionKind,
                isList: true,
                namespace: name,
                selector: {
                    matchExpressions: [
                        {
                            key: TEMPLATE_TYPE_LABEL,
                            operator: Operator.In,
                            values: [TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_VM],
                        },
                    ],
                },
            },
        ]; })
        : []));
    var templates = React.useMemo(function () { return (isAdmin ? allTemplates : allowedTemplates); }, [allTemplates, allowedTemplates, isAdmin]);
    React.useEffect(function () {
        if (!isAdmin) {
            var errorKey = Object.keys(allowedResources).find(function (key) { return allowedResources[key].loadError; });
            if (errorKey) {
                setAllowedTemplatesError(allowedResources[errorKey].loadError);
            }
            if (Object.keys(allowedResources).length > 0 &&
                Object.keys(allowedResources).every(function (key) {
                    return allowedResources[key].loaded || allowedResources[key].loadError;
                })) {
                setAllowedTemplates(Object.values(allowedResources).flatMap(function (r) { return r.data; }));
                setAllowedTemplatesLoaded(true);
            }
        }
    }, [allowedResources, isAdmin]);
    var memoizedTemplates = React.useMemo(function () { return (namespace ? templates.filter(function (t) { return t.metadata.namespace === namespace; }) : templates); }, [namespace, templates]);
    return {
        loaded: isAdmin ? allTemplatesLoaded : allowedTemplatesloaded,
        loadError: isAdmin ? allTemplatesError : allowedTemplatesError,
        templates: memoizedTemplates,
    };
};
//# sourceMappingURL=useVmTemplates.js.map