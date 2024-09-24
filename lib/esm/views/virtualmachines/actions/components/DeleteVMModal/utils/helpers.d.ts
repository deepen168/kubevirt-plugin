import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon, OwnerReference } from '@openshift-console/dynamic-plugin-sdk';
export declare const updateVolumeResources: (resources: (IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume)[], vmOwnerRef: OwnerReference) => Promise<V1beta1DataVolume | IoK8sApiCoreV1PersistentVolumeClaim>[];
export declare const findPVCOwner: (pvc: IoK8sApiCoreV1PersistentVolumeClaim, resources: K8sResourceCommon[]) => K8sResourceCommon | undefined;
export declare const removeDataVolumeTemplatesToVM: (vm: V1VirtualMachine, dataVolumesToSave: V1beta1DataVolume[]) => Promise<V1VirtualMachine> | undefined;
export declare const sameVolume: (volumeA: IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume, volumeB: IoK8sApiCoreV1PersistentVolumeClaim | V1beta1DataVolume) => boolean;
