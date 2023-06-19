import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'

interface ItemListLinkProps {
  to: string
  icon: LucideIcon
  label: string
  onClick?: () => void
}

const ItemListLink = ({
  icon: Icon,
  label,
  to,
  onClick,
}: ItemListLinkProps) => {
  const navigation = useRouter()
  const pathname = usePathname()
  const handleClick = () => {
    onClick?.()
    navigation.push(to)
  }

  const match = useMemo(() => {
    return pathname === to
  }, [pathname, to])

  return (
    <ListItemButton selected={match} onClick={handleClick}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export default ItemListLink
