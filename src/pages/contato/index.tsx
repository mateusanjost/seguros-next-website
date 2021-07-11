import { A } from '@/components'
import Header from '@/components/Header'
import SimulateSection from '@/components/SimulateSectionHome'
import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import Contact from '@/components/Contact';


export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <NextSeo title="Home" />
      <Header auth={session}/>

      <Contact />

      CONTATO
        <footer className="w-full h-[100px] border border-[#eaeaea] flex justify-center items-center">
          <a
            href="https://vercel.com/new?utm_source=pbteja1998-nextjs-starter&utm_medium=default-template&utm_campaign=pbteja1998-nextjs-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-[1em]" />
          </a>
        </footer>
     
    </>
  )
}

Home.layoutProps = {
  Layout: (props: unknown) => (
    <div className="border-l-8 border-blue-700" {...props} />
  ),
}
