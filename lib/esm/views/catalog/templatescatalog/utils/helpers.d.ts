import { SetStateAction } from 'react';
import { UpdateValidatedVM } from '@catalog/utils/WizardVMContext';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { TemplateFilters } from './types';
export declare const filterTemplates: (templates: V1Template[], filters: TemplateFilters) => V1Template[];
export declare const updateVMCPUMemory: (ns: string, updateVM: any, setUpdatedVM?: ((value: SetStateAction<V1VirtualMachine>) => void) | undefined) => (vm: V1VirtualMachine) => any;
export declare const hasNoDefaultUserAllFilters: (filters: TemplateFilters) => boolean;
