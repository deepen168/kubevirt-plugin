import * as React from 'react';
import { getWorkloadProfile } from 'src/views/templates/utils/selectors';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import WorkloadProfileModal from '@kubevirt-utils/components/WorkloadProfileModal/WorkloadProfileModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateWorkload, TEMPLATE_WORKLOAD_LABEL, } from '@kubevirt-utils/resources/template';
import { getWorkload } from '@kubevirt-utils/resources/vm';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
var WorkloadProfile = function (_a) {
    var editable = _a.editable, template = _a.template;
    var createModal = useModal().createModal;
    var t = useKubevirtTranslation().t;
    var workload = getWorkloadProfile(template);
    var updateWorkload = function (updatedWorkload) {
        var _a;
        var vmObjectIndex = template === null || template === void 0 ? void 0 : template.objects.findIndex(function (obj) { return obj.kind === VirtualMachineModel.kind; });
        var hasWorkload = getWorkload((_a = template === null || template === void 0 ? void 0 : template.objects) === null || _a === void 0 ? void 0 : _a[vmObjectIndex]);
        var workloadPath = "/objects/".concat(vmObjectIndex, "/spec/template/metadata/annotations/vm.kubevirt.io~1workload");
        return k8sPatch({
            data: [
                {
                    op: hasWorkload ? 'replace' : 'add',
                    path: workloadPath,
                    value: updatedWorkload,
                },
                {
                    op: 'remove',
                    path: "/metadata/labels/".concat(TEMPLATE_WORKLOAD_LABEL, "~1").concat(getTemplateWorkload(template)),
                },
                {
                    op: 'add',
                    path: "/metadata/labels/".concat(TEMPLATE_WORKLOAD_LABEL, "~1").concat(updatedWorkload),
                    value: 'true',
                },
            ],
            model: TemplateModel,
            resource: template,
        });
    };
    var onEditClick = function () {
        return createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(WorkloadProfileModal, { initialWorkload: getTemplateWorkload(template), isOpen: isOpen, onClose: onClose, onSubmit: updateWorkload }));
        });
    };
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: workload, descriptionHeader: t('Workload profile'), isEdit: editable, onEditClick: onEditClick }));
};
export default WorkloadProfile;
//# sourceMappingURL=WorkloadProfile.js.map