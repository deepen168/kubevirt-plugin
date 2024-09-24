import * as React from 'react';
import { GettingStartedLink } from '../types';
import './GettingStartedSectionContents.scss';
declare type GettingStartedSectionContentsProps = {
    description?: string;
    icon?: React.ReactElement;
    id: string;
    links: GettingStartedLink[];
    moreLink?: GettingStartedLink;
    title: string;
    titleColor?: string;
};
declare const GettingStartedSectionContents: React.FC<GettingStartedSectionContentsProps>;
export default GettingStartedSectionContents;
