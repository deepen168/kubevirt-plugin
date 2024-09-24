export var splitPendingChanges = function (pendingChanges) {
    return pendingChanges.reduce(function (acc, pendingChange) {
        if (!pendingChange.hasPendingChange)
            return acc;
        if (pendingChange.appliedOnLiveMigration) {
            acc.liveMigrationChanges.push(pendingChange);
            return acc;
        }
        acc.restartChanges.push(pendingChange);
        return acc;
    }, { liveMigrationChanges: [], restartChanges: [] });
};
//# sourceMappingURL=utils.js.map