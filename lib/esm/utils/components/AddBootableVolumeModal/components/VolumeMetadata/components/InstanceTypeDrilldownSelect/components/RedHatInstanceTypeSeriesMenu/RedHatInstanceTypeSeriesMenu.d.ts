import { Dispatch, FC, SetStateAction } from 'react';
import { RedHatInstanceTypeSeries } from '../../utils/types';
declare type RedHatInstanceTypeSeriesMenuProps = {
    selected: string;
    series: RedHatInstanceTypeSeries[];
    setSelected: Dispatch<SetStateAction<string>>;
};
declare const RedHatInstanceTypeSeriesMenu: FC<RedHatInstanceTypeSeriesMenuProps>;
export default RedHatInstanceTypeSeriesMenu;
