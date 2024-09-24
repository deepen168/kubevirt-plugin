declare type UseDuration = () => {
    currentTime: number;
    duration: string;
    setDuration: (newValue: string) => void;
    timespan: number;
};
declare const useDuration: UseDuration;
export default useDuration;
