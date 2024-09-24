import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type SysPrepItemProps = {
    template: V1Template;
};
declare const SysPrepItem: FC<SysPrepItemProps>;
export default SysPrepItem;
