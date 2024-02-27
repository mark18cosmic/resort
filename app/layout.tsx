import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Resort | Home',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eius similique voluptatum velit in dicta culpa aliquid expedita aut reiciendis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
