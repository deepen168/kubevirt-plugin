import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type CommonTemplateAlertProps = {
    template: V1Template;
};
declare const CommonTemplateAlert: FC<CommonTemplateAlertProps>;
export default CommonTemplateAlert;
