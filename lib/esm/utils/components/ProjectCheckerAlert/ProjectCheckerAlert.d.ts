import { FC } from 'react';
import { K8sResourceKind } from '@openshift-console/dynamic-plugin-sdk';
declare type ProjectCheckerAlertProps = {
    projectsLoaded: boolean;
    qualifiedProjects: K8sResourceKind[];
};
declare const ProjectCheckerAlert: FC<ProjectCheckerAlertProps>;
export default ProjectCheckerAlert;
