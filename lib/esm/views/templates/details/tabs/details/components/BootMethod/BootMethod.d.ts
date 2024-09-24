import { FC } from 'react';
import { V1Template } from '@kubevirt-utils/models';
declare type BootMethodProps = {
    editable: boolean;
    template: V1Template;
};
declare const BootMethod: FC<BootMethodProps>;
export default BootMethod;
