import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataVolumeSourcePVC } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getTemplateBootSourcePVC: (template: V1Template) => V1beta1DataVolumeSourcePVC;
export declare const cloneStorage: (template: V1Template, pvcName: string, namespace: string) => Promise<void>;
