import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type YamlAndCLIViewerModalProps = {
    isOpen: boolean;
    onClose: () => void;
    vm: V1VirtualMachine;
};
declare const YamlAndCLIViewerModal: FC<YamlAndCLIViewerModalProps>;
export default YamlAndCLIViewerModal;
