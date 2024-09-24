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
import ConfirmActionMessage from '@kubevirt-utils/components/ConfirmActionMessage/ConfirmActionMessage';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var DetachModal = function (props) {
    var t = useKubevirtTranslation().t;
    return (React.createElement(TabModal, __assign({ headerText: t('Detach disk?') }, props),
        React.createElement(ConfirmActionMessage, { action: "detach", obj: { metadata: { name: props.diskName } } })));
};
export default DetachModal;
//# sourceMappingURL=DetachModal.js.map