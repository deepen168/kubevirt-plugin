import * as React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var ConfirmActionMessage = function (_a) {
    var _b, _c;
    var _d = _a.action, action = _d === void 0 ? 'delete' : _d, obj = _a.obj;
    var t = useKubevirtTranslation().t;
    var objNamespace = (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.namespace;
    return (React.createElement(React.Fragment, null,
        React.createElement(Trans, { t: t },
            "Are you sure you want to ",
            { action: action },
            " ",
            React.createElement("strong", null, { name: (_c = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _c === void 0 ? void 0 : _c.name })),
        objNamespace && (React.createElement(Trans, { t: t },
            ' ',
            "in namespace ",
            React.createElement("strong", null, { objNamespace: objNamespace }),
            "?"))));
};
export default ConfirmActionMessage;
//# sourceMappingURL=ConfirmActionMessage.js.map