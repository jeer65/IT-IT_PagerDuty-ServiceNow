# PagerDuty App

This project is built using [Ionic Framework](https://ionicframework.com/) and [Angular](https://angular.io/). It’s designed to run as a hybrid mobile app or in the browser (PWA or development server).

## 🛠️ Technologies Used

- **Ionic** - Mobile UI Toolkit
- **Angular** - Frontend Framework
- **Capacitor** - Native Runtime
- **TypeScript** - Language
- **Node.js / npm** - Package Management

## 📁 Project Structure
```
src/
├── app/ # Main Angular app components and routing
├── assets/ # Static assets
├── environments/ # Environment variables
├── theme/ # App styling
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **Ionic CLI**: Install globally via npm  
  ```bash
  npm install -g @ionic/cli
### Install Dependencies
Clone the repository and run:
```
npm install
```

### Run the App (Browser)
Start a local development server:
```javascript
ionic serve
```
### Run on Android/iOS
Make sure to install the platform you need:
# Add Android or iOS platform
```
ionic cap add android
ionic cap add ios
```

### Then:
# Build the app
```javascript
ionic build
```

# Sync with native platform
```javascript
ionic cap sync
```

# Open in Android Studio or Xcode
```javascript
ionic cap open android
ionic cap open ios
```

### Build for Production
To create a production build:
```
ionic build --prod
```

### Then sync with Capacitor:
```
ionic cap sync
```

## Environment Variables
Environment files are located in:
src/environments/environment.ts
src/environments/environment.prod.ts

