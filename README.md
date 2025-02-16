# Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled asynchronous errors.  Asynchronous operations, such as database queries or external API calls, can throw errors that are not properly handled, leading to unexpected behavior.  The `bug.js` file showcases this issue, while `bugSolution.js` provides a solution.

## Problem

The `bug.js` file includes an Express.js server with an asynchronous operation that might throw an error.  However, the error handling is incomplete, potentially resulting in a silent failure or a crash depending on the nature of the error. This can make debugging more difficult.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle asynchronous errors in Express.js. By using a `try...catch` block or `.catch()` method, the application gracefully handles errors, preventing unexpected behavior and providing better error reporting.