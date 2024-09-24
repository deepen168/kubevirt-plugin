declare type UseCanCreateBootableVolume = (namespace: string) => {
    canCreateDS: boolean;
    canCreatePVC: boolean;
    canCreateSnapshots: boolean;
    canListInstanceTypesPreference: boolean;
    loading: boolean;
};
declare const useCanCreateBootableVolume: UseCanCreateBootableVolume;
export default useCanCreateBootableVolume;
