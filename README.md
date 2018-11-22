# tsReactNativeBoilerplate

## Advise on how to use this boilerplate repo

### Copy the project into a new project folder
1. git clone this repo and cd into the project. Then run:
`git checkout-index -f -a --prefix=/{the-path-from-the-root-to-desired-folder}/{project-name}/`   
It is important to `not forget the / at the end`.
This will create the project-name folder and copy all the files there, except the .git items.

2. cd into the destination folder `project-name` and run `git init`, then run
`git add .` and `git commit -m "initial commit"`

3. Change the name attribute in `package.json`

4. Then `yarn` or `npm install`

### Rename the project

1. run `react-native upgrade` and just let react overwrite the android/ios files.

2. Delete all the directories with the old app name in `./android/app/src/main/java/com`

3. Delete all the directories with the old app name in `./ios`

4. In index.js, change the app-name passed in as a first parameter to `AppRegistry.registerComponent` function.

Alternative method: If the android and ios directories are deleted before step 5 (running `react-native upgrade`), step 6 and 7 are not needed.

## Start ios app
run `react-native run-ios` or `yarn run-ios`

## Start Android app
First setup which emulator you with to use with Android studio. This project assumes `Nexus_6P_API_23` is setup.
If you setup `Nexus_6P_API_23`, start the project by running `yarn start-nexus & yarn run-android`.
Otherwise setup any other emulator and add 
`start-{emulator-name}: "cd $ANDROID_HOME/tools && ./emulator -avd {emulator-name}"` to npm scripts.

## Errors
If you got `Could not resolve all dependencies for configuration ':app:_debugApkCopy'`, then rebuild the project with `react-native upgrade` and overwrite all android files if you got the error trying to build the android app. Then run `react-native link` to again link libraries that for example contain native code.

If you got `Unable to connect with remote debugger` error when running `react-native run-android`. Try the following:
1. Press `Cmd + M`
2. Go to `Dev settings > Debug server host & port for device`
3. Set to `localhost:8081`
4. Rerun the android app: `react-native run-android`

Debugger is connected

When creating a new android emulator and starting an app on it, and get the following error:

`Android - java.lang.SecurityException: Permission Denial: starting Intent`
Then go to the AndroidManifest.xml file and add/set `android:exported="true"`

```xml
      <activity android:name=".MainActivity"
        android:exported="true"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
        android:windowSoftInputMode="adjustResize"
      />
```

## Adding new fonts for Android
1. Add all the font files needed to `/src/assets/fonts` in the react-native root folder.

2. If not already done, tell react-native where the custom fonts are located. This is done by adding rnpm to package.json providing the path to the font files.

```javascript
	"rnpm": {
    "assets": [
			"./src/assets/fonts/"
    ]
	},
```

3. Tell react-native to link the font files
run `react-native link`

4. Look in the file path `android/app/src/main/assets/fonts/` to make sure the fonts have been copied over.

5. Rename the files according to android convention. Examples:   
`OpenSans-Regular.tff` -> `Open Sans.tff`  
`OpenSans-Bold.tff` -> `Open Sans_bold.tff`  
`

Rename TittiliumWeb-Black.ttf into Tittilium Web_black.ttf  
Rename TittiliumWeb-Bold.ttf into Tittilium Web_bold.ttf  
Rename TittiliumWeb-BoldItalic.ttf into Tittilium Web_bold_italic.ttf  
Rename TittiliumWeb-ExtraLightItalic.ttf into Tittilium   Web_extra_light_italic.ttf  
Rename TittiliumWeb-Italic.ttf into Tittilium Web_italic.ttf  
Rename TittiliumWeb-Light.ttf into Tittilium Web_light.ttf  
Rename TittiliumWeb-LightItalic.ttf into Tittilium Web_light_italic.ttf  
Rename TittiliumWeb-Regular.ttf into Tittilium Web.ttf  
Rename TittiliumWeb-SemiBold.ttf into Tittilium Web_semi_bold.ttf  
Rename TittiliumWeb-SemiBoldItalic.ttf into Tittilium Web_semi_bold_italic.ttf 
`

## Adding new fonts for iOS
1. Add all the font files needed to `/src/assets/fonts` in the react-native root folder.

2. If not already done, tell react-native where the custom fonts are located. This is done by adding rnpm to package.json providing the path to the font files.

```javascript
	"rnpm": {
    "assets": [
			"./src/assets/fonts/"
    ]
	},
```

3. Tell react-native to link the font files
run `react-native link`

4. Make sure to find the font references in Info.plist, open the file from in iOS folder and look for the UIAppFonts key.

## Setup Debugging
React Native Debugger most importantly enables debugging in console, React DevTools Integration, Redux DevTools integration and Network inspect of Chrome Developer Tools.

1. Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger).
2. Open the developer meny by shaking your device or by selecting "Shake Gesture" inside the Hardware menu in the iOS Simulator. You can also use the ⌘D keyboard shortcut when your app is running in the iOS Simulator, or ⌘M when running in an Anroid emulator on Mac OS AND CTRL+M on Windows and Linux.
3. Press Start Remote JS Debugging.
4. Start React Native Debugger or go to http://localhost:8081/debugger-ui/ in your browser.

### Debugging performance on Android with systrace

1. First run systrace as follows (set the length of time the trace will be collected in seconds as you like)`$ANDROID_HOME/platform-tools/systrace/systrace.py --time=4 -o trace-html sched gfx view -a tsReactNativeBoilerplate`
2. At the end of the trace, systrace will give you a link to the trace which you can open in your browser
3. Open a tab in chrome and go to `chrome://tracing`
4. Click load in the upper left corner and choose the file systrace pointed at
5. Click the `View Options` button and enable `Highlight VSync`, this way the 16ms frame boundaries will be highlighted

For more detailed documentation, read further at Install [React Native Performance docs](https://facebook.github.io/react-native/docs/performance)


