import produce from 'immer';
import VirtualMachineCloneModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineCloneModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import VirtualMachineSnapshotModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotModel';
import { MAX_K8S_NAME_LENGTH } from '@kubevirt-utils/utils/constants';
import { getRandomChars } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sGet, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
var cloneVMToVM = {
    apiVersion: "".concat(VirtualMachineCloneModel.apiGroup, "/").concat(VirtualMachineCloneModel.apiVersion),
    kind: VirtualMachineCloneModel.kind,
    metadata: {
        name: 'placeholder',
    },
    spec: {
        source: {
            apiGroup: VirtualMachineModel.apiGroup,
            kind: VirtualMachineModel.kind,
            name: 'placeholder-1',
        },
        target: {
            apiGroup: VirtualMachineModel.apiGroup,
            kind: VirtualMachineModel.kind,
            name: 'placeholder-2',
        },
    },
};
export var isVM = function (source) { return source.kind === VirtualMachineModel.kind; };
export var cloneVM = function (source, newVMName, namespace) {
    var cloningRequest = produce(cloneVMToVM, function (draftCloneData) {
        draftCloneData.spec.source = {
            apiGroup: isVM(source) ? VirtualMachineModel.apiGroup : VirtualMachineSnapshotModel.apiGroup,
            kind: source.kind,
            name: source.metadata.name,
        };
        draftCloneData.spec.target.name = newVMName;
        draftCloneData.metadata.namespace = namespace;
        draftCloneData.metadata.name = "".concat(newVMName, "-").concat(getRandomChars(6), "-cr").substring(0, MAX_K8S_NAME_LENGTH);
    });
    return k8sCreate({
        data: cloningRequest,
        model: VirtualMachineCloneModel,
    });
};
export var runVM = function (vmName, vmNamespace) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: '/spec/running',
                value: true,
            },
        ],
        model: VirtualMachineModel,
        resource: {
            apiVersion: VirtualMachineModel.apiVersion,
            kind: VirtualMachineModel.kind,
            metadata: { name: vmName, namespace: vmNamespace },
        },
    });
};
export var vmExist = function (vmName, vmNamespace) {
    return k8sGet({
        model: VirtualMachineModel,
        name: vmName,
        ns: vmNamespace,
    }).catch(function (error) {
        if (error.code !== 404) {
            throw error;
        }
        return null;
    });
};
//# sourceMappingURL=helpers.js.map