import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
/**
 * This hook checks the user capabilities of editing templates in a namespace.
 * Checks user permissions and template characteristics.
 * The hook does not check if the user has permissions for that particular template
 * as this behavior would compromise performarce in pages were a lot of templates are involved like template list.
 * @param template template to check
 * @returns boolean value
 */
declare const useEditTemplateAccessReview: (template: V1Template) => {
    hasEditPermission: boolean;
    isCommonTemplate: boolean;
    isLoading: boolean;
    isTemplateEditable: boolean;
};
export default useEditTemplateAccessReview;
