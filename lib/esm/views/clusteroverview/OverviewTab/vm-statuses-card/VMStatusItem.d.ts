import * as React from 'react';
import './VMStatusesCard.scss';
declare type VMStatusItemProps = {
    count: number;
    namespace?: string;
    status: string;
};
declare const VMStatusItem: React.FC<VMStatusItemProps>;
export default VMStatusItem;
