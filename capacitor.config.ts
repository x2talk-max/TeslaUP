import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Point the iOS WebView at the real site only when CAPACITOR_SERVER_URL is set
 * at sync time, for example:
 *   CAPACITOR_SERVER_URL="https://..." npm run ios:sync
 * Do not commit a localhost or empty server URL.
 */
const serverUrl = process.env.CAPACITOR_SERVER_URL?.trim();

const config: CapacitorConfig = {
  appId: 'com.teslaup.app',
  appName: 'TeslaUP',
  webDir: 'www',
};

if (serverUrl) {
  config.server = {
    url: serverUrl,
    cleartext: serverUrl.startsWith('http://'),
    // Exact hosts only. Capacitor matches component-for-component, so these
    // keep teslaup.shop and the live page host inside the WebView.
    allowNavigation: ['teslauptest.grok.me', 'teslaup.shop'],
  };
}

export default config;
