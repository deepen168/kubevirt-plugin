import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
/** A Hook that returns VM Templates from allowed namespaces
 * @param namespace - The namespace to filter the templates by
 */
export declare const useVmTemplates: (namespace?: string) => useVmTemplatesValues;
declare type useVmTemplatesValues = {
    loaded: boolean;
    loadError: any;
    templates: V1Template[];
};
export {};
