# RN Calendar

A project that integrates [`react-native-calendars`](https://github.com/wix/react-native-calendars) into [`react-sketchapp`](https://github.com/airbnb/react-sketchapp).

## Prerequisites

  * Node: v6.9.5
  * npm: 4.6.1
  * Sketch: 43+ (may not be needed to reproduce the error, I think the compilation happens before `skpm` looks for Sketch on your machine.)

## Steps to Reproduce the Error
    
    // install the dependencies (npm install should work as well)
    yarn install
    
    // run the app with skpm (sketch plugin manager)
    yarn run render

## Babel presets I have tried:
    {
      "presets": ["react", "stage-0", "es2015"],
      "plugins": ["transform-object-rest-spread", "transform-class-properties"]
    }

