export declare enum HARDWARE_DEVICE_TYPE {
    GPUS = "gpus",
    HOST_DEVICES = "hostDevices"
}
export declare type HardwareDeviceModalRow = {
    deviceIndex: number;
    deviceName: string;
    name: string;
};
export declare type HardwareDevicePageRow = {
    resourceName: string;
    selector: string;
};
