import { FC } from 'react';
export declare const AnnotationsModalRow: FC<{
    annotation: {
        key: string;
        value: string;
    };
    onChange: ({ key, value }: {
        key: string;
        value: string;
    }) => void;
    onDelete: () => void;
}>;
