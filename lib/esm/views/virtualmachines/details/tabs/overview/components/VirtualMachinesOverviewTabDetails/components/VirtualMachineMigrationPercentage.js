import React from 'react';
import useMigrationPercentage from '@kubevirt-utils/resources/vm/hooks/useMigrationPercentage';
var VirtualMachineMigrationPercentage = function (_a) {
    var vm = _a.vm;
    var migrationPercentage = useMigrationPercentage(vm).percentage;
    return React.createElement(React.Fragment, null, migrationPercentage && " ( ".concat(migrationPercentage, "% completed )"));
};
export default VirtualMachineMigrationPercentage;
//# sourceMappingURL=VirtualMachineMigrationPercentage.js.map