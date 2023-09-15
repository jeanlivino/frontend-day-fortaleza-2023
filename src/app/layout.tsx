import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './global.css';
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'FrontEnd Day - Fortaleza 2023',
  description: 'Um dia inteiro para você ampliar suas conexões',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://frontendday.com.br',
    images: [
      {
        url: 'https://frontendday.descompliqueapps.com.br/wp-content/uploads/2023/08/banner-eventbrite-frontendday-1.png',
        alt: 'FrontEnd Day - Fortaleza 2023',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={poppins.className}>
        <Script
          id='clarity-js'
          strategy='afterInteractive'
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ivkpbyfsly");
`,
          }}
        />
        <Script
          id='fb-pixel'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '226302154877929');
fbq('track', 'PageView');
`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
