import { FC } from 'react';
import './automatic-subscription-type.scss';
declare type AutomaticSubscriptionTypeProps = {
    selected: {
        title: string;
        value: string;
    };
    setSelected: (selected: {
        title: string;
        value: string;
    }) => void;
    updateSubscriptionType: (obj: {
        type: string;
    }) => void;
};
declare const AutomaticSubscriptionType: FC<AutomaticSubscriptionTypeProps>;
export default AutomaticSubscriptionType;
