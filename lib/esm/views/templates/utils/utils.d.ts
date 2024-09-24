import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
export declare const isCommonVMTemplate: (template: V1Template) => boolean;
export declare const isDedicatedCPUPlacement: (template: V1Template) => boolean;
export declare const isDeschedulerOn: (template: V1Template) => boolean;
