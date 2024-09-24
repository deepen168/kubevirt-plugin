import React, { memo, useEffect, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { TextArea } from '@patternfly/react-core';
import TabModal from '../TabModal/TabModal';
export var DescriptionModal = memo(function (_a) {
    var _b, _c, _d, _e;
    var isOpen = _a.isOpen, obj = _a.obj, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var t = useKubevirtTranslation().t;
    var _f = useState((_c = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c.description), description = _f[0], setDescription = _f[1];
    // reset description when modal is closed
    useEffect(function () {
        var _a, _b;
        setDescription((_b = (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.annotations) === null || _b === void 0 ? void 0 : _b.description);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    return (React.createElement(TabModal, { headerText: t('Description'), isOpen: isOpen, obj: obj, onClose: onClose, onSubmit: function () { return onSubmit(description); } },
        React.createElement(TextArea, { "aria-label": t('description text area'), autoFocus: true, defaultValue: (_e = (_d = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _d === void 0 ? void 0 : _d.annotations) === null || _e === void 0 ? void 0 : _e.description, onChange: function (_, value) { return setDescription(value); }, resizeOrientation: "vertical", value: description })));
});
DescriptionModal.displayName = 'DescriptionModal';
//# sourceMappingURL=DescriptionModal.js.map