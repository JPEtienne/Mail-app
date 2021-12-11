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
import Section from '../Section/Section'
import { FC } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow/EmailRow'


const EmailList: FC = () => {
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
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="email-list__list">
        <EmailRow
          title="Subject title"
          subject="Hello this is a subject"
          description="This is a description ..."
          time="11:13am"
        />
      </div>
    </div>
  )
}

export default EmailList
