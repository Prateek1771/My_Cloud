import Link from 'next/link'
import Image from 'next/image'
import codeImage from '../public/logo.png'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import { ThemeToggle } from './ThemeToggler';

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            <div className="w-fit">
                <Image
                    src={codeImage }
                    alt="logo"
                    // className="invert"
                    height={50}
                    width={50}
                />
            </div>
            <h1 className="font-bold text-xl">Dropbox</h1>
        </Link>

        <div className=" flex font-bold text-xl space-x-2 items-center ">
          {/* {Theme toggler} */}

          <ThemeToggle/>
          <UserButton afterSwitchSessionUrl='/'/>

          <SignedOut>
            <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
          </SignedOut>
        </div>

    </header>
  );
}

export default Header