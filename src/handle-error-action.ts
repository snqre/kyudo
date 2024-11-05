import type {MaybeAsync} from "./";
import type {Unsafe} from "./";

export type HandleErrorAction<T> = (data: Unsafe, stack?: string) => MaybeAsync<T>;