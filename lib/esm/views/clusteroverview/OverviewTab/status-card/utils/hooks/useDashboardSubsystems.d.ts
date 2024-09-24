import { ResolvedExtension } from '@openshift-console/dynamic-plugin-sdk';
import { Extension, ExtensionTypeGuard } from '@openshift-console/dynamic-plugin-sdk/lib/types';
declare const useDashboardSubsystems: <E extends Extension<any>>(typeGuard: ExtensionTypeGuard<E>) => ResolvedExtension<E, import("@openshift-console/dynamic-plugin-sdk/lib/types").ExtensionProperties<E>>[];
export default useDashboardSubsystems;
