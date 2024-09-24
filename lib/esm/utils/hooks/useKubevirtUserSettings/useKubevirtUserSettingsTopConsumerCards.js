var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect, useMemo, useRef } from 'react';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import useLocalStorage from '../useLocalStorage';
import { SHOW_TOP_5_ITEMS, TOP_CONSUMERS_DURATION_KEY, TOP_CONSUMERS_NUM_ITEMS_KEY, } from './../../../views/clusteroverview/TopConsumersTab/utils/constants';
import { initialTopConsumerCardSettings } from './../../../views/clusteroverview/TopConsumersTab/utils/utils';
import { TOP_CONSUMERS_CARD } from './utils/const';
import useKubevirtUserSettings from './useKubevirtUserSettings';
var useKubevirtUserSettingsTopConsumerCards = function () {
    var updateOnceFromUserSetting = useRef(null);
    var _a = useKubevirtUserSettings('cards'), cards = _a[0], setCards = _a[1], loaded = _a[2];
    var _b = useLocalStorage(TOP_CONSUMERS_CARD), topConsumerSettingsLocalStorage = _b[0], setTopConsumerSettingsLocalStorage = _b[1];
    useEffect(function () {
        var _a, _b;
        if (!updateOnceFromUserSetting.current && loaded) {
            if (cards === null || cards === void 0 ? void 0 : cards[TOP_CONSUMERS_CARD]) {
                setTopConsumerSettingsLocalStorage(__assign({}, cards === null || cards === void 0 ? void 0 : cards[TOP_CONSUMERS_CARD]));
            }
            if (!(cards === null || cards === void 0 ? void 0 : cards[TOP_CONSUMERS_CARD])) {
                setTopConsumerSettingsLocalStorage(JSON.stringify(__assign((_a = {}, _a[TOP_CONSUMERS_DURATION_KEY] = DurationOption.THIRTY_MIN.toString(), _a[TOP_CONSUMERS_NUM_ITEMS_KEY] = SHOW_TOP_5_ITEMS, _a), initialTopConsumerCardSettings)));
            }
            updateOnceFromUserSetting.current = true;
            return;
        }
        if (!isEqualObject(topConsumerSettingsLocalStorage, cards === null || cards === void 0 ? void 0 : cards[TOP_CONSUMERS_CARD])) {
            setCards === null || setCards === void 0 ? void 0 : setCards((_b = {}, _b[TOP_CONSUMERS_CARD] = topConsumerSettingsLocalStorage, _b));
        }
    }, [
        cards,
        topConsumerSettingsLocalStorage,
        setCards,
        setTopConsumerSettingsLocalStorage,
        loaded,
    ]);
    var setLocalStorageData = useMemo(function () {
        return function (field, value) {
            var _a;
            return setTopConsumerSettingsLocalStorage(JSON.stringify(__assign(__assign({}, topConsumerSettingsLocalStorage), (_a = {}, _a[field] = value, _a))));
        };
    }, [setTopConsumerSettingsLocalStorage, topConsumerSettingsLocalStorage]);
    return [topConsumerSettingsLocalStorage, setLocalStorageData];
};
export default useKubevirtUserSettingsTopConsumerCards;
//# sourceMappingURL=useKubevirtUserSettingsTopConsumerCards.js.map