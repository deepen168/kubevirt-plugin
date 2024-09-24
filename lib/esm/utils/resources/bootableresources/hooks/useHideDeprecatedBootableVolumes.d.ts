import { CREATE_VM_TAB } from '@catalog/CreateVMHorizontalNav/constants';
import { FilterValue } from '@openshift-console/dynamic-plugin-sdk';
declare type UseHideDeprecatedBootableVolumes = (onFilterChange: (type: string, value: FilterValue) => void, currentTab?: CREATE_VM_TAB) => void;
declare const useHideDeprecatedBootableVolumes: UseHideDeprecatedBootableVolumes;
export default useHideDeprecatedBootableVolumes;
