// hooks/useIsClient.ts
import { useEffect, useState } from 'react';

/**
 * A custom hook to safely determine if the code is running on the client.
 * It returns `false` on the server and `true` on the client after the component has mounted.
 * This is useful for preventing hydration errors.
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}