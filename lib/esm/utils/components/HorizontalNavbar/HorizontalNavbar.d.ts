import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NavPageKubevirt } from './utils/utils';
import './horizontal-nav-bar.scss';
declare type HorizontalNavbarProps = {
    instanceTypeExpandedSpec?: V1VirtualMachine;
    pages: NavPageKubevirt[];
    vm?: V1VirtualMachine;
};
declare const HorizontalNavbar: FC<HorizontalNavbarProps>;
export default HorizontalNavbar;
