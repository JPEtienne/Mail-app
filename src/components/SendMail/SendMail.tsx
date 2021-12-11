import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { FC } from 'react'
import './SendMail.css'

interface ISendMailProps {}

const SendMail: FC<ISendMailProps> = () => {
  return (
    <div className="send-mail">
      <div className="send-mail__header">
        <h3>New Message</h3>
        <CloseIcon className="send-mail__close" />
      </div>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <div className="send-mail__options">
          <Button
            className="send-mail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
