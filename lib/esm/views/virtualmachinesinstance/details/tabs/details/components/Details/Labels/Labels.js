var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import MetadataLabels from '@kubevirt-utils/components/MetadataLabels/MetadataLabels';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import './labels.scss';
var Labels = function (_a) {
    var _b, _c;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services.'), descriptionData: React.createElement(MetadataLabels, { labels: (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.labels, model: VirtualMachineInstanceModel }), onEditClick: function () {
            return createModal(function (props) { return (React.createElement(LabelsModal, __assign({ obj: vmi }, props, { onLabelsSubmit: function (labels) {
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
                } }))); });
        }, breadcrumb: "VirtualMachineInstance.metadata.labels", "data-test-id": "".concat((_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.name, "-labels"), descriptionHeader: t('Labels'), isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/labels", showEditOnTitle: true }));
};
export default Labels;
//# sourceMappingURL=Labels.js.map