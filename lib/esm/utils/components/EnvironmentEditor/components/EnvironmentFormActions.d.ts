import * as React from 'react';
import './EnvironmentFormActions.scss';
declare type EnvironmentFormActionsProps = {
    closeError: () => void;
    error?: any;
    isSaveDisabled?: boolean;
    onReload: () => void;
    onSave: () => void;
};
declare const EnvironmentFormActions: React.FC<EnvironmentFormActionsProps>;
export default EnvironmentFormActions;
