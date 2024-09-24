import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type useVirtualMachineTemplatesActionsProps = (template: V1Template) => [actions: Action[], onLazyActions: () => void];
export declare const EDIT_TEMPLATE_ID = "edit-template";
declare const useVirtualMachineTemplatesActions: useVirtualMachineTemplatesActionsProps;
export default useVirtualMachineTemplatesActions;
