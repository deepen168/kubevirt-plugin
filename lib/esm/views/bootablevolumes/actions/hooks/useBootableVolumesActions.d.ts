import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
import { BootableResource } from '../../utils/types';
declare type BootableVolumesActionsProps = (source: BootableResource, preferences: V1beta1VirtualMachineClusterPreference[]) => [actions: Action[]];
declare const useBootableVolumesActions: BootableVolumesActionsProps;
export default useBootableVolumesActions;
