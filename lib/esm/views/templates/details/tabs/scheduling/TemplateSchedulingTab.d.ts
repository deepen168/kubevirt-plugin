import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import './TemplateSchedulingTab.scss';
declare type TemplateSchedulingTabProps = {
    obj?: V1Template;
};
declare const TemplateSchedulingTab: FC<TemplateSchedulingTabProps>;
export default TemplateSchedulingTab;
