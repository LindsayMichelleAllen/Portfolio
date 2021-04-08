### Set Up Development Environment

Issue `npm start`  

Open browser and nagivate to `localhost:<port>` (port displayed in console)


## Important
Until the frontend build step is incorporated into CI, the developer will need to manually run  
a build to update the static link provided to the server on production. If updates still are  
not being rendered, make sure your `.gitignore` is not set to ignore `/build`.  
To run build, issue: `npm run build` in the root of the react project (not repo root).