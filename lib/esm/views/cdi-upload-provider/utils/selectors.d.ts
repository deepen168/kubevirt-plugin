import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1beta1PersistentVolumeClaim, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { V1Template } from '@kubevirt-utils/models';
import { K8sModel, K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare const getLabels: (entity: K8sResourceCommon, defaultValue?: {
    [key: string]: string;
} | undefined) => {
    [key: string]: string;
} | undefined;
export declare const getAnnotations: (vm: K8sResourceCommon, defaultValue?: {
    [key: string]: string;
} | undefined) => {
    [key: string]: string;
};
export declare const getDataVolumeStorageSize: (dataVolume: V1beta1DataVolume) => string;
export declare const getPVCNamespace: (obj: V1Template) => string;
export declare const getPVCName: (obj: V1Template) => string;
export declare const getPvcResources: (pvc: V1beta1PersistentVolumeClaim) => import("@kubevirt-ui/kubevirt-api/kubevirt").K8sIoApiCoreV1VolumeResourceRequirements | undefined;
export declare const getPvcStorageSize: (pvc: V1beta1PersistentVolumeClaim) => string;
export declare const getPvcAccessModes: (pvc: V1beta1PersistentVolumeClaim) => string[] | undefined;
export declare const getPvcVolumeMode: (pvc: V1beta1PersistentVolumeClaim) => import("@kubevirt-ui/kubevirt-api/kubevirt").K8sIoApiCoreV1PersistentVolumeClaimSpecVolumeModeEnum | undefined;
export declare const getPvcStorageClassName: (pvc: V1beta1PersistentVolumeClaim) => string;
export declare const getPvcImportPodName: (pvc: V1beta1PersistentVolumeClaim) => string;
export declare const getPvcUploadPodName: (pvc: V1beta1PersistentVolumeClaim) => string;
export declare const getPvcPhase: (pvc: V1beta1PersistentVolumeClaim) => string;
export declare const getPvcCloneToken: (pvc: V1beta1PersistentVolumeClaim) => string;
export declare const isPvcUploading: (pvc: V1beta1PersistentVolumeClaim) => boolean | "";
export declare const isPvcCloning: (pvc: V1beta1PersistentVolumeClaim) => boolean;
export declare const isPvcBoundToCDI: (pvc: V1beta1PersistentVolumeClaim) => boolean | undefined;
export declare const getName: <A extends K8sResourceCommon = K8sResourceCommon>(value: A) => string | undefined;
export declare const getNamespace: <A extends K8sResourceCommon = K8sResourceCommon>(value: A) => string | undefined;
export declare const getKubevirtModelAvailableAPIVersion: (model: K8sModel) => string;
export declare const getVM: (vmTemplate: V1Template) => V1VirtualMachine;
export declare const getTemplatesLabelValues: (templates: V1Template[], label: string) => string[];
export declare const getGiBUploadPVCSizeByImage: (sizeInBytes: number) => number;
export declare const getTemplateOperatingSystems: (templates: V1Template[]) => import("./types").OperatingSystemRecord[];
