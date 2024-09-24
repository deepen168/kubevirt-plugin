import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type SearchItem = {
    description: string;
    id: string;
    isDisabled?: boolean;
    title: string;
};
export declare type SearchItemGetter = (vm?: V1VirtualMachine) => SearchItem[];
export declare const getDetailsTabBootIds: SearchItemGetter;
export declare const getDetailsTabHardwareIds: SearchItemGetter;
export declare const getDetailsTabMainIds: SearchItemGetter;
export declare const getStorageTabIds: SearchItemGetter;
export declare const getNetworkTabIds: SearchItemGetter;
export declare const getSchedulingTabIds: SearchItemGetter;
export declare const getSSHTabIds: SearchItemGetter;
export declare const getInitialRunTabIds: SearchItemGetter;
export declare const getSearchItems: (vm: V1VirtualMachine) => {
    element: SearchItem;
    tab: string;
}[];
export declare const expandURLHash: (ids: string[], hash: string, callBack: (val: boolean) => void) => void;
