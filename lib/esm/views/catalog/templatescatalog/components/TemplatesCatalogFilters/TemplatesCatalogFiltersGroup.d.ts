import { FC } from 'react';
import './TemplatesCatalogFiltersGroup.scss';
export declare const TemplatesCatalogFiltersGroup: FC<{
    defaultExpanded?: boolean;
    filters: {
        count?: number;
        label?: string;
        value: string;
    }[];
    groupKey: string;
    groupLabel?: string;
    onFilterClick: (type: string, value: string) => void;
    pickedFilters: Set<string>;
}>;
