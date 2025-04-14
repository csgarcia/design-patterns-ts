/**🔐 Why Singleton Works Well Here:
Only one shared token cache in memory.
Easy to reuse without passing it around.
Prevents unnecessary token requests.

Another example of Singleton usage:
Badatabase connection management. like mongoose sqlite
Prevents multiple DB connections (which can crash your DB).
Provides a global, centralized instance.
Ensures only one object is created (lazily or eagerly).
*/

import { TokenCache } from './TokenCache'; // Adjust the import path as necessary

async function fetchAuthToken(): Promise<string> {
  const cache = TokenCache.getInstance();

  if (cache.isTokenValid()) {
    return cache.getToken()!;
  }

  // Simulated fetch from auth server
  let response = {
    data: {
      access_token: "new_access_token",
      expires_in: 3600, // 1 hour
    }
  }

  const newToken = response.data.access_token;
  const expiresIn = response.data.expires_in;

  cache.setToken(newToken, expiresIn);
  return newToken;
}

async function main() {
  const token1 = await fetchAuthToken();
  console.log("Fetched Token:", token1);

  // Simulate waiting for a while
  setTimeout(async () => {
    const token2 = await fetchAuthToken();
    console.log("Fetched Token Again:", token2);
  }, 2000);
}
main();
// Output:
// Fetched Token: new_access_token
// Fetched Token Again: new_access_token