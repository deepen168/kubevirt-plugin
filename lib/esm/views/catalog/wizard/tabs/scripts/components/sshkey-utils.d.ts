import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const removeSSHKeyObject: (updateTabsData: WizardVMContextType, oldSSHServiceName: string) => any;
export declare const updateSSHKeyObject: (vm: V1VirtualMachine, updateTabsData: WizardVMContextType, sshkey: string, secretName: string) => void;
