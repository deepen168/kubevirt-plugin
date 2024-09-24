import { FC } from 'react';
import { TabModalProps } from '@kubevirt-utils/components/TabModal/TabModal';
declare type DetachModalProps = Omit<TabModalProps, 'children'> & {
    diskName: string;
};
declare const DetachModal: FC<DetachModalProps>;
export default DetachModal;
