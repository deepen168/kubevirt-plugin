import { Dispatch, FC, SetStateAction } from 'react';
import { PaginationState } from '@kubevirt-utils/hooks/usePagination/utils/types';
import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
declare type BootableVolumeListPaginationProps = {
    data: BootableVolume[];
    displayShowAllButton: boolean;
    pagination: PaginationState;
    setPagination: Dispatch<SetStateAction<PaginationState>>;
};
declare const BootableVolumeListPagination: FC<BootableVolumeListPaginationProps>;
export default BootableVolumeListPagination;
