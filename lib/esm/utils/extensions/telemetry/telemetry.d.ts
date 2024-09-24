import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const eventMonitor: (eventType: string, properties?: any) => Promise<void>;
export declare const logEventWithName: (key: string, vm?: V1VirtualMachine, properties?: Record<string, any>) => void;
export declare const logITFlowEvent: (key: string, vm?: V1VirtualMachine, properties?: Record<string, any>) => void;
export declare const logTemplateFlowEvent: (key: string, template: V1Template, properties?: Record<string, any>) => Promise<void>;
