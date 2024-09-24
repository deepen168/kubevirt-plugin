import { CREATE_VM_TAB } from '@catalog/CreateVMHorizontalNav/constants';
import { CATALOG_FILTERS } from '@catalog/templatescatalog/utils/consts';
declare type UseHideDeprecatedTemplateTiles = (currentTab: CREATE_VM_TAB, onFilterChange: (type: CATALOG_FILTERS, value: boolean | string) => void) => void;
declare const useHideDeprecatedTemplateTiles: UseHideDeprecatedTemplateTiles;
export default useHideDeprecatedTemplateTiles;
