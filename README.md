# Handiwork

Expo mobile app for Handiwork (QuikWrk): people find nearby artisans, request work, chat, and leave reviews. This repository is the client. The API is [handiworkbackend](https://github.com/Oreoluwaibk/handiworkbackend), the marketing site is [quikwrk-website](https://github.com/Oreoluwaibk/quikwrk-website), and the admin desk is [quikwrkadmin](https://github.com/Oreoluwaibk/quikwrkadmin).

## Stack

Expo, Expo Router, React Native, Redux Toolkit, and Axios. The app calls the API modules in `api/` (`user`, `vendor`, `category`).

## Screens

File-based routes under `app/`:

- Auth: get started, register, login, forgot password, reset password
- Home tabs: services, nearby vendors, chat, calls, notifications, profile
- History, support, and reviews

## Run locally

```bash
npm install
npx expo start
```

From there, open the project in Expo Go, an Android emulator, or an iOS simulator. `npm run android`, `npm run ios`, and `npm run web` target those platforms directly.

Point the API client at a running [handiworkbackend](https://github.com/Oreoluwaibk/handiworkbackend) before signing in.
