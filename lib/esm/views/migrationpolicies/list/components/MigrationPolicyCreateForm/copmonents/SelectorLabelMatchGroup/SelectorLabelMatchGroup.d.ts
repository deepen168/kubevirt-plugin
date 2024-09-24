import React from 'react';
import './SelectorLabelMatchGroup.scss';
declare type SelectorLabelMatchGroupProps = {
    isVMILabel?: boolean;
    labels: {
        [key: string]: string;
    };
    setLabels?: React.Dispatch<React.SetStateAction<{
        [key: string]: string;
    }>>;
};
declare const SelectorLabelMatchGroup: React.FC<SelectorLabelMatchGroupProps>;
export default SelectorLabelMatchGroup;
