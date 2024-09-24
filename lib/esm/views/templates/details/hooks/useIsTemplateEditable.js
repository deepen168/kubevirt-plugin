import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { useAccessReview } from '@openshift-console/dynamic-plugin-sdk';
import { isCommonVMTemplate } from '../../utils/utils';
/**
 * This hook checks the user capabilities of editing templates in a namespace.
 * Checks user permissions and template characteristics.
 * The hook does not check if the user has permissions for that particular template
 * as this behavior would compromise performarce in pages were a lot of templates are involved like template list.
 * @param template template to check
 * @returns boolean value
 */
var useEditTemplateAccessReview = function (template) {
    var _a, _b;
    var isCommonTemplate = isCommonVMTemplate(template);
    var _c = useAccessReview({
        namespace: (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
        resource: TemplateModel.plural,
        verb: 'update',
    }), canUpdateTemplate = _c[0], canUpdateLoading = _c[1];
    var _d = useAccessReview({
        namespace: (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.namespace,
        resource: TemplateModel.plural,
        verb: 'patch',
    }), canPatchTemplate = _d[0], canPatchLoading = _d[1];
    var hasEditPermission = canUpdateTemplate && canPatchTemplate;
    if (!template || canUpdateLoading || canPatchLoading)
        return {
            hasEditPermission: false,
            isCommonTemplate: isCommonTemplate,
            isLoading: true,
            isTemplateEditable: false,
        };
    return {
        hasEditPermission: hasEditPermission,
        isCommonTemplate: isCommonTemplate,
        isLoading: canUpdateLoading || canPatchLoading,
        isTemplateEditable: !isCommonTemplate && hasEditPermission,
    };
};
export default useEditTemplateAccessReview;
//# sourceMappingURL=useIsTemplateEditable.js.map