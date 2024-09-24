import { FC } from 'react';
import { ClaimPropertySets } from '@kubevirt-utils/types/storage';
declare type ApplyStorageProfileSettingsCheckboxProps = {
    claimPropertySets: ClaimPropertySets;
    disabled?: boolean;
    handleChange: (checked: boolean) => void;
    isChecked: boolean;
};
declare const ApplyStorageProfileSettingsCheckbox: FC<ApplyStorageProfileSettingsCheckboxProps>;
export default ApplyStorageProfileSettingsCheckbox;
