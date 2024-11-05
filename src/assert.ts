import type {AssertAction} from "./";
import {default as assert_} from "assert";

/// Node's assert function correctly returns the area of the error but the
/// extra functionality is not required.

export const assert: AssertAction = assert_;