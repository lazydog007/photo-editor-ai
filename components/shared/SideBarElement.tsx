import Image from "next/image"
import Link from "next/link"

type Props = {
  link: NavLink
  pathname: string
}

interface NavLink {
  label: string
  route: string
  icon: string
}
const SideBarElement = ({ link, pathname }: Props) => {
  const isActive = link.route === pathname
  return (
    <li
      key={link.route}
      className={`sidebar-nav_element group ${
        isActive ? "bg-purple-gradient text-white" : "text-gray-700"
      }`}
    >
      <Link className="sidebar-link" href={link.route}>
        <Image
          src={link.icon}
          alt="logo"
          width={24}
          height={24}
          className={`${isActive && "brightness-200"}`}
        />
        {link.label}
      </Link>
    </li>
  )
}

export default SideBarElement
