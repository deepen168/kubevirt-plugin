import React from 'react';
import DiskSourcePVCSelectName from './DiskSourcePVCSelectName';
import DiskSourcePVCSelectNamespace from './DiskSourcePVCSelectNamespace';
var DiskSourcePVCSelect = function (_a) {
    var vmNamepace = _a.vmNamepace;
    return (React.createElement(React.Fragment, null,
        React.createElement(DiskSourcePVCSelectNamespace, { vmNamespace: vmNamepace }),
        React.createElement(DiskSourcePVCSelectName, { vmNamespace: vmNamepace })));
};
export default DiskSourcePVCSelect;
//# sourceMappingURL=DiskSourcePVCSelect.js.map