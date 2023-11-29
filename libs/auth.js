import jwt from 'jsonwebtoken';
import { serialize, parse } from 'cookie';

const secret = 'cokgizlitoken'; // Replace with a strong secret key

export const generateToken = (user) => {
      const token = jwt.sign({ userId: user._id, email: user.email }, secret, {
            expiresIn: '1h', // Token expires in 1 hour
      });

      return token;
};

export const setTokenCookie = (setCookieCallback, token) => {
      if (!setCookieCallback || typeof setCookieCallback.setHeader !== 'function') {
            console.error('setCookieCallback is not a valid function or does not have setHeader method. Cannot set cookie.');
            return;
      }

      const cookie = serialize('token', token, {
            httpOnly: true,
            maxAge: 60 * 60, // Cookie expires in 1 hour (in seconds)
            path: '/', // Cookie is accessible from all routes
      });

      // Call the provided setCookieCallback to set the cookie
      setCookieCallback.setHeader('Set-Cookie', cookie);
};
export const getTokenFromCookie = (req) => {
      const cookies = parse(req.headers.cookie || '');
      return cookies.token || null;
};
export const verifyToken = (token) => {
      try {
            const decoded = jwt.verify(token, secret);
            return decoded;
      } catch (error) {
            return null;
      }
};