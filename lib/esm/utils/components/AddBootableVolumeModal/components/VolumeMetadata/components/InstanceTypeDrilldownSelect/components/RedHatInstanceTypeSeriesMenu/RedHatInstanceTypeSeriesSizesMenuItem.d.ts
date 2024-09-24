import { Dispatch, FC, SetStateAction } from 'react';
import { InstanceTypeSize } from '../../utils/types';
declare type RedHatInstanceTypeSeriesSizesMenuItemProps = {
    selected: string;
    seriesName: string;
    setSelected: Dispatch<SetStateAction<string>>;
    sizes: InstanceTypeSize[];
};
declare const RedHatInstanceTypeSeriesSizesMenuItems: FC<RedHatInstanceTypeSeriesSizesMenuItemProps>;
export default RedHatInstanceTypeSeriesSizesMenuItems;
