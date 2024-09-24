import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
declare const useSelectedFilters: (rowFilters: RowFilter<V1VirtualMachine>[], searchFilters: RowFilter<V1VirtualMachine>[]) => (string | null)[];
export default useSelectedFilters;
