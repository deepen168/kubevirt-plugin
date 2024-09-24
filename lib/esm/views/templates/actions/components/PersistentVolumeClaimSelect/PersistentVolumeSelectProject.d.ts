import { FC } from 'react';
declare type PersistentVolumeSelectProjectProps = {
    onChange: (newProject: string) => void;
    projectsName: string[];
    selectedProject: string;
};
export declare const PersistentVolumeSelectProject: FC<PersistentVolumeSelectProjectProps>;
export {};
