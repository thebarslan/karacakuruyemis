import Image from 'next/image'
import Hero from './components/Main/Hero'
import RootLayout from './layout'

export const metadata = {
      title: 'Home Page',
      description: 'This is the description for the home page.',
};

export default function Home() {
      return (

            <main>
                  <Hero />
            </main>

      )
}
