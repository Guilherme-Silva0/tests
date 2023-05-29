import Logo from "./Logo"
import Profile from "./Profile"

interface HeaderProps {
  name?: string
  email?: string
}

const Header = ({email, name}: HeaderProps) => {

  return (
    <header className="flex p-3 justify-between items-center shadow-lg">
      <Logo />
      <Profile name={name ?? 'Gui'} email={email ?? 'gui@email.com'}/>
    </header>
  )
}

export default Header
