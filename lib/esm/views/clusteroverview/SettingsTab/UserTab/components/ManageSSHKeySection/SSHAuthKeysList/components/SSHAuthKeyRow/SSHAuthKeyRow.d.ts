import { FC } from 'react';
import { AuthKeyRow } from '../../utils/types';
import './SSHAuthKeyRow.scss';
declare type SSHAuthKeyRowProps = {
    isRemoveDisabled: boolean;
    onAuthKeyChange: (updatedKey: AuthKeyRow) => void;
    onAuthKeyDelete: (keyToRemove: AuthKeyRow) => void;
    row: AuthKeyRow;
    selectableProjects: string[];
};
declare const SSHAuthKeyRow: FC<SSHAuthKeyRowProps>;
export default SSHAuthKeyRow;
