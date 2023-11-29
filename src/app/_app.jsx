// pages/_app.js
import { useEffect } from 'react';
import RootLayout from './layout';

function MyApp({ Component, pageProps }) {
      // Use useEffect to run code only on mount (similar to componentDidMount in class components)
      useEffect(() => {
            // Your global initialization code can go here
            // This code will run once when the app mounts
      }, []);

      // Check if the page is an admin page
      const isAdminPage = Component.isAdminPage || false;

      // If it's an admin page, don't apply the default layout
      if (isAdminPage) {
            return <Component {...pageProps} />;
      }

      // Apply the default layout to non-admin pages
      return (
            <RootLayout>
                  <Component {...pageProps} />
            </RootLayout>
      );
}

export default MyApp;