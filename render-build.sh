#!/usr/bin/env bash
# Install backend dependencies
npm install
# Build the React frontend
npm run build
# Change directory to the React app and install dependencies
cd client && npm install && npm run build
# Return to the root directory
cd ..
