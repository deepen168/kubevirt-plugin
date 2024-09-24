import { PARAMETER_VALUE_TYPES } from './constants';
export var getValueTypeFromParameter = function (parameter) {
    if (parameter.generate !== undefined)
        return PARAMETER_VALUE_TYPES.GENERATED;
    if (parameter.value !== undefined)
        return PARAMETER_VALUE_TYPES.VALUE;
    return PARAMETER_VALUE_TYPES.NONE;
};
//# sourceMappingURL=utils.js.map