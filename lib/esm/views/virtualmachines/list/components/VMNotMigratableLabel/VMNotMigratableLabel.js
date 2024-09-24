import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useSingleNodeCluster from '@kubevirt-utils/hooks/useSingleNodeCluster';
import { Label, SplitItem } from '@patternfly/react-core';
import { isLiveMigratable, printableVMStatus } from '@virtualmachines/utils';
import './VMNotMigratableLabel.scss';
var VMNotMigratableLabel = function (_a) {
    var _b;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var isSingleNodeCluster = useSingleNodeCluster()[0];
    var isMigratable = isLiveMigratable(vm, isSingleNodeCluster);
    var isVMrunning = ((_b = vm === null || vm === void 0 ? void 0 : vm.status) === null || _b === void 0 ? void 0 : _b.printableStatus) === printableVMStatus.Running;
    return isVMrunning && !isMigratable ? (React.createElement(SplitItem, null,
        React.createElement(Label, { className: "migratable-label", color: "blue", isCompact: true, key: "not-migratable", variant: "outline" }, t('Not migratable')))) : null;
};
export default VMNotMigratableLabel;
//# sourceMappingURL=VMNotMigratableLabel.js.map