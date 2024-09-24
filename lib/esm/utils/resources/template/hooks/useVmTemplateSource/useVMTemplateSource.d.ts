import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { TemplateBootSource } from './utils';
/**
 * A Hook that returns the boot source status of a given template
 * @param {V1Template} template - template to check
 * @returns the boot source and its status
 */
export declare const useVMTemplateSource: (template: V1Template) => UseVMTemplateSourceValue;
declare type UseVMTemplateSourceValue = {
    error: any;
    isBootSourceAvailable: boolean;
    loaded: boolean;
    templateBootSource: TemplateBootSource;
};
export {};
