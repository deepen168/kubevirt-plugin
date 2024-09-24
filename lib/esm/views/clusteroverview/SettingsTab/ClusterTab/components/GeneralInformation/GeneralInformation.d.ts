import { FC } from 'react';
import { SubscriptionKind } from '../../../../../../views/clusteroverview/utils/types';
import './general-information.scss';
declare type GeneralInformationProps = {
    catalogSourceMissing: boolean;
    kubevirtSubscription: SubscriptionKind;
    loaded: boolean;
    loadErrors: Error[];
    operatorLink: string;
    updateChannel: string;
    version: string;
};
declare const GeneralInformation: FC<GeneralInformationProps>;
export default GeneralInformation;
