import * as React from 'react';
export declare const WizardNoBootModal: React.VFC<{
    isOpen: boolean;
    namespace: string;
    onClose: () => void;
    onSubmit: () => Promise<void>;
}>;
