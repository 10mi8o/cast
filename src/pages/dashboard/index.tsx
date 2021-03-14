import { useCallback } from 'react';

const Index = ({ loginPath }) => {
  const login = useCallback(() => {
    window.location.href = loginPath;
  }, [loginPath]);

  return <button onClick={login}>Sign in with Spotify</button>;
};

export const getStaticProps = async () => {
  // https://accounts.spotify.com/authorizeへのリクエストパラメータに必要な項目を設定
  const scopes = [
    // 'streaming',
    // 'user-read-email',
    // 'user-read-private',
    'playlist-modify-public',
    'user-read-currently-playing',
    // 'playlist-modify-private',
  ];
  const params = new URLSearchParams();
  params.append('client_id', process.env.SPOTIFY_CLIENT_ID || '');
  params.append('response_type', 'code');
  params.append('redirect_uri', process.env.RETURN_TO || '');
  params.append('scope', scopes.join(' '));
  // params.append('state', 'state');
  return {
    props: { loginPath: `https://accounts.spotify.com/authorize?${params.toString()}` },
  };
};

export default Index;
