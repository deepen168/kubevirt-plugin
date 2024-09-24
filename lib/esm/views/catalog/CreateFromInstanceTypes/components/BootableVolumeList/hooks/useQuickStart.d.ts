import { QuickStart } from '@patternfly/quickstarts';
declare type UseQuickStart = (quickStartId: string) => [QuickStart, boolean];
declare const useQuickStart: UseQuickStart;
export default useQuickStart;
