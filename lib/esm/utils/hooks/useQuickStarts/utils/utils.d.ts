import { QuickStart } from '@patternfly/quickstarts';
export declare const getQuickStartNameRef: (quickStart: QuickStart) => string;
export declare const groupQuickStartsByName: (quickStarts: QuickStart[]) => Record<string, QuickStart[]>;
/**
 * Returns the QuickStart with the best localization match, for the given
 * preferred language and preferred country. It prefers a match in this order:
 *
 * 1. QuickStart language and country are equal to the preferred language and country.
 *    This includes sample without language (fallbacks to en) and no country.
 *
 * 2. QuickStart language is equal to the preferred language.
 *    1. And the quick starts has no country defined.  (eg, select en quick starts is used for en-CA and en-GB)
 *    2. Any country is defined.                       (eg, select en-CA quick starts is used for en-GB)
 *
 * 3. Fallback to an english quick starts
 *    (QuickStart language is en OR quick starts language is not defined):
 *    1. Same country  (use en-CA quick starts if preference is fr-CA)
 *    2. No country
 *    3. Any country   (use en-CA quick starts if preference is en-US)
 * @param quickStarts QuickStart custom resources
 * @param language Language code
 */
export declare const getBestMatch: (quickStarts: QuickStart[], language: string) => null | QuickStart;
