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
import produce from 'immer';
import { migrationPolicySpecKeys } from 'src/views/migrationpolicies/utils/constants';
import { bytesFromQuantity } from '@catalog/utils/quantity';
import { DESCRIPTION_ANNOTATION } from '@kubevirt-utils/resources/vm';
import { getEmptyMigrationPolicy } from '../../../utils/utils';
export var fromIECUnit = function (unit) {
    var newUnit = (unit === null || unit === void 0 ? void 0 : unit.endsWith('B')) ? unit.slice(0, -1) : unit;
    return newUnit;
};
export var extractEditMigrationPolicyInitialValues = function (mp) {
    var _a, _b, _c, _d, _e;
    var initState = {
        migrationPolicyName: (_a = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _a === void 0 ? void 0 : _a.name,
    };
    if (migrationPolicySpecKeys.ALLOW_AUTO_CONVERGE in (mp === null || mp === void 0 ? void 0 : mp.spec)) {
        initState.allowAutoConverge = (_b = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _b === void 0 ? void 0 : _b.allowAutoConverge;
    }
    if (migrationPolicySpecKeys.BANDWIDTH_PER_MIGRATION in (mp === null || mp === void 0 ? void 0 : mp.spec)) {
        var _f = bytesFromQuantity((_c = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _c === void 0 ? void 0 : _c.bandwidthPerMigration), value = _f[0], unit = _f[1];
        initState.bandwidthPerMigration = { unit: fromIECUnit(unit), value: value };
    }
    if (migrationPolicySpecKeys.COMPLETION_TIMEOUT_PER_GIB in (mp === null || mp === void 0 ? void 0 : mp.spec)) {
        initState.completionTimeoutPerGiB = (_d = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _d === void 0 ? void 0 : _d.completionTimeoutPerGiB;
    }
    if (migrationPolicySpecKeys.ALLOW_POST_COPY in (mp === null || mp === void 0 ? void 0 : mp.spec)) {
        initState.allowPostCopy = (_e = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _e === void 0 ? void 0 : _e.allowPostCopy;
    }
    return initState;
};
export var produceUpdatedMigrationPolicy = function (mp, state) {
    var _a;
    return produce(((_a = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _a === void 0 ? void 0 : _a.name) !== (state === null || state === void 0 ? void 0 : state.migrationPolicyName) ? getEmptyMigrationPolicy() : mp, function (mpDraft) {
        var _a, _b, _c, _d;
        var _e = state || {}, allowAutoConverge = _e.allowAutoConverge, allowPostCopy = _e.allowPostCopy, bandwidthPerMigration = _e.bandwidthPerMigration, completionTimeoutPerGiB = _e.completionTimeoutPerGiB, migrationPolicyName = _e.migrationPolicyName;
        mpDraft.metadata.name = migrationPolicyName;
        mpDraft.spec.allowAutoConverge = allowAutoConverge;
        mpDraft.spec.allowPostCopy = allowPostCopy;
        mpDraft.spec.completionTimeoutPerGiB = completionTimeoutPerGiB;
        mpDraft.spec.bandwidthPerMigration =
            (bandwidthPerMigration === null || bandwidthPerMigration === void 0 ? void 0 : bandwidthPerMigration.unit) &&
                "".concat(bandwidthPerMigration === null || bandwidthPerMigration === void 0 ? void 0 : bandwidthPerMigration.value).concat(bandwidthPerMigration === null || bandwidthPerMigration === void 0 ? void 0 : bandwidthPerMigration.unit);
        if (((_a = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _a === void 0 ? void 0 : _a.name) !== (state === null || state === void 0 ? void 0 : state.migrationPolicyName)) {
            mpDraft.metadata.annotations[DESCRIPTION_ANNOTATION] =
                (_c = (_b = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _b === void 0 ? void 0 : _b.annotations) === null || _c === void 0 ? void 0 : _c[DESCRIPTION_ANNOTATION];
            mpDraft.spec.selectors = __assign({}, (_d = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _d === void 0 ? void 0 : _d.selectors);
        }
    });
};
//# sourceMappingURL=utils.js.map