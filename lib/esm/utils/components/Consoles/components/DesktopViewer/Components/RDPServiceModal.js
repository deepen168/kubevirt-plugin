import React, { useState } from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant, Checkbox, ModalVariant, Stack, StackItem, } from '@patternfly/react-core';
import { NODE_PORTS_LINK } from '../utils/constants';
import { createRDPService } from '../utils/utils';
var RDPServiceModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), isChecked = _b[0], setChecked = _b[1];
    return (React.createElement(TabModal, { headerText: t('RDP Service'), isDisabled: !isChecked, isOpen: isOpen, modalVariant: ModalVariant.medium, onClose: onClose, onSubmit: function () { return createRDPService(vm, vmi); } },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement(Checkbox, { className: "kv-rdp-service-checkbox--main", "data-checked-state": isChecked, id: "rdp-service-checkbox", isChecked: isChecked, label: t('Expose RDP Service'), onChange: function (_event, val) { return setChecked(val); } })),
            React.createElement(StackItem, null,
                React.createElement(Alert, { isInline: true, title: t('Node port'), variant: AlertVariant.info },
                    React.createElement("div", null,
                        t('RDP Service is using a node port. Node port requires additional port resources.'),
                        React.createElement("div", null,
                            React.createElement(ExternalLink, { href: NODE_PORTS_LINK, text: t('Learn more') }))))))));
};
export default RDPServiceModal;
//# sourceMappingURL=RDPServiceModal.js.map