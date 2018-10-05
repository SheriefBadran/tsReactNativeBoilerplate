# tsReactNativeBoilerplate

## Advise on how to use this boilerplate repo
git clone this repo and cd into the project. Then run:
`git checkout-index -f -a --prefix=/{the-path-from-the-root-to-desired-folder}/{project-name}/`
It is important to `not forget the / at the end`.
This will create the project-name folder and copy all the files there, except the .git items.

cd into the destination folder `project-name` and run `git init`, then run
`git add .` and `git commit -m "initial commit"`

## Start ios app
run `react-native run-ios` or `yarn run-ios`

## Start Android app
First setup which emulator you with to use with Android studio. This project assumes `Nexus_6P_API_23` is setup.
If you setup `Nexus_6P_API_23`, start the project by running `yarn start-nexus & yarn run-android`.
Otherwise setup any other emulator and add 
`start-{emulator-name}: "cd $ANDROID_HOME/tools && ./emulator -avd {emulator-name}"` to npm scripts.

## Errors
If you got `Could not resolve all dependencies for configuration ':app:_debugApkCopy'`, then rebuild the project with `react-native upgrade` and overwrite all android files if you got the error trying to build the android app. Then run `react-native link` to again link libraries that for example contain native code.

### Adding new fonts for Android
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

### Adding new fonts for iOS
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