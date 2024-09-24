import { FC } from 'react';
import { RHELAutomaticSubscriptionData } from '@kubevirt-utils/hooks/useRHELAutomaticSubscription/utils/types';
import './automatic-subscription-custom-url.scss';
declare type AutomaticSubscriptionCustomUrlProps = {
    customUrl: string;
    isDisabled: boolean;
    updateCustomUrl: (data: Partial<RHELAutomaticSubscriptionData>) => void;
};
declare const AutomaticSubscriptionCustomUrl: FC<AutomaticSubscriptionCustomUrlProps>;
export default AutomaticSubscriptionCustomUrl;
