import React from 'react';
import classNames from 'classnames';
import { Grid, GridItem } from '@patternfly/react-core';
import TopConsumerCard from './TopConsumerCard';
import { getTopConsumerCardID } from './utils';
import './TopConsumersGridRow.scss';
var TopConsumersGridRow = function (_a) {
    var localStorageData = _a.localStorageData, rowNumber = _a.rowNumber, setLocalStorageData = _a.setLocalStorageData, _b = _a.topGrid, topGrid = _b === void 0 ? false : _b;
    var classes = classNames('kv-top-consumers-card__grid', {
        'kv-top-consumers-card__top-grid': topGrid,
    });
    return (React.createElement(Grid, { className: classes }, Array.from({ length: 3 }, function (_, i) {
        var cardID = getTopConsumerCardID(rowNumber, i + 1);
        return (React.createElement(GridItem, { className: "kv-top-consumers-card__card-grid-item", key: cardID, span: 4 },
            React.createElement(TopConsumerCard, { cardID: cardID, localStorageData: localStorageData, setLocalStorageData: setLocalStorageData })));
    })));
};
export default TopConsumersGridRow;
//# sourceMappingURL=TopConsumersGridRow.js.map