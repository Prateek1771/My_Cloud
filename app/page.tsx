import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1e1919] dark:bg-slate-800">
        <div className="p-8 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <div>
          <h1 className="text-5xl font-bold">
            Welcome to dropbox.
            <br />
            <br />
          </h1>

          <h1 className="text-4xl font-bold">
            Storing everything for you and your needs. All in one place
            <br />
          </h1>

          <p className="pb-18">
            Run out of storage space? Don't worry we got you covered. 
            You can upload any kind of information that you need which are important like files folders containing 
            different kinds like movies, important documents, songs and more.
          </p>
        
          <br />
          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-4 w-fit">
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
          </div>
          <div>
          <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-9">
            <video controls loop muted className="rounded-lg">
              <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" type="video/mp4" /> 
            </video>
          </div>
          </div>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2"> 
      This is a clone project developed by an engineer to make things easy.
      This project consists the technologies like Next js-14, React, Firebase,Tailwind CSS,
      Shad CN (UI & UX), Clerk Authentication (MiddleWare).
      </p>
      
    </main>
  )
}
