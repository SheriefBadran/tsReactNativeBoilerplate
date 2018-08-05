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
If you setup `Nexus_6P_API_23`, start the project by yarn `start-nexus && react-native run-android`.
Otherwise setup any other emulator and add 
`start-{emulator-name}: "cd $ANDROID_HOME/tools && ./emulator -avd {emulator-name}"` to npm scripts.

### Errors
If you got `Could not resolve all dependencies for configuration ':app:_debugApkCopy'`, then rebuild the project with `react-native upgrade` and overwrite all android files if you got the error trying to build the android app.