#!/bin/bash
find src/components/ui -type f -name "*.tsx" -exec sed -i '' 's/from "src\/lib\/utils"/from "@\/lib\/utils"/g' {} \; 