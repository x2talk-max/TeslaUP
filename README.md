# TeslaUP

Minimal Capacitor iOS shell for the TeslaUP website. This is not a native rewrite and not the website itself.

The iOS app loads bundled placeholder files unless you sync a remote URL into the native project. Without that URL the WebView has nothing to show and you get a black screen.

Sync the real site before opening or archiving in Xcode:

```sh
CAPACITOR_SERVER_URL="https://..." npm run ios:sync
```

`npm run ios:sync` runs `cap sync ios`. `capacitor.config.ts` sets `server.url` from `CAPACITOR_SERVER_URL` only when that variable is set. Do not commit a localhost or empty server URL.

- App name: TeslaUP
- Bundle id: `com.teslaup.app`

This machine still needs Xcode, a real Apple Developer team, Node.js, and CocoaPods (if you use the CocoaPods workspace) before the app can be built or signed. No public site URL is configured in the repo.

CocoaPods is not vendored. `ios/App/App.xcworkspace` is only the template folder (no `contents.xcworkspacedata`, no `Pods/`) until `pod install` is run on a machine that has CocoaPods. Open the project after that, or after `npm run ios:sync` with CocoaPods installed.
