export type AssertAction = <T extends string>(condition: boolean, code: T) => asserts condition;