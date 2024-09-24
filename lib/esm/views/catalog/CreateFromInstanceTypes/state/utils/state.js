import { initialSSHCredentials, initialSysprepData, } from '@kubevirt-utils/components/SSHSecretModal/utils/constants';
import { ALL_PROJECTS } from '@kubevirt-utils/hooks/constants';
export var instanceTypeVMInitialState = {
    customDiskSize: '',
    isDynamicSSHInjection: false,
    pvcSource: null,
    selectedBootableVolume: null,
    selectedInstanceType: { name: '', namespace: null },
    selectedStorageClass: null,
    sshSecretCredentials: initialSSHCredentials,
    sysprepConfigMapData: initialSysprepData,
    vmName: '',
    volumeSnapshotSource: null,
};
export var instanceTypeVMStoreInitialState = {
    instanceTypeVMState: instanceTypeVMInitialState,
    isChangingNamespace: true,
    startVM: true,
    vm: null,
    vmNamespaceTarget: '',
    volumeListNamespace: ALL_PROJECTS,
};
//# sourceMappingURL=state.js.map