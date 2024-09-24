export declare enum AutomaticSubscriptionTypeEnum {
    ENABLE_PREDICTIVE_ANALYTICS = "predictiveAnalytics",
    MONITOR_AND_MANAGE_SUBSCRIPTIONS = "monitorAndManageSubscriptions",
    NO_SUBSCRIPTION = "noSubscription"
}
export declare const selectItems: {
    title: any;
    value: AutomaticSubscriptionTypeEnum;
}[];
export declare const getSubscriptionItem: (value: string) => {
    title: any;
    value: AutomaticSubscriptionTypeEnum;
} | undefined;
