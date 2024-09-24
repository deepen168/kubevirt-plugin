import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const isConnectionEncrypted: () => boolean;
export declare const isHeadlessModeVMI: (vmi: V1VirtualMachineInstance) => boolean;
export declare const clipboardCopyFunc: (_: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => void;
export declare const sleep: (ms?: number) => Promise<unknown>;
