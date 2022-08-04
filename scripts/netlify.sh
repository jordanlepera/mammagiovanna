#!/bin/bash
set -xeuo pipefail
test "$CI" = true || exit 1
npm run build && npx pnpm install -r --store-dir=node_modules/.pnpm-store
# other build scripts