import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import './TemplateCatalogDrawer.scss';
declare type TemplatesCatalogDrawerProps = {
    isOpen: boolean;
    namespace: string;
    onClose: () => void;
    template: undefined | V1Template;
};
export declare const TemplatesCatalogDrawer: FC<TemplatesCatalogDrawerProps>;
export {};
