import { V1VirtualMachine, V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk-internal/lib/extensions/console-types';
declare type UseVolumeOwnedResource = (vm: V1VirtualMachine, volume: V1Volume) => {
    error: Error;
    loaded: boolean;
    volumeResource: K8sResourceCommon;
    volumeResourceModel: K8sModel;
    volumeResourceName: string;
};
declare const useVolumeOwnedResource: UseVolumeOwnedResource;
export default useVolumeOwnedResource;
