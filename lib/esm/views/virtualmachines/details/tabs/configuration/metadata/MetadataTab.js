import React from 'react';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { DescriptionList, Grid, PageSection, PageSectionVariants, Title, } from '@patternfly/react-core';
import { updateAnnotation, updateLabels } from '../details/utils/utils';
import MetadataTabAnnotations from './components/MetadataTabAnnotations/MetadataTabAnnotations';
import MetadataTabLabels from './components/MetadataTabLabels/MetadataTabLabels';
var MetadataTab = function (_a) {
    var _b, _c;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(Title, { headingLevel: "h2" },
            React.createElement(SearchItem, { id: "metadata" }, t('Metadata'))),
        React.createElement(Grid, { span: 6 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. '), onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(LabelsModal, { isOpen: isOpen, obj: vm, onClose: onClose, onLabelsSubmit: function (labels) { return updateLabels(vm, labels); } }));
                        });
                    }, breadcrumb: "VirtualMachine.metadata.labels", "data-test-id": "".concat(getName(vm), "-labels"), descriptionData: React.createElement(MetadataTabLabels, { labels: (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.labels }), descriptionHeader: React.createElement(SearchItem, { id: "labels" }, t('Labels')), editOnTitleJustify: true, isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/labels", showEditOnTitle: true }),
                React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. '), onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(AnnotationsModal, { isOpen: isOpen, obj: vm, onClose: onClose, onSubmit: function (annotations) { return updateAnnotation(vm, annotations); } }));
                        });
                    }, breadcrumb: "VirtualMachine.metadata.annotations", descriptionData: React.createElement(MetadataTabAnnotations, { annotations: (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.annotations }), descriptionHeader: React.createElement(SearchItem, { id: "metadata" }, t('Annotations')), isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/annotations" })))));
};
export default MetadataTab;
//# sourceMappingURL=MetadataTab.js.map