import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import './TemplateDisksPage.scss';
declare type TemplateDisksPageProps = {
    obj: V1Template;
};
declare const TemplateDisksPage: FC<TemplateDisksPageProps>;
export default TemplateDisksPage;
