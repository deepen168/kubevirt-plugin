import { FC } from 'react';
declare type SelectProjectProps = {
    selectedProject: string;
    setSelectedProject: (newProject: string) => void;
};
declare const SelectProject: FC<SelectProjectProps>;
export default SelectProject;
