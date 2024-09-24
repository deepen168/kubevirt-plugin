import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Popover, Stack, StackItem, Title } from '@patternfly/react-core';
import useHCMigrations from './hooks/useHCMigrations';
var MigrationsLimitionsPopover = function () {
    var t = useKubevirtTranslation().t;
    var migrations = useHCMigrations();
    return (React.createElement(Popover, { bodyContent: React.createElement(Stack, { hasGutter: true },
            React.createElement(Title, { headingLevel: "h3" }, t('Live migrations settings')),
            React.createElement(StackItem, null,
                React.createElement("b", null, t('Max. running migrations per cluster')),
                React.createElement("div", null, migrations === null || migrations === void 0 ? void 0 : migrations.parallelMigrationsPerCluster)),
            React.createElement(StackItem, null,
                React.createElement("b", null, t('Max. running migrations per node')),
                React.createElement("div", null, migrations === null || migrations === void 0 ? void 0 : migrations.parallelOutboundMigrationsPerNode))) },
        React.createElement("a", { onClick: function (e) { return e.preventDefault(); } }, t('Limitations'))));
};
export default MigrationsLimitionsPopover;
//# sourceMappingURL=MigrationsLimitionsPopover.js.map