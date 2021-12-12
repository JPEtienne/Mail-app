import { closeSendMessage } from '../../features/mailSlice'
import CloseIcon from '@mui/icons-material/Close'
import firebase from 'firebase/compat/app'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { db } from '../../firebase'
import { FC } from 'react'
import './SendMail.css'

interface ISendMailProps {}

export interface FormInputs {
  id?: string
  to: string
  subject: string
  message: string
  timestamp?: string
}

const SendMail: FC<ISendMailProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => {
    console.log(data)
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  }
  const dispatch = useDispatch()
  return (
    <div className="send-mail">
      <div className="send-mail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="send-mail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder={`${errors.to ? errors.to.message : 'To'}`}
          {...register('to', { required: 'To is required' })}
          className={errors.to && 'send-mail__error'}
        />
        <input
          type="text"
          placeholder={`${errors.subject ? errors.subject.message : 'Subject'}`}
          {...register('subject', { required: 'Subject is required' })}
          className={errors.subject && 'send-mail__error'}
        />
        <textarea
          placeholder={`${
            errors.message ? errors.message.message : 'Message...'
          }`}
          {...register('message', { required: 'Message is required' })}
          className={`send-mail__message ${
            errors.message && 'send-mail__error'
          }`}
        ></textarea>

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
