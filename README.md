# PWA workshop app

This is a simple react project that we want to turn into a PWA app. 

Steps to take: 
1- Install lighthouse extension on your browser and open it while your app is running.
2- Check the "Progressive Web App" check box in lighthouse and click on "Analyze page load" and wait for the result.
3- You will probably get 3 errors that you need to fix: 
    - update your manifest file
    - register a service worker
    - provide a maskable Icon: You can create your maskable icon here: https://maskable.app/editor


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
