import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
export declare const getProjectOptions: (includeAllProjects: boolean, projects: K8sResourceCommon[]) => {
    children: any;
    groupVersionKind: {
        version: string;
        kind: string;
        group: string | undefined;
    };
    value: any;
}[];
