import * as React from 'react';
import { Updater } from 'use-immer';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { TabsData } from './utils/tabs-data';
import { UpdateValidatedVM } from './useValidatedVm';
export declare type WizardVMContextType = {
    /** is the virtual machine creation disabled */
    disableVmCreate?: boolean;
    /** error state of the vm context */
    error?: any;
    /** loaded state of the vm context */
    loaded?: boolean;
    /** Set the isCreatedDisabled variable */
    setDisableVmCreate?: React.Dispatch<React.SetStateAction<boolean>>;
    /** additional tabs data, not related to the vm */
    tabsData?: TabsData;
    /** update tabs data */
    updateTabsData?: Updater<TabsData>;
    /**
     * update the VirtualMachine used for the wizard
     * @param vm V1VirtualMachine
     */
    updateVM?: UpdateValidatedVM;
    /** the vm used for the wizard */
    vm?: V1VirtualMachine;
};
export declare const useWizardVM: () => WizardVMContextType;
export declare const WizardVMContext: React.Context<WizardVMContextType>;
export declare const WizardVMContextProvider: React.FC;
export declare const useWizardVMContext: () => WizardVMContextType;
