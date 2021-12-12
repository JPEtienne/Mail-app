import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'
import './SidebarOption.css'
import { FC } from 'react'

interface ISidebarOptionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
  number: number
  title: string
  selected?: boolean
}

const SidebarOption: FC<ISidebarOptionProps> = ({
  Icon,
  number,
  title,
  selected,
}) => {
  return (
    <div className={`sidebar-option ${selected && 'sidebar-option--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption
