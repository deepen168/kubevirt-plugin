import * as React from 'react';
import classnames from 'classnames';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import MetadataLabels from '@kubevirt-utils/components/MetadataLabels/MetadataLabels';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { DescriptionList, PageSection, PageSectionVariants, pluralize, } from '@patternfly/react-core';
import { WizardDescriptionItem } from '../../components/WizardDescriptionItem';
import './wizard-metadata-tab.scss';
var WizardMetadataTab = function (_a) {
    var loaded = _a.loaded, updateVM = _a.updateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(PageSection, { className: "wizard-metadata-tab", variant: PageSectionVariants.light },
        React.createElement(SidebarEditor, { onResourceUpdate: function (newVM) { return updateVM(newVM); }, pathsToHighlight: PATHS_TO_HIGHLIGHT.DETAILS_TAB, resource: vm }, function (resource) {
            var _a, _b, _c;
            return (React.createElement(React.Fragment, null,
                React.createElement(DescriptionList, { className: classnames('pf-c-description-list', 'wizard-metadata-tab__description-list') },
                    React.createElement(WizardDescriptionItem, { description: React.createElement(MetadataLabels, { labels: (_a = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _a === void 0 ? void 0 : _a.labels, model: VirtualMachineModel }), helperPopover: {
                            content: t('Map of string keys and values that can be used to organize and categorize (scope and select) objects'),
                            header: t('Labels'),
                        }, onEditClick: function () {
                            return createModal(function (_a) {
                                var isOpen = _a.isOpen, onClose = _a.onClose;
                                return (React.createElement(LabelsModal, { onLabelsSubmit: function (updatedLabels) {
                                        return updateVM(function (vmDraft) {
                                            vmDraft.metadata.labels = updatedLabels;
                                        });
                                    }, isOpen: isOpen, obj: vm, onClose: onClose }));
                            });
                        }, isDisabled: !loaded, isEdit: true, showEditOnTitle: true, testId: "wizard-metadata-labels", title: t('Labels') }),
                    React.createElement(WizardDescriptionItem, { description: pluralize((_c = Object.values(((_b = resource === null || resource === void 0 ? void 0 : resource.metadata) === null || _b === void 0 ? void 0 : _b.annotations) || {})) === null || _c === void 0 ? void 0 : _c.length, 'annotation'), helperPopover: {
                            content: t('Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects'),
                            header: t('Annotations'),
                        }, onEditClick: function () {
                            return createModal(function (_a) {
                                var isOpen = _a.isOpen, onClose = _a.onClose;
                                return (React.createElement(AnnotationsModal, { onSubmit: function (updatedAnnotations) {
                                        return updateVM(function (vmDraft) {
                                            vmDraft.metadata.annotations = updatedAnnotations;
                                        });
                                    }, isOpen: isOpen, obj: vm, onClose: onClose }));
                            });
                        }, isDisabled: !loaded, isEdit: true, testId: "wizard-metadata-annotations", title: t('Annotations') }))));
        })));
};
export default WizardMetadataTab;
//# sourceMappingURL=WizardMetadataTab.js.map