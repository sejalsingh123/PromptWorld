'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])

  return (
    <nav className="flex items-center justify-between w-full py-4 px-6 bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200">

      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="PromptWorld Logo"
          width={35}
          height={35}
          className="object-contain"
        />
        <p className="logo_text">PromptWorld</p>
      </Link>

      {/* DESKTOP NAV */}
      <div className="hidden sm:flex items-center gap-5">

        {session?.user ? (
          <>
            <Link href="/create-post" className="black_btn">
              Create Prompt
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="black_btn"
            >
              Sign Out
            </button>

            <Link href="/myProfile">
              <Image
                src={session.user.image}
                width={40}
                height={40}
                className="profile_img"
                alt="profile"
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* MOBILE NAV */}
      <div className="sm:hidden flex items-center relative">

        {session?.user ? (
          <>
            <Image
              src={session.user.image}
              width={40}
              height={40}
              className="profile_img"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href="/create-post"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-3 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
);

}

export default Nav
