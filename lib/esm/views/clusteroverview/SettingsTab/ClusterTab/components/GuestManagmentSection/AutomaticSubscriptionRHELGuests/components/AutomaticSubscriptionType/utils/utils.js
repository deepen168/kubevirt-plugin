import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var AutomaticSubscriptionTypeEnum;
(function (AutomaticSubscriptionTypeEnum) {
    AutomaticSubscriptionTypeEnum["ENABLE_PREDICTIVE_ANALYTICS"] = "predictiveAnalytics";
    AutomaticSubscriptionTypeEnum["MONITOR_AND_MANAGE_SUBSCRIPTIONS"] = "monitorAndManageSubscriptions";
    AutomaticSubscriptionTypeEnum["NO_SUBSCRIPTION"] = "noSubscription";
})(AutomaticSubscriptionTypeEnum || (AutomaticSubscriptionTypeEnum = {}));
export var selectItems = [
    {
        title: t('No subscription'),
        value: AutomaticSubscriptionTypeEnum.NO_SUBSCRIPTION,
    },
    {
        title: t('Monitor and manage subscriptions'),
        value: AutomaticSubscriptionTypeEnum.MONITOR_AND_MANAGE_SUBSCRIPTIONS,
    },
    {
        title: t('Enable predictive analytics'),
        value: AutomaticSubscriptionTypeEnum.ENABLE_PREDICTIVE_ANALYTICS,
    },
];
export var getSubscriptionItem = function (value) {
    return selectItems.find(function (item) { return item.value === value; });
};
//# sourceMappingURL=utils.js.map