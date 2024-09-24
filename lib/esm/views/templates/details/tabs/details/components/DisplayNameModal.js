import React, { memo, useState } from 'react';
import { ANNOTATIONS } from 'src/views/templates/utils/constants';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { TextArea } from '@patternfly/react-core';
var DisplayNameModal = memo(function (_a) {
    var _b, _c;
    var isOpen = _a.isOpen, obj = _a.obj, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var t = useKubevirtTranslation().t;
    var _d = useState((_c = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c[ANNOTATIONS.displayName]), displayName = _d[0], setDisplayName = _d[1];
    return (React.createElement(TabModal, { headerText: t('Edit Display name'), isOpen: isOpen, obj: obj, onClose: onClose, onSubmit: function () { return onSubmit(displayName); } },
        React.createElement(TextArea, { "aria-label": t('display name text area'), autoFocus: true, onChange: function (_, value) { return setDisplayName(value); }, resizeOrientation: "vertical", value: displayName })));
});
export default DisplayNameModal;
//# sourceMappingURL=DisplayNameModal.js.map