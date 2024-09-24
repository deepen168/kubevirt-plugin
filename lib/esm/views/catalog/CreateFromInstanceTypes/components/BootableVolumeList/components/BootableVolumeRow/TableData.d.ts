import { FC } from 'react';
import { BaseCellProps } from '@patternfly/react-table';
import { TdFavoritesType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
declare type TableDataProps = {
    activeColumnIDs: string[];
    favorites?: TdFavoritesType;
    id: string;
    width?: BaseCellProps['width'];
};
declare const TableData: FC<TableDataProps>;
export default TableData;
