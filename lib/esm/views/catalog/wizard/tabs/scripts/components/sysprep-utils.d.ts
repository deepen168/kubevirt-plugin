import { IoK8sApiCoreV1ConfigMap } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const isSysprepConfig: (name: string) => (object: any) => boolean;
export declare const editSysprepObject: (updateTabsData: WizardVMContextType, sysprepName: string, sysprepData: IoK8sApiCoreV1ConfigMap['data']) => void;
export declare const pushSysprepObject: (vm: V1VirtualMachine, updateTabsData: WizardVMContextType, sysprepData: IoK8sApiCoreV1ConfigMap['data'], sysprepName: string) => void;
export declare const removeSysprepObject: (updateVM: WizardVMContextType, updateTabsData: WizardVMContextType, sysprepName: string) => any;
