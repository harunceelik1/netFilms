import Inter, { Montserrat } from   '@next/font/google';
import '@/styles/reset.css'
import '@/styles/global.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
 
const montserrat = Montserrat({ subsets : ['latin']});



export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={montserrat.className}>

      <body className='container'>
        <Header/>
        <main>{children}</main>
        <Footer/>
        
        </body>
    </html>
  )
}
