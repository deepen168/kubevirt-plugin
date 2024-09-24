import { FC } from 'react';
import { V1Template } from '@kubevirt-utils/models';
declare type DeschedulerProps = {
    onSubmit?: (updatedTemplate: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const Descheduler: FC<DeschedulerProps>;
export default Descheduler;
