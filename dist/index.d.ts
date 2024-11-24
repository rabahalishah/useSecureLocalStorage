type SetValue<T> = T | ((val: T) => T);
declare function useSecureLocalStorage<T>(key: string, initialValue: T): [T, (value: SetValue<T>) => void];

export { useSecureLocalStorage as default };
