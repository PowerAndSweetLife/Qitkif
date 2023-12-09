
# QITKIF

QITKIF is an application to supply services for users who want to sell or buy something

## Introduction
QITKIF is an application to supply services for users who want to sell or buy something.
It is available in Ivory Coast and free.
## Prerequisites
Make sure you have Node.js and npm installed.
## Automatic installation

Install all packages
```bash
  npm install
```
## Manual installation
Install React Native Async Storage

```bash
  npm i @react-native-async-storage/async-storage
```

Install Navigation
```bash
  npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
```

Install Gesture handler
```bash
  npm install react-native-gesture-handler
```

Install Screen and Safe Area Context
```bash
  npm install react-native-screens react-native-safe-area-context
```
Note: react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/com/qitkif/MainActivity.kt.
Add the highlighted code to the body of MainActivity class:
```kotlin
public class MainActivity extends ReactActivity {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```
and make sure to add the following import statement at the top of this file below your package statement
```java
import android.os.Bundle;
```

Install React Native SVG
```bash
npm i react-native-svg
```
    
Install fontawesome to the project
```bash
npm i --save @fortawesome/react-native-fontawesome @fortawesome/fontawesome
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
```