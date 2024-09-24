import { IoK8sApiCoreV1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubernetes';
declare type useProjectsAndPVCsReturnType = {
    error: Error;
    filteredPVCNames: string[];
    projectsLoaded: boolean;
    projectsNames: string[];
    pvcMapper: {
        [name: string]: IoK8sApiCoreV1PersistentVolumeClaim;
    };
    pvcsLoaded: boolean;
};
export declare const useProjectsAndPVCs: (projectSelected: string) => useProjectsAndPVCsReturnType;
export {};
