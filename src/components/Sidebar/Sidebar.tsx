import LabelImportantIcon from '@mui/icons-material/LabelImportant'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SidebarOption from './SidebarOption/SidebarOption'
import PersonIcon from '@mui/icons-material/Person'
import NearMeIcon from '@mui/icons-material/NearMe'
import PhoneIcon from '@mui/icons-material/Phone'
import { Button, IconButton } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import NoteIcon from '@mui/icons-material/Note'
import StarIcon from '@mui/icons-material/Star'
import DuoIcon from '@mui/icons-material/Duo'
import AddIcon from '@mui/icons-material/Add'
import { FC } from 'react'
import './Sidebar.css'

interface ISidebarProps {}

const Sidebar: FC<ISidebarProps> = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        number={54}
        title="Inbox"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} number={54} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} number={54} title="Snoozed" />
      <SidebarOption Icon={LabelImportantIcon} number={54} title="Important" />
      <SidebarOption Icon={NearMeIcon} number={54} title="Sent" />
      <SidebarOption Icon={NoteIcon} number={54} title="Drafts" />
      <SidebarOption Icon={ExpandMoreIcon} number={54} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
