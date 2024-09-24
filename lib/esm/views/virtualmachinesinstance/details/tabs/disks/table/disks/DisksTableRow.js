import * as React from 'react';
import { modelToGroupVersionKind, PersistentVolumeClaimModel, } from '@kubevirt-ui/kubevirt-api/console';
import { TableData } from '@openshift-console/dynamic-plugin-sdk';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { convertBytes, } from '../../utils/virtualMachinesInstancePageDisksTabUtils';
var DisksTableRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj;
    var convertedSize = convertBytes(Number(obj === null || obj === void 0 ? void 0 : obj.size));
    var size = (obj === null || obj === void 0 ? void 0 : obj.size) && (convertedSize === null || convertedSize === void 0 ? void 0 : convertedSize.unit) && "".concat(convertedSize.value, " ").concat(convertedSize.unit);
    var defaultSize = (obj === null || obj === void 0 ? void 0 : obj.size) || '-';
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" }, obj === null || obj === void 0 ? void 0 : obj.name),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "source" }, (obj === null || obj === void 0 ? void 0 : obj.namespace) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel), name: obj === null || obj === void 0 ? void 0 : obj.name, namespace: obj === null || obj === void 0 ? void 0 : obj.namespace })) : (obj === null || obj === void 0 ? void 0 : obj.source)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "size" }, size || defaultSize),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "drive" }, obj === null || obj === void 0 ? void 0 : obj.drive),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "interface" }, obj === null || obj === void 0 ? void 0 : obj.interface),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "storageClass" }, obj === null || obj === void 0 ? void 0 : obj.storageClass)));
};
export default DisksTableRow;
//# sourceMappingURL=DisksTableRow.js.map