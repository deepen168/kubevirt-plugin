import { Selector } from '@openshift-console/dynamic-plugin-sdk';
import { UseInstanceTypeAndPreferencesValues } from '../utils/types';
declare type UseInstanceTypeAndPreferences = (fieldSelector?: string, selector?: Selector) => UseInstanceTypeAndPreferencesValues;
declare const useInstanceTypesAndPreferences: UseInstanceTypeAndPreferences;
export default useInstanceTypesAndPreferences;
