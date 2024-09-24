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
import * as React from 'react';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
var Annotations = function (_a) {
    var _b;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(VirtualMachineDescriptionItem
    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
    , { 
        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
        bodyContent: t('Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. '), descriptionData: t('{{annotations}} Annotations', {
            annotations: Object.keys(((_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.annotations) || {}).length,
        }), onEditClick: function () {
            return createModal(function (props) { return (React.createElement(AnnotationsModal, __assign({ obj: vmi }, props, { onSubmit: function (annotations) {
                    return k8sPatch({
                        data: [
                            {
                                op: 'replace',
                                path: '/metadata/annotaions',
                                value: annotations,
                            },
                        ],
                        model: VirtualMachineInstanceModel,
                        resource: vmi,
                    });
                } }))); });
        }, breadcrumb: "VirtualMachineInstance.metadata.annotations", descriptionHeader: t('Annotations'), isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/annotations" }));
};
export default Annotations;
//# sourceMappingURL=Annotations.js.map