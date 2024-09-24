import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { WatchK8sResultsObject } from '@openshift-console/dynamic-plugin-sdk';
import { K8sResourceKind } from '../../../utils/types';
import { Flatten, TemplateItem, VirtualMachineTemplateBundle, VMGenericLikeEntityKind } from './types';
export declare const getLabels: (entity: K8sResourceKind, defaultValue?: {
    [key: string]: string;
} | undefined) => any;
export declare const getLoadedData: <T extends K8sResourceKind | K8sResourceKind[] = K8sResourceKind[]>(result: WatchK8sResultsObject<T>, defaultValue?: null) => T;
export declare const getWorkloadProfile: (vm: VMGenericLikeEntityKind) => any;
export declare const filterTemplates: (templates: V1Template[]) => TemplateItem[];
export declare const flattenTemplates: Flatten<{
    vms: V1VirtualMachine[];
    vmTemplates: V1Template[];
}, VirtualMachineTemplateBundle[]>;
