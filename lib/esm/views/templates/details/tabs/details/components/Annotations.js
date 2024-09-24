import * as React from 'react';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
var Annotations = function (_a) {
    var _b;
    var editable = _a.editable, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var annotationsCount = Object.keys(((_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.annotations) || {}).length;
    var annotationsText = t('{{annotationsCount}} Annotations', {
        annotationsCount: annotationsCount,
    });
    var onAnnotationsSubmit = function (updatedAnnotations) {
        return k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: '/metadata/annotations',
                    value: updatedAnnotations,
                },
            ],
            model: TemplateModel,
            resource: template,
        });
    };
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(AnnotationsModal, { isOpen: isOpen, obj: template, onClose: onClose, onSubmit: onAnnotationsSubmit }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem
    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
    , { 
        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
        bodyContent: t('Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. '), breadcrumb: "Template.metadata.annotations", descriptionData: annotationsText, descriptionHeader: t('Annotations'), isEdit: editable, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/annotations", onEditClick: onEditClick }));
};
export default Annotations;
//# sourceMappingURL=Annotations.js.map