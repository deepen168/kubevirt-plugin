import { CATALOG_FILTERS } from '../utils/consts';
import { TemplateFilters } from '../utils/types';
export declare const useTemplatesFilters: () => [TemplateFilters, (type: CATALOG_FILTERS, value: boolean | string) => void, () => void];
