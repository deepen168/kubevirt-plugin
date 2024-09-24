import { TemplateParameter, V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const poorManProcess: (template: V1Template) => V1Template;
export declare const isCommonTemplate: (template: V1Template) => boolean;
export declare const isDeprecatedTemplate: (template: V1Template) => boolean;
export declare const replaceTemplateVM: (template: V1Template, vm: V1VirtualMachine) => V1Template;
/**
 * A function for generating a unique vm name
 * @param {V1Template} template - template
 * @returns a unique vm name
 */
export declare const generateVMName: (template: V1Template) => string;
export declare const generateVMNamePrettyParam: (template: V1Template) => TemplateParameter;
export declare const generateParamsWithPrettyName: (template: V1Template) => any[];
