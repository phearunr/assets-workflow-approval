import { SESSION_KEY, TOKEN_KEY } from '~/constants';

export const useAuth = () => {
  const config = useRuntimeConfig();

  const cookieSession = useCookie<any>(SESSION_KEY);
  const token = useCookie(TOKEN_KEY);

  function setAuthSession(accessToken: any) {
    // cookieSession.value = {
    //   ...session,
    //   accessTokenExpiresIn: Date.now() + session.accessTokenExpiresIn * 1000,
    // };
    token.value = accessToken;
  }

  async function signIn(username: string, password: string) {
    try {
      const req: any = await $fetch(
        `${config.public.authApi}/auth/login`,
        {
          method: 'POST',
          body: { username, password },
        }
      );
      const { token } = req;
      setAuthSession(token);
    } catch (error) {
      throw new Error(`Error signing in: ${error}`);
    }
  }

  function refreshToken() {
    const { accessTokenExpiresIn, refreshToken } = cookieSession.value || {};
    if (!accessTokenExpiresIn) return;

    if (accessTokenExpiresIn > Date.now()) {
      return;
    }
    $fetch(`${config.public.authApi}/auth/me`, {
      method: 'POST',
      body: { refreshToken },
    }).then((res: any) => {
      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIj';
      setAuthSession(accessToken);
    });
    
  }

  async function signOut() {
    try {
      const { refreshToken } = cookieSession.value;
      cookieSession.value = null;
      token.value = null;
      await $fetch(`${config.public.authApi}/signout`, {
        method: 'POST',
        body: { all: true, refreshToken },
      });

      navigateTo('/signin');
    } catch (error) {
      navigateTo('/signin');
      throw new Error(`[useAuth] signOut: Error signing out: ${error}`);
    }
  }
  async function user(){
   return  {
      "id": 15,
      "username": "kminchelle",
      "email": "kminchelle@qq.com",
      "firstName": "Jeanne",
      "lastName": "Halvorson",
      "gender": "female",
      "image": "https://robohash.org/Jeanne.png?set=set4",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
    }
  }
  return {
    signIn,
    refreshToken,
    signOut,
    user
    //user: cookieSession.value?.user || null,
  };
};
