import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RHELAutomaticSubscriptionData } from '@kubevirt-utils/hooks/useRHELAutomaticSubscription/utils/types';
import { K8sModel } from '@openshift-console/dynamic-plugin-sdk';
declare type QuickCreateVMType = (inputs: {
    models: {
        [key: string]: K8sModel;
    };
    overrides: {
        autoUpdateEnabled: boolean;
        isDisabledGuestSystemLogs: boolean;
        name: string;
        namespace: string;
        subscriptionData: RHELAutomaticSubscriptionData;
    };
    template: V1Template;
    uploadData: (processedTemplate: V1Template) => Promise<V1VirtualMachine>;
}) => Promise<V1VirtualMachine>;
export declare const quickCreateVM: QuickCreateVMType;
export {};
