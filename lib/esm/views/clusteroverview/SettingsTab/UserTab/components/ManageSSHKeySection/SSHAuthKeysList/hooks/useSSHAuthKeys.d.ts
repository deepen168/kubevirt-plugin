import { AuthKeyRow } from '../utils/types';
declare type UseSSHAuthKeys = () => {
    authKeyRows: AuthKeyRow[];
    loaded: boolean;
    onAuthKeyAdd: () => void;
    onAuthKeyChange: (updatedKey: AuthKeyRow) => void;
    onAuthKeyDelete: (keyToRemove: AuthKeyRow) => void;
    selectableProjects: string[];
};
declare const useSSHAuthKeys: UseSSHAuthKeys;
export default useSSHAuthKeys;
