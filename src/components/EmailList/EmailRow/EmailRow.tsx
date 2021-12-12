import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { Checkbox, IconButton } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { FC } from 'react'
import './EmailRow.css'
import { useDispatch } from 'react-redux'
import { selectMail } from '../../../features/mailSlice'

interface IEmailRowProps {
  id: string
  title: string
  subject: string
  description: string
  time: any
}

const EmailRow: FC<IEmailRowProps> = ({
  id,
  title,
  subject,
  description,
  time,
}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    )
    history.push('/mail')
  }

  return (
    <div onClick={openMail} className="email-row">
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
          {subject}{' '}
          <span className="email-row__description">{description}</span>
        </h4>
      </div>
      <p className="email-row__time">{time}</p>
    </div>
  )
}

export default EmailRow
