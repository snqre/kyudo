# Kyudo: A TypeScript Utility Library
Kyudo (弓道), meaning "the way of the bow," embodies precision and discipline. This library applies these principles to TypeScript's error handling and programming style, ensuring that all assumptions in your code are rigorously verified through built-in checks.

Unlike languages like C or Java, these checks should be left in the program to ensure that all assumptions are always correct during the lifetime of the program.

The Kyudo convention emphasizes placing assertions to verify parameters within a defined scope, ensuring they align with any assumptions made. This approach promotes negative space programming, where we recognize and address the assumptions that often arise while developing. It aims to capture the best of both worlds: safety and flexibility.

TypeScript's error handling can be challenging, so Kyudo includes a match function that maps error messages to specific code segments. By convention, assertions should always include a code in SCREAMING_SNAKE_CASE. Additionally, every module or project should define a type that specifies the errors it can throw, facilitating easier debugging.

Unfortunately, it’s common practice to neglect documenting errors in projects, leading to hard-to-debug code. When functions can throw errors that aren't well-defined, it becomes tedious to handle them effectively. In the absence of a robust error handling system like Rust's, Kyudo aims to bridge this gap.

Kyudo comes with a suite of tools designed to enhance the TypeScript development experience.

NOTE: This is a personal library built for personal use.