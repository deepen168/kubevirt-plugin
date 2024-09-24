import { Dispatch, FC, SetStateAction } from 'react';
import { InitialMigrationPolicyState } from '../../../../list/components/MigrationPolicyCreateForm/utils/utils';
import { EditMigrationPolicyInitialState } from '../../../MigrationPolicyEditModal/utils/constants';
import { MigrationPolicyConfigurationOption } from '../../utils/constants';
declare type MigrationPolicyConfigurationDropdownProps = {
    isDisabled: boolean;
    options: MigrationPolicyConfigurationOption;
    setState: Dispatch<SetStateAction<EditMigrationPolicyInitialState | InitialMigrationPolicyState>>;
    state: EditMigrationPolicyInitialState | InitialMigrationPolicyState;
};
declare const MigrationPolicyConfigurationDropdown: FC<MigrationPolicyConfigurationDropdownProps>;
export default MigrationPolicyConfigurationDropdown;
