import { WritableDraft } from 'immer/dist/internal';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const produceTemplateNetwork: (template: V1Template, updateNetwork: (vmDraft: WritableDraft<V1VirtualMachine>) => void) => any;
