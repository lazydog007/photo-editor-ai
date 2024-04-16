"use client"
import { bottomLinks, navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import SideBarElement from "./SideBarElement"

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="Logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          {/* This is what differentiates if you are logged in */}
          <SignedIn>
            {/* top links */}
            <ul className="sidebar-nav_elements">
              {navLinks.map((link, index) => (
                <SideBarElement key={index} link={link} pathname={pathname} />
              ))}
            </ul>

            {/* bottom links pushed down magically */}
            <ul className="sidebar-nav_elements">
              {bottomLinks.map((link, index) => (
                <SideBarElement key={index} link={link} pathname={pathname} />
              ))}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName={true} />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
