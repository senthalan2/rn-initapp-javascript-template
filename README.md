# rn-initapp-javascript-template
This Template includes SplashScreen, Custom Statusbar, Custom Header, Custom Text Box, Custom Font Family,  Redux, Axios, Reanimated for Animations, SVG Setup, Intro Screens Setup, Stack navigations, Tab and Custom Drawer Navigations Setup. Typescript is installed in this template ( optional ).

## In-Built Packages

#### 1.  [react-native-bootsplash](https://www.npmjs.com/package/react-native-bootsplash)
#### 2.  [react-native-svg](https://www.npmjs.com/package/react-native-svg)
#### 3.  [react-native-svg-transformer](https://www.npmjs.com/package/react-native-svg-transformer)
#### 4.  [react-redux](https://www.npmjs.com/package/react-redux)
#### 5.  [redux](https://www.npmjs.com/package/redux)
#### 6.  [axios](https://axios-http.com/)
#### 7.  [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
#### 8.  [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/)
#### 9.  [@react-navigation/native](https://reactnavigation.org/)
#### 10.  [react-native-screens](https://www.npmjs.com/package/react-native-screens)
#### 11. [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)
#### 12. [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/)
#### 13. [@react-navigation/drawer](https://reactnavigation.org/docs/drawer-based-navigation/)
#### 14. [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)

## Installation

### From NPM
    npx react-native init ProjectName --template rn-initapp-javascript-template

### From Github
    npx react-native init ProjectName --template https://github.com/senthalan2/rn-initapp-javascript-template.git

## Steps after Project Initialization
  ### 1. Set SplashScreen Image
  
  Run Following ```react-native-bootsplash``` Command to generate Splash Image.
    
       npx react-native generate-bootsplash <logoPath> --logo-width=<width> --background-color=<BackgroundColor>
  
  (e.g) ```npx react-native generate-bootsplash Src/Assets/splash_image.png --logo-width=150 --background-color=FFFFFF```
  
  note:```background color is optional. Default Background Color is #FFFFFF. We can also run the above command without background-color```.
  
  Refer [react-native-bootsplash](https://www.npmjs.com/package/react-native-bootsplash)
  
  #### Android
  
  In Android, Bootsplash Command generated the all assets required for splashscreen, and this template have bootsplash setup for android. So, No           additional steps needed for Android.
  
  #### IOS
  
  In IOS, needed some additional steps,
  
  1. Bootsplash command generated three different sizes (@1x, @2x, @3x) of the Splash Image ( shown in below image ).
 
  ![Screenshot 1](https://user-images.githubusercontent.com/43330632/160339614-f1b148d7-601d-490e-a778-b92b7fb46f06.png)

  2. Now Open XCode, Under your Project, select ```LaunchScreen``` and select ```BootSplashLogo``` ( Splash Image ). In the right panel choose                ```Attributes Inspector -> View -> Content Mode -> Aspect Fit```. ( Refer Below Image )
  
  ![Screenshot 2](https://user-images.githubusercontent.com/43330632/160341018-b1071616-8380-4cfb-863f-705e392e0db8.png)

  3. Go to ```Size Inspector``` and choose a width and a height that looks good (this will scale to other screen sizes).
  
  4. Drag your image into the center of the screen until you see both a horizontal and vertical blue line.
  
  5. After that, under ```Autoresizing``` change the window with the arrows, make sure, it looks like in the below Image. All outer arrows should be deselected   and all inner arrows selected. ( Refer Below Image for Step 3, Step 4 and Step 5 ).

  ![Screenshot 2.1](https://user-images.githubusercontent.com/43330632/160342037-b1dba55f-3064-4e72-8427-6511f46b165b.png)
 
  2. To change Background Color, select ```LaunchScreen``` select ```View``` under ```View``` and choose background Color ( shown in below image).

  ![Screenshot 2](https://user-images.githubusercontent.com/43330632/160225900-4c93c7f1-a96b-499c-893b-315569d6c25c.png)
  
  note: ```Edit the LaunchScreen as per your need. After edited the LaunchScreen, make sure that the above steps are solved```.
  
  ### 2. Set Custom Fonts
  
  Drop the custom font family files (.ttf) into the ```assets/fonts``` directory under your project root directory ( shown in below image ).
  
  ![Screenshot 3](https://user-images.githubusercontent.com/43330632/160223350-21284c7a-adfb-4411-9f85-da93c7833693.png)
  
  After the above step, run the below command to link the assets with android and ios.
  
    npx react-native link
  
  Custom Fonts Setup Completed. Run your project.
  
  #### Usage of Custom Font Families
  
  Add the Font family name in ```Src/Utilities/GlobalFonts.js``` ( Refer below image ).
  
  ![Screenshot 4](https://user-images.githubusercontent.com/43330632/160224862-a9bb483c-e956-4387-b0cd-c25ab8f58a0a.png)

  Import and Use the fonts wherever you want. ( Refer below image ).
  
  ![Screenshot 5](https://user-images.githubusercontent.com/43330632/160224962-3ac80311-acf7-4917-a752-56faf3776a4e.png)


  





