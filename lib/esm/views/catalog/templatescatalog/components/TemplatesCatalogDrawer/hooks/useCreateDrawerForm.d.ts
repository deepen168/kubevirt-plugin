import { MouseEvent } from 'react';
declare const useCreateDrawerForm: (namespace: string, subscriptionData: RHELAutomaticSubscriptionData, authorizedSSHKey: string) => {
    createError: undefined;
    isCustomizeDisabled: boolean;
    isCustomizeLoading: boolean;
    isQuickCreateDisabled: any;
    isQuickCreateLoading: boolean;
    nameField: any;
    onChangeStartVM: (checked: boolean) => void;
    onCustomize: (e: MouseEvent) => Promise<void>;
    onQuickCreate: (e: MouseEvent) => Promise<void>;
    onVMNameChange: (newName: string) => void;
    runStrategy: string | undefined;
    startVM: boolean | undefined;
};
export default useCreateDrawerForm;
