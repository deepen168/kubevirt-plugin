import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { TabsData } from './tabs-data';
export declare const setSessionStorageVM: (value: V1VirtualMachine) => void;
export declare const getSessionStorageVM: () => undefined | V1VirtualMachine;
export declare const setSessionStorageTabsData: (value: TabsData) => void;
export declare const getSessionStorageTabsData: () => TabsData;
export declare const clearSessionStorageVM: () => void;
