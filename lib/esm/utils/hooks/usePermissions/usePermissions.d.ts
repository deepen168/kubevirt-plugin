declare type Key = 'attacheNetworks' | 'clone' | 'uploadImage';
export declare type UsePermissions = () => {
    capabilitiesData: {
        [key in Key]: {
            allowed: boolean;
            isLoading: boolean;
            taskName: string;
        };
    };
    isLoading: boolean;
};
declare const usePermissions: UsePermissions;
export default usePermissions;
