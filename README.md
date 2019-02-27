# Reservations Demo App

### A demo application using the following frameworks / technologies:
* React Native
* GraphQL
* Apollo
* Jest / Enzyme
* Flow
* i18n for mutliple language support

Apollo components were used for the few queries / mutations for this demonstration.  This seems to be the way Apollo is pushing integration in React with Apollo; however, I'm not sure I agree as the integration of multiple queries / mutations when dealing with local state in Apollo can get a little messy.

### Project structure:
* /config - All files relating to configuration of Apollo and the end points associated with it
* /src - All source files
* /src/screens - Screens associated with navigation
* /src/components - All of the components for the application
* /src/helpers - Helper functions and classes not related to a component
* /src/styles - All styles related to components and screens in separate sub-folders for screens and components
* /src/data - All queries and mutations plus any constants are stored here in proper sub-folders
* /src/translations - Translation files for separate language (only includes EN in this demo)
* /src/types - Types used by Flow
* /\_\_tests\_\_ - Tests for each component / screen
* /\_\_mocks\_\_ - Mocks for third party libraries
* /fixtures - Data to be used for tests

### Notes
I didn't focus heavily on making the screens look amazing other than a clean look and feel.  I also left the default splash screen in while this would normally be changed as well as the app icon for the home screen of the device.
