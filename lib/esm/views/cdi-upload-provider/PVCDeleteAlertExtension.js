var _a;
import React from 'react';
import { Trans } from 'react-i18next';
import { modelToGroupVersionKind, TemplateModel, } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { TEMPLATE_TYPE_BASE, TEMPLATE_TYPE_LABEL, TEMPLATE_VM_COMMON_NAMESPACE, } from '@kubevirt-utils/resources/template';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant } from '@patternfly/react-core';
import useBaseImages from './hooks/useBaseImages';
var templatesResource = {
    groupVersionKind: modelToGroupVersionKind(TemplateModel),
    isList: true,
    namespace: TEMPLATE_VM_COMMON_NAMESPACE,
    optional: true,
    selector: {
        matchLabels: (_a = {}, _a[TEMPLATE_TYPE_LABEL] = TEMPLATE_TYPE_BASE, _a),
    },
};
var PVCDeleteAlertExtension = function (_a) {
    var _b;
    var pvc = _a.pvc;
    var _c = useK8sWatchResource(templatesResource), commonTemplates = _c[0], loadedTemplates = _c[1], errorTemplates = _c[2];
    var t = useKubevirtTranslation().t;
    var _d = useBaseImages(commonTemplates), goldenPvcs = _d[0], loadedPvcs = _d[1], errorPvcs = _d[2];
    var isGolden = goldenPvcs === null || goldenPvcs === void 0 ? void 0 : goldenPvcs.find(function (goldenPvc) { var _a, _b; return ((_a = goldenPvc === null || goldenPvc === void 0 ? void 0 : goldenPvc.metadata) === null || _a === void 0 ? void 0 : _a.name) === ((_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.name); });
    return (React.createElement(Alert, { isInline: true, title: "PVC Delete", variant: AlertVariant.warning },
        React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            React.createElement("p", null,
                "Deleting this PVC will also delete",
                ' ',
                React.createElement("strong", { className: "co-break-word" }, { pvcName: (_b = pvc === null || pvc === void 0 ? void 0 : pvc.metadata) === null || _b === void 0 ? void 0 : _b.name }),
                " Data Volume")),
        !loadedPvcs && !loadedTemplates && React.createElement("p", null, t('Checking for usages of this PVC...')),
        (errorPvcs || errorTemplates) && React.createElement("p", null, t('Error checking for usages of this PVC.')),
        isGolden && (React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
            React.createElement("p", null,
                React.createElement("strong", { className: "co-break-word" }, "WARNING:"),
                " this PVC is used as a base operating system image. New VMs will not be able to clone this image")))));
};
export default PVCDeleteAlertExtension;
//# sourceMappingURL=PVCDeleteAlertExtension.js.map