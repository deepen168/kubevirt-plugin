import React from 'react';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import MetadataLabels from '@kubevirt-utils/components/MetadataLabels/MetadataLabels';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
var Labels = function (_a) {
    var _b, _c;
    var editable = _a.editable, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var onLabelsSubmit = function (templateLabels) {
        return k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: '/metadata/labels',
                    value: templateLabels,
                },
            ],
            model: TemplateModel,
            resource: template,
        });
    };
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(LabelsModal, { isOpen: isOpen, obj: template, onClose: onClose, onLabelsSubmit: onLabelsSubmit }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem
    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
    , { 
        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
        bodyContent: t('Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. '), breadcrumb: "Template.metadata.labels", "data-test-id": "".concat((_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.name, "-labels"), descriptionData: React.createElement(MetadataLabels, { labels: (_c = template === null || template === void 0 ? void 0 : template.metadata) === null || _c === void 0 ? void 0 : _c.labels, model: TemplateModel }), descriptionHeader: t('Labels'), isEdit: editable, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/labels", onEditClick: onEditClick, showEditOnTitle: true }));
};
export default Labels;
//# sourceMappingURL=Labels.js.map