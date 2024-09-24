import { Dispatch, FC, SetStateAction } from 'react';
import { SecretSelectionOption, SSHSecretDetails } from '../utils/types';
declare type SecretSelectionRadioGroupProps = {
    selectedOption: SecretSelectionOption;
    setSelectedOption: Dispatch<SetStateAction<SecretSelectionOption>>;
    setSSHDetails: Dispatch<SetStateAction<SSHSecretDetails>>;
};
declare const SecretSelectionRadioGroup: FC<SecretSelectionRadioGroupProps>;
export default SecretSelectionRadioGroup;
