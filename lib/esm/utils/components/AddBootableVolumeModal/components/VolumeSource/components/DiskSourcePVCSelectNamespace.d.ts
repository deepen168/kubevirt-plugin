import { Dispatch, FC, SetStateAction } from 'react';
declare type DiskSourcePVCSelectNamespaceProps = {
    isDisabled?: boolean;
    onChange: Dispatch<SetStateAction<string>>;
    projectNames: string[];
    projectsLoaded: boolean;
    selectedProject: string;
};
declare const DiskSourcePVCSelectNamespace: FC<DiskSourcePVCSelectNamespaceProps>;
export default DiskSourcePVCSelectNamespace;
