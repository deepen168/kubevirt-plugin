import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
import { BootableResource } from '../../utils/types';
declare const useBootableVolumesFilters: () => RowFilter<BootableResource>[];
export default useBootableVolumesFilters;
