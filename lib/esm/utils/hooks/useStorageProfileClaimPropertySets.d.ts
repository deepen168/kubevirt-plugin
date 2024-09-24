import { ClaimPropertySets } from '@kubevirt-utils/types/storage';
export declare type UseStorageProfileClaimPropertySetsValue = {
    claimPropertySets: ClaimPropertySets;
    error: any;
    loaded: boolean;
};
declare const useStorageProfileClaimPropertySets: (storageClassName: string) => UseStorageProfileClaimPropertySetsValue;
export default useStorageProfileClaimPropertySets;
