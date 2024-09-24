import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { INSTANCE_TYPES_SECTIONS } from '../../utils/constants';
declare type SectionListItemProps = {
    headerAction?: ReactNode;
    headerText: ReactNode;
    sectionKey: INSTANCE_TYPES_SECTIONS;
    sectionState: [INSTANCE_TYPES_SECTIONS, Dispatch<SetStateAction<INSTANCE_TYPES_SECTIONS>>];
};
declare const SectionListItem: FC<SectionListItemProps>;
export default SectionListItem;
