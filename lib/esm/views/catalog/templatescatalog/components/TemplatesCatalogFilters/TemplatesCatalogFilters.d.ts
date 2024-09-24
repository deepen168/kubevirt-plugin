import { FC } from 'react';
import { CATALOG_FILTERS } from '@catalog/templatescatalog/utils/consts';
import { TemplateFilters } from '@catalog/templatescatalog/utils/types';
export declare const TemplatesCatalogFilters: FC<{
    filters: TemplateFilters;
    onFilterChange: (type: CATALOG_FILTERS, value: boolean | string) => void;
}>;
