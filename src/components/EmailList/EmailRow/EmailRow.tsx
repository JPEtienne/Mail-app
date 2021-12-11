import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { Checkbox, IconButton } from '@mui/material'
import { FC } from 'react'
import './EmailRow.css'

interface IEmailRowProps {
  title: string
  subject: string
  description: string
  time: string
}

const EmailRow: FC<IEmailRowProps> = ({
  title,
  subject,
  description,
  time,
}) => {
  return (
    <div className="email-row">
      <div className="email-row__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="email-row__title">
        <h3>{title}</h3>
      </div>
      <div className="email-row__message">
        <h4>
          {subject}
          <span className="email-row__description">{description}</span>
          
        </h4>
      </div>
      <p className="email-row__time">{time}</p>
    </div>
  )
}

export default EmailRow
