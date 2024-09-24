import { DATA_LIST_PREFIX } from './constants';
export var createInputId = function (columnId) { return "".concat(DATA_LIST_PREFIX).concat(columnId); };
export var getColumnId = function (inputId) { return inputId.replace(DATA_LIST_PREFIX, ''); };
//# sourceMappingURL=utils.js.map