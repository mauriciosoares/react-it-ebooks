## Bug

When you run gulp, if a `segmentation fault 11` appears, that's because of the node-sass inside gulp-sass.

Enter in the gulp-sass folder in `node_modules`, manually convert the version of node-sass to `3.2.0` and run `npm install`.

That solves the bug.
