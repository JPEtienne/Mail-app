import CloseIcon from '@mui/icons-material/Close'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { FC } from 'react'
import './SendMail.css'

interface ISendMailProps {}

interface FormInputs {
  to: string
  subject: string
  message: string
}

const SendMail: FC<ISendMailProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>()
  const onSubmit = (data: FormInputs) => console.log(data)
  return (
    <div className="send-mail">
      <div className="send-mail__header">
        <h3>New Message</h3>
        <CloseIcon className="send-mail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
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
