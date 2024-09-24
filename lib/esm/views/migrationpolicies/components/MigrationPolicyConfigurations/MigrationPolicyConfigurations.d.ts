import React from 'react';
import { InitialMigrationPolicyState } from '../../list/components/MigrationPolicyCreateForm/utils/utils';
import { EditMigrationPolicyInitialState, MigrationPolicyStateDispatch } from '../MigrationPolicyEditModal/utils/constants';
declare type MigrationPolicyConfigurationsProps = {
    setState: React.Dispatch<React.SetStateAction<EditMigrationPolicyInitialState | InitialMigrationPolicyState>>;
    setStateField: (field: string) => React.Dispatch<React.SetStateAction<MigrationPolicyStateDispatch>>;
    state: EditMigrationPolicyInitialState | InitialMigrationPolicyState;
};
declare const MigrationPolicyConfigurations: React.FC<MigrationPolicyConfigurationsProps>;
export default MigrationPolicyConfigurations;
