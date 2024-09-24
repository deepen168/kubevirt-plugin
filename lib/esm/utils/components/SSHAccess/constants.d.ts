export declare const PORT = 22000;
export declare const SSH_PORT = 22;
export declare const VMI_LABEL_AS_SSH_SERVICE_SELECTOR = "kubevirt.io/domain";
export declare const NODE_PORTS_LINK = "https://access.redhat.com/documentation/en-us/openshift_container_platform/4.14/html/networking/configuring-ingress-cluster-traffic#nw-using-nodeport_configuring-ingress-cluster-traffic-nodeport";
export declare enum SERVICE_TYPES {
    LOAD_BALANCER = "LoadBalancer",
    NODE_PORT = "NodePort",
    NONE = "None"
}
export declare const serviceTypeTitles: {
    LoadBalancer: any;
    NodePort: any;
    None: any;
};
