import { Toaster } from "@/components/ui/toaster"
import React from "react"
import MobileNav from "../../components/shared/MobileNav"
import Sidebar from "../../components/shared/Sidebar"

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  )
}

export default Layout
