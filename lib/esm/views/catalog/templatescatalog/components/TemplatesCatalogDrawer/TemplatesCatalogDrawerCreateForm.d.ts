import { FC } from 'react';
import { RHELAutomaticSubscriptionData } from '@kubevirt-utils/hooks/useRHELAutomaticSubscription/utils/types';
declare type TemplatesCatalogDrawerCreateFormProps = {
    authorizedSSHKey: string;
    namespace: string;
    onCancel: () => void;
    subscriptionData: RHELAutomaticSubscriptionData;
};
export declare const TemplatesCatalogDrawerCreateForm: FC<TemplatesCatalogDrawerCreateFormProps>;
export {};
