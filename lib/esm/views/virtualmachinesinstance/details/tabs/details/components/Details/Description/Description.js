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
import { DescriptionModal } from '@kubevirt-utils/components/DescriptionModal/DescriptionModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import './description.scss';
var Description = function (_a) {
    var _b, _c, _d;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: (_d = (_c = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c.description) !== null && _d !== void 0 ? _d : React.createElement(MutedTextSpan, { text: t('Not available') }), onEditClick: function () {
            return createModal(function (props) { return (React.createElement(DescriptionModal, __assign({ obj: vmi }, props, { onSubmit: function (description) {
                    return k8sPatch({
                        data: [
                            {
                                op: 'replace',
                                path: '/metadata/annotations/description',
                                value: description,
                            },
                        ],
                        model: VirtualMachineInstanceModel,
                        resource: vmi,
                    });
                } }))); });
        }, descriptionHeader: t('Description'), isEdit: true }));
};
export default Description;
//# sourceMappingURL=Description.js.map