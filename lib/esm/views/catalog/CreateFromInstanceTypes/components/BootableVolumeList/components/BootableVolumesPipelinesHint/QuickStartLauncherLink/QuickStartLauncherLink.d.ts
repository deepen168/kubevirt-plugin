import { FC } from 'react';
import { QuickStart } from '@patternfly/quickstarts';
import './QuickStartLauncherLink.scss';
declare type QuickStartLauncherLinkProps = {
    quickStart: QuickStart;
    quickStartLoaded: boolean;
    text: string;
};
declare const QuickStartLauncherLink: FC<QuickStartLauncherLinkProps>;
export default QuickStartLauncherLink;
