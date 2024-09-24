import { FC } from 'react';
import { AllQuickStartStates } from '@patternfly/quickstarts';
interface QuickStartsSectionProps {
    allQuickStartStates?: AllQuickStartStates;
    description?: string;
    featured?: string[];
    filter?: (QuickStart: any) => boolean;
    setActiveQuickStart?: (quickStartId: string, totalTasks?: number) => void;
    title?: string;
}
declare const QuickStartsSection: FC<QuickStartsSectionProps>;
export default QuickStartsSection;
