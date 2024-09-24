export declare abstract class ObjectEnum<T> {
    static getAll: () => readonly never[];
    protected static getAllClassEnumProperties: <A extends ObjectEnum<any>>(Clazz: any) => A[];
    getValue: () => T;
    protected readonly value: T;
    protected constructor(value: T);
    toString(): any;
}
export declare const cloneDeepWithEnum: (object: any) => any;
