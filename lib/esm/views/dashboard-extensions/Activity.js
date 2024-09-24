import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { getGroupVersionKindForModel, ResourceIcon, ResourceLink, } from '@openshift-console/dynamic-plugin-sdk';
import { ActivityItem } from '@openshift-console/dynamic-plugin-sdk-internal';
import ActivityProgress from './ActivityProgress';
import { diskImportKindMapping, VIRTUALMACHINES_TEMPLATES_BASE_URL } from './utils';
export var DiskImportActivity = function (_a) {
    var _b, _c;
    var resource = _a.resource;
    var progress = parseInt((_b = resource === null || resource === void 0 ? void 0 : resource.status) === null || _b === void 0 ? void 0 : _b.progress, 10);
    var _d = resource.metadata.ownerReferences[0], kind = _d.kind, name = _d.name, uid = _d.uid;
    var model = diskImportKindMapping[kind];
    var ownerLink = model === TemplateModel ? (React.createElement(React.Fragment, null,
        React.createElement(ResourceIcon, { groupVersionKind: getGroupVersionKindForModel(TemplateModel) }),
        React.createElement(Link, { className: "co-resource-item__resource-name", "data-test-id": name, title: uid, to: "/k8s/ns/".concat((_c = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _c === void 0 ? void 0 : _c.namespace, "/").concat(VIRTUALMACHINES_TEMPLATES_BASE_URL, "/").concat(name) }, name))) : (React.createElement(ResourceLink, { groupVersionKind: getGroupVersionKindForModel(model), name: name, namespace: resource.metadata.namespace }));
    var title = "Importing ".concat(model === TemplateModel ? "".concat(VirtualMachineModel.label, " ").concat(model.label) : model.label, " disk");
    return Number.isNaN(progress) ? (React.createElement(React.Fragment, null,
        React.createElement(ActivityItem, null, title),
        ownerLink)) : (React.createElement(ActivityProgress, { progress: progress, title: title }, ownerLink));
};
//# sourceMappingURL=Activity.js.map