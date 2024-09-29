#!/usr/bin/env bash

# Navigate to client directory and build the React app
cd client
npm install
npm run build

# Navigate back to the root directory to install backend dependencies
cd ..
npm install