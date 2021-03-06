import { withSession } from 'next-session';
import axios from 'axios';

type SpotifyAuthApiResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
};

const authorize = async (req, res) => {
  const { code, state } = req.query;

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code as string);
  params.append('redirect_uri', process.env.RETURN_TO as string);

  const response = await axios.post<SpotifyAuthApiResponse>(
    'https://accounts.spotify.com/api/token',
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
          'utf-8',
        ).toString('base64')}`,
      },
    },
  );

  req.session.set('user', {
    accessToken: response.data.access_token,
  });

  // res.status(200).redirect('/');
};

export default withSession(authorize);
