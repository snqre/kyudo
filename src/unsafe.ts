/// An unknown value should be wrapped because TypeScript will
/// categorize all values as unknown if only one value in a union
/// is unknown.

export type Unsafe = {
    unwrap(): unknown;
};

export function Unsafe(item: unknown): Unsafe {
    /***/ {
        /***/ {
            return ({unwrap});
        }

        function unwrap(): unknown {
            return (item);
        }
    }
}