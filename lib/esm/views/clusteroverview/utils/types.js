export var InstallModeType;
(function (InstallModeType) {
    InstallModeType["InstallModeTypeAllNamespaces"] = "AllNamespaces";
    InstallModeType["InstallModeTypeMultiNamespace"] = "MultiNamespace";
    InstallModeType["InstallModeTypeOwnNamespace"] = "OwnNamespace";
    InstallModeType["InstallModeTypeSingleNamespace"] = "SingleNamespace";
})(InstallModeType || (InstallModeType = {}));
export var ClusterServiceVersionPhase;
(function (ClusterServiceVersionPhase) {
    ClusterServiceVersionPhase["CSVPhaseDeleting"] = "Deleting";
    ClusterServiceVersionPhase["CSVPhaseFailed"] = "Failed";
    ClusterServiceVersionPhase["CSVPhaseInstalling"] = "Installing";
    ClusterServiceVersionPhase["CSVPhaseInstallReady"] = "InstallReady";
    ClusterServiceVersionPhase["CSVPhaseNone"] = "";
    ClusterServiceVersionPhase["CSVPhasePending"] = "Pending";
    ClusterServiceVersionPhase["CSVPhaseReplacing"] = "Replacing";
    ClusterServiceVersionPhase["CSVPhaseSucceeded"] = "Succeeded";
    ClusterServiceVersionPhase["CSVPhaseUnknown"] = "Unknown";
})(ClusterServiceVersionPhase || (ClusterServiceVersionPhase = {}));
export var CSVConditionReason;
(function (CSVConditionReason) {
    CSVConditionReason["CSVReasonBeingReplaced"] = "BeingReplaced";
    CSVConditionReason["CSVReasonComponentFailed"] = "InstallComponentFailed";
    CSVConditionReason["CSVReasonComponentUnhealthy"] = "ComponentUnhealthy";
    CSVConditionReason["CSVReasonCopied"] = "Copied";
    CSVConditionReason["CSVReasonInstallCheckFailed"] = "InstallCheckFailed";
    CSVConditionReason["CSVReasonInstallSuccessful"] = "InstallSucceeded";
    CSVConditionReason["CSVReasonInvalidStrategy"] = "InvalidInstallStrategy";
    CSVConditionReason["CSVReasonOwnerConflict"] = "OwnerConflict";
    CSVConditionReason["CSVReasonReplaced"] = "Replaced";
    CSVConditionReason["CSVReasonRequirementsMet"] = "AllRequirementsMet";
    CSVConditionReason["CSVReasonRequirementsNotMet"] = "RequirementsNotMet";
    CSVConditionReason["CSVReasonRequirementsUnknown"] = "RequirementsUnknown";
    CSVConditionReason["CSVReasonWaiting"] = "InstallWaiting";
})(CSVConditionReason || (CSVConditionReason = {}));
export var InstallPlanApproval;
(function (InstallPlanApproval) {
    InstallPlanApproval["Automatic"] = "Automatic";
    InstallPlanApproval["Manual"] = "Manual";
})(InstallPlanApproval || (InstallPlanApproval = {}));
export var K8sResourceConditionStatus;
(function (K8sResourceConditionStatus) {
    K8sResourceConditionStatus["False"] = "False";
    K8sResourceConditionStatus["True"] = "True";
    K8sResourceConditionStatus["Unknown"] = "Unknown";
})(K8sResourceConditionStatus || (K8sResourceConditionStatus = {}));
export var SubscriptionState;
(function (SubscriptionState) {
    SubscriptionState["SubscriptionStateAtLatest"] = "AtLatestKnown";
    SubscriptionState["SubscriptionStateFailed"] = "UpgradeFailed";
    SubscriptionState["SubscriptionStateNone"] = "";
    SubscriptionState["SubscriptionStateUpgradeAvailable"] = "UpgradeAvailable";
    SubscriptionState["SubscriptionStateUpgradePending"] = "UpgradePending";
})(SubscriptionState || (SubscriptionState = {}));
//# sourceMappingURL=types.js.map