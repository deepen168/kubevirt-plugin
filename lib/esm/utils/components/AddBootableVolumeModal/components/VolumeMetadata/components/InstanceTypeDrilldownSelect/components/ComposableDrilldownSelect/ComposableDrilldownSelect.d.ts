import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
declare type ComposableDrilldownMenuProps = {
    id?: string;
    isOpen: boolean;
    isScrollable?: boolean;
    scrollableMenuIDs?: string[];
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    toggleLabel: ReactNode | string;
};
declare const ComposableDrilldownSelect: FC<ComposableDrilldownMenuProps>;
export default ComposableDrilldownSelect;
