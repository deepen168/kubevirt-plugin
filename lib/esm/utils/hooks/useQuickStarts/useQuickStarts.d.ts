import { WatchK8sResult } from '@openshift-console/dynamic-plugin-sdk';
import { QuickStart } from '@patternfly/quickstarts';
declare const useQuickStarts: (filterDisabledQuickStarts?: boolean) => WatchK8sResult<QuickStart[]>;
export default useQuickStarts;
