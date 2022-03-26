# rn-initapp-javascript-template
This Template includes SplashScreen, Custom Statusbar, Custom Header, Custom Text Box, Custom Font Family,  Redux, Axios, Reanimated for Animations, SVG Setup, Intro Screens, Login Screen, Stack navigations, Tab and Custom Drawer Navigations Setup. Typescript is installed in this template ( optional ).

## Steps after Project Initialization
  ### 1. Set SplashScreen Image
  #### Android
  
  1. Go to ```android/app/src/main/res/drawable```, put splash image (.png) in this directory and named it as ```launch_screen```.
  
  2. Change code in ```android/app/src/main/res/layout/launch_screen.xml``` file.
    
  #### IOS
  
  1. Open XCode, Under your Project, Select ```Images``` and Select ```splash_image```. Create three different sizes of your image (@1x, @2x, @3x) and           add the images by dragging them into the slots for 1x, 2x, 3x ( shown in below image ).
    
  ![Screenshot 1](https://user-images.githubusercontent.com/43330632/160120112-fff17229-bc32-44c3-889b-3fe061e39a03.png)
 
  2. To change Background Color, Select ```LaunchScreen``` Select ```View``` under ```View``` and choose background Color ( shown in below image).

  ![Screenshot 2](https://user-images.githubusercontent.com/43330632/160223118-1cae4ad5-318c-4e7c-8d70-3adff6e3f72c.png)
  
  ### 2. Set Custom Fonts
  
  Drop the custom font family files (.ttf) into the ```assets/fonts``` directory under your project root directory ( shown in below image ).
  
  ![Screenshot 3](https://user-images.githubusercontent.com/43330632/160223350-21284c7a-adfb-4411-9f85-da93c7833693.png)
  
  After the above step, run the below command to link the assets with android and ios.
  
    npm link
  
  

  





