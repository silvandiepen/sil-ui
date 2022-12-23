#!/bin/bash
node node_modules/icon-components/dist/cli.js \
    --src icons  \
    --dest src/icons  \
    --template icons/template/component.ts.template  \
    --in-root false  \
    --removeTags svg style  \
    --removeAttrs fill style \
    --listTemplate icons/template/list.ts.template