import React, { FC } from 'react';
declare type ExternalLinkProps = {
    className?: string;
    dataTestID?: string;
    href: string;
    stopPropagation?: boolean;
    text?: React.ReactNode;
};
declare const ExternalLink: FC<ExternalLinkProps>;
export default ExternalLink;
