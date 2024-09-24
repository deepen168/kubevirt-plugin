import { FC } from 'react';
import { CATALOG_FILTERS } from '../utils/consts';
import { TemplateFilters } from '../utils/types';
export declare const TemplatesCatalogHeader: FC<{
    filters: TemplateFilters;
    itemCount: number;
    onFilterChange: (type: CATALOG_FILTERS, value: boolean | string) => void;
}>;
