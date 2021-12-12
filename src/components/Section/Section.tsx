import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'
import { FC } from 'react'
import './Section.css'

interface ISectionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
  title: string
  color: string
  selected?: boolean
}

const Section: FC<ISectionProps> = ({
  Icon,
  title,
  color,
  selected,
}) => {
  return (
    <div
      className={`section ${selected && 'section--selected'}`}
      style={{
        borderBottom: `0.2rem solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  )
}

export default Section
