import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import './template-scripts-tab.scss';
declare type TemplateScriptsPageProps = {
    obj: V1Template;
};
declare const TemplateScriptsPage: FC<TemplateScriptsPageProps>;
export default TemplateScriptsPage;
