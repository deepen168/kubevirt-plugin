import { VirtualMachineInstanceMigrationModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { MIGRATION_VMI_NAME_LABEL } from '@kubevirt-utils/resources/vmim/constants';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var useVirtualMachineInstanceMigration = function (resource) {
    var _a;
    var _b, _c;
    var vmims = useK8sWatchResource(resource && {
        groupVersionKind: VirtualMachineInstanceMigrationModelGroupVersionKind,
        isList: true,
        namespace: (_b = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        selector: {
            matchLabels: (_a = {},
                _a[MIGRATION_VMI_NAME_LABEL] = (_c = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _c === void 0 ? void 0 : _c.name,
                _a),
        },
    })[0];
    // since migration objects are kepts until VMI is deleted
    // we will need to find the one which is related to VMI and is not copmleted.
    var latestVMIM = vmims === null || vmims === void 0 ? void 0 : vmims.reduce(function (acc, vmim) {
        var _a, _b;
        var creationTime = new Date((_a = vmim === null || vmim === void 0 ? void 0 : vmim.metadata) === null || _a === void 0 ? void 0 : _a.creationTimestamp).getTime();
        if (!acc || creationTime > new Date((_b = acc === null || acc === void 0 ? void 0 : acc.metadata) === null || _b === void 0 ? void 0 : _b.creationTimestamp).getTime()) {
            return vmim;
        }
        return acc;
    }, null);
    return latestVMIM;
};
export default useVirtualMachineInstanceMigration;
//# sourceMappingURL=useVirtualMachineInstanceMigration.js.map