import "./globals.css"
import NavigationPage from "../../components/Navigation"



export default function RootLayout({ children }) {
  return (
 <html>
  <head>
    <title>My fists app with Next 13</title>
  </head>
  <body>
   <NavigationPage/>
    {children}
    </body>
 </html>
  )
}
