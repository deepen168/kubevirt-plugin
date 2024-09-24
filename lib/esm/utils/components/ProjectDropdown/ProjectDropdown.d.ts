import { FC } from 'react';
declare type ProjectDropdownProps = {
    includeAllProjects?: boolean;
    onChange: (project: string) => void;
    selectedProject: string;
};
declare const ProjectDropdown: FC<ProjectDropdownProps>;
export default ProjectDropdown;
