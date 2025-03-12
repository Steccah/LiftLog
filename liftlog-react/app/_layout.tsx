import { Stack } from 'expo-router';
import { AppThemeProvider } from '@/hooks/useAppTheme';
import { DevTools, FormatSimple, Tolgee, TolgeeProvider } from '@tolgee/react';
import { Text } from 'react-native';

const tolgee = Tolgee()
  // DevTools will work only for web view
  .use(DevTools())
  .use(FormatSimple())
  // replace with .use(FormatIcu()) for rendering plurals, formatted numbers, etc.
  .init({
    language: 'en',

    // for development
    apiUrl: process.env.EXPO_PUBLIC_TOLGEE_API_URL,
    apiKey: process.env.EXPO_PUBLIC_TOLGEE_API_KEY,
  });

export default function RootLayout() {
  return (
    <TolgeeProvider tolgee={tolgee} fallback={<Text>Loading...</Text>}>
      <AppThemeProvider>
        <Stack />
      </AppThemeProvider>
    </TolgeeProvider>
  );
}
