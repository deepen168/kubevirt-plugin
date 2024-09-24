import * as React from 'react';
import { SubscriptionKind } from '../../../../../utils/types';
declare type SubscriptionStatusType = {
    operatorLink: string;
    subscription: SubscriptionKind;
};
declare const SubscriptionStatus: React.FC<SubscriptionStatusType>;
export default SubscriptionStatus;
