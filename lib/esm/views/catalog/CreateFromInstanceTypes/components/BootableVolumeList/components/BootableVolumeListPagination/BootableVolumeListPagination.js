import React from 'react';
import { Pagination } from '@patternfly/react-core';
import { paginationDefaultValuesForm, paginationDefaultValuesModal } from '../../utils/constants';
var BootableVolumeListPagination = function (_a) {
    var data = _a.data, displayShowAllButton = _a.displayShowAllButton, pagination = _a.pagination, setPagination = _a.setPagination;
    var onPageChange = function (_a) {
        var endIndex = _a.endIndex, page = _a.page, perPage = _a.perPage, startIndex = _a.startIndex;
        setPagination(function () { return ({
            endIndex: endIndex,
            page: page,
            perPage: perPage,
            startIndex: startIndex,
        }); });
    };
    return (React.createElement(Pagination, { onPerPageSelect: function (_e, perPage, page, startIndex, endIndex) {
            return onPageChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
        }, onSetPage: function (_e, page, perPage, startIndex, endIndex) {
            return onPageChange({ endIndex: endIndex, page: page, perPage: perPage, startIndex: startIndex });
        }, perPageOptions: displayShowAllButton ? paginationDefaultValuesForm : paginationDefaultValuesModal, isCompact: displayShowAllButton, isLastFullPageShown: true, itemCount: data === null || data === void 0 ? void 0 : data.length, page: pagination === null || pagination === void 0 ? void 0 : pagination.page, perPage: pagination === null || pagination === void 0 ? void 0 : pagination.perPage }));
};
export default BootableVolumeListPagination;
//# sourceMappingURL=BootableVolumeListPagination.js.map