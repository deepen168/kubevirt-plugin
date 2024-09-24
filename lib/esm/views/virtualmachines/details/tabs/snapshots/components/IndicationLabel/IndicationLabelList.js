import * as React from 'react';
import { LabelGroup } from '@patternfly/react-core';
import IndicationLabel from './IndicationLabel';
var IndicationLabelList = function (_a) {
    var _b;
    var snapshot = _a.snapshot;
    var indications = ((_b = snapshot === null || snapshot === void 0 ? void 0 : snapshot.status) === null || _b === void 0 ? void 0 : _b.indications) || [];
    if (indications.length === 0) {
        return React.createElement(React.Fragment, null, "-");
    }
    return (React.createElement(LabelGroup, null, indications.map(function (indication) {
        var _a;
        return (React.createElement(IndicationLabel, { indication: indication, key: "".concat((_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _a === void 0 ? void 0 : _a.name, "-").concat(indication) }));
    })));
};
export default IndicationLabelList;
//# sourceMappingURL=IndicationLabelList.js.map