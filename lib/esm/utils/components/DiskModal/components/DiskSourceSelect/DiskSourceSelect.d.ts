import { FC } from 'react';
import { SourceTypes } from '../../utils/types';
import './DiskSourceSelect.scss';
declare type DiskSourceSelectProps = {
    className?: string;
    onSelect: (value: SourceTypes) => void;
};
declare const DiskSourceSelect: FC<DiskSourceSelectProps>;
export default DiskSourceSelect;
