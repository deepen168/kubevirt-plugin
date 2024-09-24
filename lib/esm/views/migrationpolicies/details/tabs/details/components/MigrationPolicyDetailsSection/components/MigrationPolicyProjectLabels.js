import React from 'react';
import MigrationPolicyModel from '@kubevirt-ui/kubevirt-api/console/models/MigrationPolicyModel';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant, DescriptionListDescription, DescriptionListGroup, DescriptionListTermHelpText, LabelGroup, } from '@patternfly/react-core';
import { MigrationPolicySelectorList } from '../../../../../../components/MigrationPolicySelectorList/MigrationPolicySelectorList';
import { ensureMigrationPolicyMatchLabels } from '../utils/utils';
var MigrationPolicyVirtualMachineLabels = function (_a) {
    var _b, _c;
    var mp = _a.mp;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var mpNamespaceSelector = (_c = (_b = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _b === void 0 ? void 0 : _b.selectors) === null || _c === void 0 ? void 0 : _c.namespaceSelector;
    return (React.createElement(DescriptionListGroup, null,
        React.createElement(DescriptionListTermHelpText, { className: "migration-policy-description-item-header" },
            t('Project labels'),
            React.createElement(Button, { onClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(LabelsModal, { onLabelsSubmit: function (labels) {
                                return k8sUpdate({
                                    data: ensureMigrationPolicyMatchLabels(mp, labels, 'namespaceSelector'),
                                    model: MigrationPolicyModel,
                                });
                            }, initialLabels: mpNamespaceSelector, isOpen: isOpen, obj: mp, onClose: onClose }));
                    });
                }, className: "migration-policy-description-item-header--action-button", isInline: true, variant: ButtonVariant.link }, t('Edit'))),
        React.createElement(DescriptionListDescription, null, !isEmpty(mpNamespaceSelector) && (React.createElement(LabelGroup, { className: "migration-policy-selectors-group", isEditable: true },
            React.createElement(MigrationPolicySelectorList, { selector: mpNamespaceSelector }))))));
};
export default MigrationPolicyVirtualMachineLabels;
//# sourceMappingURL=MigrationPolicyProjectLabels.js.map