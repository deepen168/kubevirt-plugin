import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
declare const useVirtualMachineTemplatesFilters: (availableTemplatesUID: Set<string>) => RowFilter<V1Template>[];
export default useVirtualMachineTemplatesFilters;
