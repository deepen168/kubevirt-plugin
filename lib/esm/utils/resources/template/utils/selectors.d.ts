import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1Disk, V1Network, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { OS_NAME_TYPES } from './constants';
/**
 * A selector that returns the VirtualMachine object of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateVirtualMachineObject: (template: V1Template) => V1VirtualMachine;
/**
 * returns true if the given template is a default variant
 * @param {V1Template} template - template
 */
export declare const isDefaultVariantTemplate: (template: V1Template) => boolean;
/**
 * A selector that returns the os label name of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateOSLabelName: (template: V1Template) => string;
/**
 * A selector that returns the os label of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateOS: (template: V1Template) => OS_NAME_TYPES;
/**
 * A selector that returns the template provider name of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateProviderName: (template: V1Template) => string;
/**
 * A selector that returns the support level of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateSupportLevel: (template: V1Template) => string;
/**
 * A selector that returns the containerDisks of a given template
 * @param {V1Template} template - template
 * @returns {string[]} array of containerDisks
 */
export declare const getTemplateContainerDisks: (template: V1Template) => string[] | undefined;
/**
 * A selector that returns the import URLs of a given template
 * @param {V1Template} template - template
 * @returns {string[]} array of import URLS
 */
export declare const getTemplateImportURLs: (template: V1Template) => string[] | undefined;
/**
 * A selector that returns the flavor of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateFlavor: (template: V1Template) => string;
/**
 * A selector that returns the workload of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateWorkload: (template: V1Template) => string;
/**
 * A selector that returns the networks of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateNetworks: (template: V1Template) => V1Network[];
/**
 * A selector that returns the interfaces of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateInterfaces: (template: V1Template) => V1Network[];
/**
 * A selector that returns the disks of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateDisks: (template: V1Template) => V1Disk[];
/**
 * A selector that returns the value of a given template's parameter
 * @param {V1Template} template - template
 * @param {string} parameter - parameter name
 */
export declare const getTemplateParameterValue: (template: V1Template, parameter: string) => string;
/**
 * A selector that returns the documentation URL of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateDocumentationURL: (template: V1Template) => string;
/**
 * A selector that returns the name of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateName: (template: V1Template) => string;
/**
 * A selector that returns the PVC name of a given template's base image
 * @param {V1Template} template - template
 */
export declare const getTemplatePVCName: (template: V1Template) => string;
/**
 * A selector that returns the description of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateDescription: (template: V1Template) => string;
/**
 * A selector that returns the CPU of a given template
 * @param {V1Template} template - template
 */
export declare const getTemplateVirtualMachineCPU: (template: V1Template) => any;
