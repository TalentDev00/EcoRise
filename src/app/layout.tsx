import 'bootstrap/dist/css/bootstrap.css'
import './globals.css';
import { Michroma, Jura } from "next/font/google";
import Head from "next/head";

export const MichromaFont = Michroma({
  subsets: ['latin'],
  weight: ['400']
});

export const JuraFont = Jura({
  subsets: ['latin'],
  weight: ['400']
})

// export const metadata = {
//   title: 'ECORISE',
//   description: 'A web3 blockchain minting app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <body className={MichromaFont.className}>{children}</body>
    </html>
  )
}
