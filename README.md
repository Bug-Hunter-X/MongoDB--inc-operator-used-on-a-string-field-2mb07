# MongoDB $inc operator used on a string field

This repository demonstrates an uncommon error in MongoDB: attempting to use the `$inc` operator on a string field.

The `$inc` operator is designed for incrementing numeric values. Using it on a string field will result in an error.

The `bug.js` file contains the incorrect code, while `bugSolution.js` provides the corrected version.
