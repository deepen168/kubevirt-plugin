import * as React from 'react';
export declare type TimestampProps = {
    className?: string;
    hideIcon?: boolean;
    omitSuffix?: boolean;
    timestamp: number | string;
};
declare const Timestamp: React.FC<TimestampProps>;
export default Timestamp;
