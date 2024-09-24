import { OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare const getTemplateOSIcon: (template: K8sResourceCommon) => string;
export declare const getVolumeNameOSIcon: (volumeName: string) => string;
export declare const getIconByOSName: (osName: OS_NAME_TYPES | string) => string;
