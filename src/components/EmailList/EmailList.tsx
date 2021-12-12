import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SettingsIcon from '@mui/icons-material/Settings'
import { Checkbox, IconButton } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import InboxIcon from '@mui/icons-material/Inbox'
import RedoIcon from '@mui/icons-material/Redo'
import EmailRow from './EmailRow/EmailRow'
import Section from '../Section/Section'
import { db } from '../../firebase'
import { useEffect } from 'react'
import { useState } from 'react'
import { FC } from 'react'
import './EmailList.css'

interface MailType {
  to: string
  subject: string
  message: string
  timestamp: any
}

const EmailList: FC = () => {
  const [emailList, setEmailList] = useState<{ id: string; data: MailType }[]>()

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setEmailList(
          snapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                data: doc.data(),
              } as { id: string; data: MailType })
          )
        )
      })
  }, [])

  return (
    <div className="email-list">
      <div className="email-list__settings">
        <div className="email-list__settings-left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="email-list__settings-right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="email-list__sections">
        <Section Icon={InboxIcon} title="Primary" color="#c04b37" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="email-list__list">
        {emailList?.map(({ id, data }) => (
          <EmailRow
            key={id}
            id={id}
            title={data.to}
            subject={data.subject}
            description={data.message}
            time={new Date(data.timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  )
}

export default EmailList
