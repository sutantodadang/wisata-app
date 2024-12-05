export function debounce(func: Function, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function (this: any, ...args: any[]) {
        // Clear the previous timeout
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}