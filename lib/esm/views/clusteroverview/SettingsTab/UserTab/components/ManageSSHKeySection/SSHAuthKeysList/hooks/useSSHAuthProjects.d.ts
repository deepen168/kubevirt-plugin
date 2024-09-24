import { AuthKeyRow } from '../utils/types';
declare type UseSSHAuthProjects = (authKeyRows: AuthKeyRow[]) => {
    loaded: boolean;
    selectableProjects: string[];
};
declare const useSSHAuthProjects: UseSSHAuthProjects;
export default useSSHAuthProjects;
