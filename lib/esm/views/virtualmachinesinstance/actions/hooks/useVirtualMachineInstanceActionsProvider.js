import * as React from 'react';
import { VirtualMachineInstanceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { k8sDelete, k8sPatch, useK8sModel } from '@openshift-console/dynamic-plugin-sdk';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
var useVirtualMachineInstanceActionsProvider = function (vmi) {
    var t = useKubevirtTranslation().t;
    var _a = useK8sModel(VirtualMachineInstanceModelRef), inFlight = _a[1];
    var createModal = useModal().createModal;
    var actions = React.useMemo(function () { return [
        {
            cta: function () {
                var _a, _b;
                return window.open("/k8s/ns/".concat((_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.namespace, "/kubevirt.io~v1~VirtualMachineInstance/").concat((_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.name, "/console/standalone"));
            },
            disabled: inFlight,
            icon: React.createElement(ExternalLinkAltIcon, null),
            id: 'open-console',
            label: t('Open Console'),
        },
        {
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(LabelsModal, { onLabelsSubmit: function (labels) {
                            return k8sPatch({
                                data: [
                                    {
                                        op: 'replace',
                                        path: '/metadata/labels',
                                        value: labels,
                                    },
                                ],
                                model: VirtualMachineInstanceModel,
                                resource: vmi,
                            });
                        }, isOpen: isOpen, obj: vmi, onClose: onClose }));
                });
            },
            id: 'edit-labels',
            label: t('Edit Labels'),
        },
        {
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(AnnotationsModal, { onSubmit: function (annotations) {
                            return k8sPatch({
                                data: [
                                    {
                                        op: 'replace',
                                        path: '/metadata/annotations',
                                        value: annotations,
                                    },
                                ],
                                model: VirtualMachineInstanceModel,
                                resource: vmi,
                            });
                        }, isOpen: isOpen, obj: vmi, onClose: onClose }));
                });
            },
            id: 'edit-annotations',
            label: t('Edit Annotations'),
        },
        {
            accessReview: asAccessReview(VirtualMachineInstanceModel, vmi, 'delete'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DeleteModal, { onDeleteSubmit: function () {
                            return k8sDelete({
                                json: undefined,
                                model: VirtualMachineInstanceModel,
                                requestInit: undefined,
                                resource: vmi,
                            });
                        }, headerText: t('Delete VirtualMachineInstance?'), isOpen: isOpen, obj: vmi, onClose: onClose }));
                });
            },
            id: 'delete-virtual-machine-instance',
            label: t('Delete VirtualMachineInstance'),
        },
    ]; }, [vmi, inFlight, createModal, t]);
    return React.useMemo(function () { return [actions, !inFlight, undefined]; }, [actions, inFlight]);
};
export default useVirtualMachineInstanceActionsProvider;
//# sourceMappingURL=useVirtualMachineInstanceActionsProvider.js.map