import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Input from '../Input'
import * as vali from '../../utils/validators'
import Modal from '../UI/Modal'

const MAIL_FORM = {
   name: {
      value: '',
      isValid: true,
      touched: false,
      validators: [],
   },
   email: {
      value: '',
      isValid: false,
      touched: false,
      validators: [vali.required, vali.email],
   },
   subject: {
      value: '',
      isValid: false,
      touched: false,
      validators: [vali.required, vali.length({ min: 2, max: 30 })],
   },
   message: {
      value: '',
      isValid: false,
      touched: false,
      validators: [vali.required, vali.length({ min: 5, max: 5000 })],
   },
}

const Contact: React.FC = () => {
   const { t } = useTranslation()
   const [mailForm, setMailForm] = useState<typeof MAIL_FORM>(MAIL_FORM)
   const [isFormValid, setisFormValid] = useState<boolean>(false)
   const [error, setError] = useState<string | undefined>(undefined)
   const [message, setMessage] = useState<string>()

   const inputChangedHandler = (id: string, value: string) => {
      const updatedMailForm: any = { ...mailForm }
      const updatedInput = { ...updatedMailForm[id] }

      let isValid = true
      for (const validator of updatedMailForm[id].validators) {
         isValid = isValid && validator(value)
      }

      updatedInput.value = value
      updatedInput.isValid = isValid
      updatedMailForm[id] = updatedInput

      let formValidity = true
      for (const inputName in updatedMailForm) {
         formValidity = formValidity && updatedMailForm[inputName].isValid
      }

      setMailForm(updatedMailForm)
      setisFormValid(formValidity)
   }

   const onBlurHandler = (id: string) => {
      const updatedMailForm: any = { ...mailForm }
      const updatedInput = { ...updatedMailForm[id] }

      updatedInput.touched = true
      updatedMailForm[id] = updatedInput

      setMailForm(updatedMailForm)
   }

   const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault()

      if (!isFormValid) {
         setError(t('Contact.Incorrect'))
         return
      }

      fetch('http://email-service.samuelk.pl:8081/send', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            name: mailForm.name.value,
            email: mailForm.email.value,
            subject: mailForm.subject.value,
            message: mailForm.message.value,
         }),
      })
         .then((result) => {
            if (result.status !== 200) {
               throw new Error(t('Contact.Incorrect'))
            }
            setMessage(t('Contact.Send'))
            setisFormValid(false)
            setMailForm(MAIL_FORM)
         })
         .catch(() => {
            setError(t('Global.SomethingWentWrong'))
         })
   }

   const modalClosedHandler = () => {
      setMessage(undefined)
      setError(undefined)
   }

   const renderModal = () => {
      if (message) {
         return (
            <Modal show onClose={modalClosedHandler} title="Success!">
               {message}
            </Modal>
         )
      }
      return null
   }

   const renderError = () => {
      if (error) {
         return (
            <Modal show onClose={modalClosedHandler} title="Error!" isError>
               {error}
            </Modal>
         )
      }
   }

   return (
      <section className="section-contact" id="section-contact">
         {renderModal()}
         {renderError()}
         <div className="section-contact__content">
            <h2 className="section-header">
               <span className="section-header__title">{t('Contact.Title')}</span>
               <span className="section-header__sub-title">{t('Contact.SubTitle')}</span>
            </h2>
            {/* <Effect up> */}
            <form className="contact-form" onSubmit={onSubmitHandler}>
               <div className="contact-form__block">E-MAIL</div>
               <div className="contact-form__group">
                  <Input
                     type="email"
                     id={'email'}
                     label="Email"
                     required
                     placeholder={t('Contact.EmailPH')}
                     errorMessage={t('Contact.EmailError')}
                     isValid={mailForm.email.isValid}
                     value={mailForm.email.value}
                     touched={mailForm.email.touched}
                     onChange={inputChangedHandler}
                     onBlur={onBlurHandler}
                  />
                  <Input
                     type="text"
                     id={'name'}
                     label={t('Contact.Name')}
                     placeholder={t('Contact.NamePH')}
                     isValid={mailForm.name.isValid}
                     value={mailForm.name.value}
                     touched={mailForm.name.touched}
                     onChange={inputChangedHandler}
                     onBlur={onBlurHandler}
                  />
               </div>
               <div className="contact-form__group">
                  <Input
                     type="text"
                     id={'subject'}
                     label={t('Contact.Subject')}
                     required
                     placeholder={t('Contact.SubjectPH')}
                     errorMessage={t('Contact.SubjectError')}
                     isValid={mailForm.subject.isValid}
                     value={mailForm.subject.value}
                     touched={mailForm.subject.touched}
                     onChange={inputChangedHandler}
                     onBlur={onBlurHandler}
                  />
               </div>
               <div className="contact-form__group">
                  <Input
                     type="textarea"
                     id={'message'}
                     label={t('Contact.Message')}
                     rows={8}
                     required
                     errorMessage={t('Contact.MessageError')}
                     isValid={mailForm.message.isValid}
                     value={mailForm.message.value}
                     touched={mailForm.message.touched}
                     onChange={inputChangedHandler}
                     onBlur={onBlurHandler}
                  />
               </div>
               <button
                  className={[
                     'contact-form__submit',
                     !isFormValid
                        ? 'contact-form__submit--disabled'
                        : 'contact-form__submit--enabled',
                  ].join(' ')}
                  disabled={!isFormValid}
                  type="submit"
               >
                  {t('Contact.Send')}
               </button>
            </form>
            {/* </Effect> */}
         </div>
      </section>
   )
}

export default Contact
