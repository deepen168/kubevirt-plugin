import React from 'react';
import ActionsDropdown from '@kubevirt-utils/components/ActionsDropdown/ActionsDropdown';
import { useDataImportCronActionsProvider } from '../hooks/useDataImportCronActions';
import './DataImportCronActions.scss';
var DataImportCronActions = function (_a) {
    var dataImportCron = _a.dataImportCron, isKebabToggle = _a.isKebabToggle;
    var _b = useDataImportCronActionsProvider(dataImportCron), actions = _b[0], onLazyOpen = _b[1];
    return (React.createElement(ActionsDropdown, { actions: actions, id: "data-import-cron-actions", isKebabToggle: isKebabToggle, onLazyClick: onLazyOpen }));
};
export default DataImportCronActions;
//# sourceMappingURL=DataImportCronActions.js.map