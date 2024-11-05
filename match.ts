import type {HandleErrorAction} from "./";
import {Unsafe} from "./";

/// TypeScript does not support typed exceptions therefore it's much
/// harder to catch specific errors without having to check it
/// and parse it each time. Match can check the error message on
/// an error and handle it.

export async function match<T extends string>(e: Unsafe, code: T, handler: HandleErrorAction<void>): Promise<void> {
    if ("unwrap" in (e as any)) e = (e as any).unwrap();
    if (!(e instanceof Error)) return;
    if (e.message !== code) return;
    await handler(Unsafe(e.cause), e.stack);
    return;
}