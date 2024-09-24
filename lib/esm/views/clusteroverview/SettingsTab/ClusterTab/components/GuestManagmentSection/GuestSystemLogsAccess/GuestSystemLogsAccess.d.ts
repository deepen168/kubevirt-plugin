import { FC } from 'react';
import { HyperConverged } from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
import './guest-system-logs-access.scss';
declare type GuestSystemLogsAccessProps = {
    hyperConvergeConfiguration: [hyperConvergeConfig: HyperConverged, loaded: boolean, error: Error];
    newBadge?: boolean;
};
declare const GuestSystemLogsAccess: FC<GuestSystemLogsAccessProps>;
export default GuestSystemLogsAccess;
