import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import classNames from 'classnames'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Input from 'src/components/ui/Input'
import * as vali from 'src/utils/validators'
import Modal from 'src/components/ui/Modal'

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

const Contact: React.FC<{ disableGsap?: boolean }> = ({ disableGsap }) => {
  const { t } = useTranslation()
  const formRef = React.useRef(null)
  const [mailForm, setMailForm] = useState<typeof MAIL_FORM>(MAIL_FORM)
  const [isFormValid, setisFormValid] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const [messageSent, setMessageSent] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)

  React.useEffect(() => {
    if (!disableGsap) {
      gsap.fromTo(
        formRef.current,
        {
          autoAlpha: 0,
          y: 300,
        },
        {
          duration: 1,
          ease: 'power1',
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            id: 'contact',
            trigger: formRef.current,
            start: 'top center+=400',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }
  }, [])

  useEffect(() => {
    if (messageSent) {
      setTimeout(() => {
        setMessageSent(false)
      }, 5000)
    }
  }, [messageSent])

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

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    if (!isFormValid) {
      setError(t('Contact.Incorrect'))
      return
    }

    setLoading(true)
    try {
      const result = await fetch('https://front-up.pro:8081/send', {
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
      setLoading(false)

      if (result.status !== 200) {
        setError(t('Contact.Incorrect'))
        return
      }

      setMessageSent(true)
      setisFormValid(false)
      setMailForm(MAIL_FORM)
    } catch (error) {
      setLoading(false)
      setError(t('Global.SomethingWentWrong'))
    }
  }

  const modalClosedHandler = () => {
    setError(undefined)
  }

  const renderError = () => {
    if (error) {
      return (
        <Modal show onClose={modalClosedHandler} title={t('Global.Error')} isError>
          {error}
        </Modal>
      )
    }
  }

  return (
    <section className='section-contact' id='contact'>
      {renderError()}
      <h2 className='section-header'>
        <span className='section-header__title'>{t('Contact.Title')}</span>
        <span className='section-header__sub-title'>{t('Contact.SubTitle')}</span>
      </h2>
      <form aria-label='form' className='contact-form' onSubmit={onSubmitHandler} ref={formRef}>
        <div className='contact-form__block'>E-MAIL</div>
        <div className='contact-form__group'>
          <Input
            testId='email'
            type='email'
            id='email'
            name='email'
            label='Email'
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
            type='text'
            id='name'
            name='name'
            label={t('Contact.Name')}
            placeholder={t('Contact.NamePH')}
            isValid={mailForm.name.isValid}
            value={mailForm.name.value}
            touched={mailForm.name.touched}
            onChange={inputChangedHandler}
            onBlur={onBlurHandler}
          />
        </div>
        <div className='contact-form__group'>
          <Input
            testId='subject'
            type='text'
            id='subject'
            name='subject'
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
        <div className='contact-form__group'>
          <Input
            testId='message'
            type='textarea'
            id='message'
            name='message'
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
        <div className='contact-form__bottom'>
          <div
            className={classNames(
              'contact-form__status',
              messageSent && 'contact-form__status--success',
            )}
          >
            <FontAwesomeIcon icon={faCheck} style={{ marginRight: '1rem' }} /> {t('Contact.Sent')}
          </div>
          <button
            className={classNames(
              'button',
              'button--contact',
              (!isFormValid || isLoading) && 'button--disabled',
            )}
            disabled={!isFormValid}
            type='submit'
          >
            {isLoading ? t('Contact.Sending') : t('Contact.Send')}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
