# PWA workshop app

This is a simple react app that we want to turn into a PWA app. 

# Steps to take:  

1. Install lighthouse extension on your browser and open it while your app is running.
2. Check the "Progressive Web App" check box in lighthouse and click on "Analyze page load" and wait for the result.
3. You will probably get 3 main errors that you need to fix: 
    - No manifest file
    - No Registered service worker
    - No Icons
4. Solve the issues using the following hints. Run the lighthouse again to make sure all problems are solved!
5. You have to **build** and run the app to be able to use the service worker.
6. If you have successfully installed your app on your laptop then you are done!

# Manifest

There is an empty manifest file in public folder, you need to add at least the following items to it:

  - "short_name"
  - "name"
  - "start_url"
  - "display"
  - "theme_color"
  - "background_color"
  - "scope"


# Icons

- You can create your maskable icon here: https://maskable.app/editor
- You can generate all different sizes for your icons using any image resize tool: https://imageresizer.com/
- Add the icons to Manifest file.

**Note**: There is already some icons available in public folder if you do not want to create your own custom Icons :)

# Service worker

I have added the service worker files to the src, but you need to register it first to be able to use it, take a look at the service worker codes and register it in index.js.

# Available Scripts

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
