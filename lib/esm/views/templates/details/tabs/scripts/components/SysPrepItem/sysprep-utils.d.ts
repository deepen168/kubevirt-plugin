import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
export declare const getTemplateSysprepObject: (template: V1Template, sysprepName: string) => IoK8sApiCoreV1ConfigMap | undefined;
export declare const deleteTemplateSysprepObject: (template: V1Template, sysprepName: string) => V1Template;
export declare const replaceTemplateSysprepObject: (template: V1Template, sysprepConfig: IoK8sApiCoreV1ConfigMap, oldSysprepName?: string) => V1Template;
export declare const updateTemplateWithSysprep: (template: V1Template, newSysprepName?: string, oldSysprepName?: string) => Promise<void>;
export declare const updateSysprepObject: (sysprepConfig: IoK8sApiCoreV1ConfigMap, unattend: string, autoUnattend: string) => IoK8sApiCoreV1ConfigMap | undefined;
