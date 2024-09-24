import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
declare const useBootVolumeFilters: (isModal: boolean) => RowFilter<BootableVolume>[];
export default useBootVolumeFilters;
