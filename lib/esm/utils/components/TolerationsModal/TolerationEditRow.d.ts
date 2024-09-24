import * as React from 'react';
import { TolerationLabel } from './utils/constants';
declare type TolerationEditRowProps = {
    label: TolerationLabel;
    onChange: (label: TolerationLabel) => void;
    onDelete: (id: any) => void;
};
declare const TolerationEditRow: React.FC<TolerationEditRowProps>;
export default TolerationEditRow;
