import { LOCALIZATION_COUNTRY_LABEL, LOCALIZATION_LANGUAGE_LABEL, LOCALIZATION_NAME_LABEL, } from '@kubevirt-utils/hooks/useQuickStarts/utils/constants';
export var getQuickStartNameRef = function (quickStart) {
    var _a, _b;
    return ((_a = quickStart.metadata.labels) === null || _a === void 0 ? void 0 : _a[LOCALIZATION_NAME_LABEL]) ||
        ((_b = quickStart.metadata.annotations) === null || _b === void 0 ? void 0 : _b[LOCALIZATION_NAME_LABEL]) ||
        quickStart.metadata.name;
};
export var groupQuickStartsByName = function (quickStarts) {
    return quickStarts.reduce(function (grouped, quickStart) {
        var name = getQuickStartNameRef(quickStart);
        if (!grouped[name])
            grouped[name] = [];
        grouped[name].push(quickStart);
        return grouped;
    }, {});
};
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
export var getBestMatch = function (quickStarts, language) {
    var _a, _b, _c, _d;
    if (!quickStarts || !quickStarts.length) {
        return null;
    }
    var preferredLanguage = (language || 'en').split('-')[0].toLowerCase();
    var preferredCountry = ((language || '').split('-')[1] || '').toUpperCase();
    var sameLanguageWithoutCountry = null;
    var sameLanguageWithAnyCountry = null;
    var fallbackLanguageSameCountry = null;
    var fallbackLanguageNoCountry = null;
    var fallbackLanguageAnyCountry = null;
    for (var _i = 0, quickStarts_1 = quickStarts; _i < quickStarts_1.length; _i++) {
        var quickStart = quickStarts_1[_i];
        var quickStartLanguage = (((_b = (_a = quickStart.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[LOCALIZATION_LANGUAGE_LABEL]) || 'en').toLowerCase();
        var quickStartCountry = (((_d = (_c = quickStart.metadata) === null || _c === void 0 ? void 0 : _c.labels) === null || _d === void 0 ? void 0 : _d[LOCALIZATION_COUNTRY_LABEL]) || '').toUpperCase();
        if (quickStartLanguage === preferredLanguage && quickStartCountry === preferredCountry) {
            return quickStart;
        }
        if (quickStartLanguage === preferredLanguage) {
            if (!quickStartCountry && !sameLanguageWithoutCountry) {
                sameLanguageWithoutCountry = quickStart;
            }
            else if (quickStartCountry && !sameLanguageWithAnyCountry) {
                sameLanguageWithAnyCountry = quickStart;
            }
        }
        if (quickStartLanguage === 'en') {
            if (quickStartCountry === preferredCountry && !fallbackLanguageSameCountry) {
                fallbackLanguageSameCountry = quickStart;
            }
            else if (!quickStartCountry && !fallbackLanguageNoCountry) {
                fallbackLanguageNoCountry = quickStart;
            }
            else if (!fallbackLanguageAnyCountry) {
                fallbackLanguageAnyCountry = quickStart;
            }
        }
    }
    return (sameLanguageWithoutCountry ||
        sameLanguageWithAnyCountry ||
        fallbackLanguageSameCountry ||
        fallbackLanguageNoCountry ||
        fallbackLanguageAnyCountry);
};
//# sourceMappingURL=utils.js.map