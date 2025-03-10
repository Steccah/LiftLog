import { Stack } from 'expo-router';

// Import your global CSS file
import '../global.css';
import { StrictMode } from 'react';
import { BaseThemesetProvider } from '@/hooks/useBaseThemeset';

export default function RootLayout() {
  return (
    <StrictMode>
      <BaseThemesetProvider>
        <Stack />
      </BaseThemesetProvider>
    </StrictMode>
  );
}
