import VirtualMachineClusterInstancetypeModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineClusterInstancetypeModel';
import VirtualMachineInstancetypeModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstancetypeModel';
export var getInstanceTypeModelFromMatcher = function (instanceTypeMatcher) {
    return instanceTypeMatcher.kind.includes('cluster')
        ? VirtualMachineClusterInstancetypeModel
        : VirtualMachineInstancetypeModel;
};
//# sourceMappingURL=helper.js.map