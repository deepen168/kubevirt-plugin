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
import { generatePrettyName, isEmpty } from '@kubevirt-utils/utils/utils';
import { getEmptyMigrationPolicy } from '../../../../utils/utils';
export var initialMigrationPolicyState = {
    migrationPolicyName: generatePrettyName('policy'),
    namespaceSelectorMatchLabel: {},
    vmiSelectorMatchLabel: {},
};
export var produceMigrationPolicy = function (state) {
    return produce(getEmptyMigrationPolicy(), function (mpDraft) {
        var _a = state || {}, allowAutoConverge = _a.allowAutoConverge, allowPostCopy = _a.allowPostCopy, bandwidthPerMigration = _a.bandwidthPerMigration, completionTimeoutPerGiB = _a.completionTimeoutPerGiB, description = _a.description, migrationPolicyName = _a.migrationPolicyName, namespaceSelectorMatchLabel = _a.namespaceSelectorMatchLabel, vmiSelectorMatchLabel = _a.vmiSelectorMatchLabel;
        mpDraft.metadata.name = migrationPolicyName;
        mpDraft.metadata.annotations['description'] = description ? description : null;
        mpDraft.spec.allowAutoConverge = allowAutoConverge;
        mpDraft.spec.allowPostCopy = allowPostCopy;
        mpDraft.spec.completionTimeoutPerGiB = completionTimeoutPerGiB;
        mpDraft.spec.bandwidthPerMigration =
            (bandwidthPerMigration === null || bandwidthPerMigration === void 0 ? void 0 : bandwidthPerMigration.unit) &&
                "".concat(bandwidthPerMigration === null || bandwidthPerMigration === void 0 ? void 0 : bandwidthPerMigration.value).concat(bandwidthPerMigration === null || bandwidthPerMigration === void 0 ? void 0 : bandwidthPerMigration.unit);
        if (!isEmpty(vmiSelectorMatchLabel)) {
            mpDraft.spec.selectors.virtualMachineInstanceSelector = __assign({}, vmiSelectorMatchLabel);
        }
        if (!isEmpty(namespaceSelectorMatchLabel)) {
            mpDraft.spec.selectors.namespaceSelector = __assign({}, namespaceSelectorMatchLabel);
        }
    });
};
//# sourceMappingURL=utils.js.map