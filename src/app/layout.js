import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WellnessNourish Elementor',
  description: 'WellnessNourish Elementor',
}

 const RootLayout = ({ children })=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        
        {children}
        <Footer></Footer>
        </body>
    
    </html>
  )
}

export default RootLayout;
