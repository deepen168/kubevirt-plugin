import { FC, ReactNode } from 'react';
declare type WizardDescriptionItemProps = {
    /** additional className */
    className?: string;
    /** count of items in the description list */
    count?: number | string;
    /** description */
    description?: ReactNode;
    /** helper popover. the popover will not be available if onTitleClick is present */
    helperPopover?: {
        content: ReactNode;
        header: ReactNode;
    };
    /** help text icon */
    helpTextIcon?: ReactNode;
    /** disabled state of the description group */
    isDisabled?: boolean;
    /** is the description group editable */
    isEdit?: boolean;
    label?: ReactNode;
    /** onClick callback for the edit button */
    onEditClick?: () => void;
    /** onClick callback for the title */
    onTitleClick?: () => void;
    /** show edit button besides title */
    showEditOnTitle?: boolean;
    /** date-test-id of the description group */
    testId?: string;
    /** title */
    title: string;
};
export declare const WizardDescriptionItem: FC<WizardDescriptionItemProps>;
export {};
