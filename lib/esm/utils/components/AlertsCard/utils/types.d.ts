export declare enum AlertType {
    critical = "critical",
    info = "info",
    warning = "warning"
}
export declare type SimplifiedAlert = {
    alertName: string;
    description: string;
    isVMAlert: boolean;
    key: string;
    link: string;
    time: string;
};
export declare type SimplifiedAlerts = {
    [key in AlertType]: SimplifiedAlert[];
};
