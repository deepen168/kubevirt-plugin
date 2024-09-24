import { FC } from 'react';
declare type CDIInitErrorStatus = {
    namespace: string;
    onErrorClick: () => void;
    pvcName: string;
};
declare const CDIInitErrorStatus: FC<CDIInitErrorStatus>;
export default CDIInitErrorStatus;
