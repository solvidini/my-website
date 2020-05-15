import React, { useContext, useState } from 'react';
import Effect from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { LanguageContext } from '../../context';
import Input from '../Input';
import * as vali from '../../utils/validators';
import Modal from '../UI/Modal';

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
};

const Contact = (props) => {
  const context = useContext(LanguageContext);
  const [mailForm, setMailForm] = useState(MAIL_FORM);
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const inputChangedHandler = (id, value) => {
    const updatedMailForm = { ...mailForm };
    const updatedInput = { ...updatedMailForm[id] };

    let isValid = true;
    for (const validator of updatedMailForm[id].validators) {
      isValid = isValid && validator(value);
    }

    updatedInput.value = value;
    updatedInput.isValid = isValid;
    updatedMailForm[id] = updatedInput;

    let formValidity = true;
    for (const inputName in updatedMailForm) {
      formValidity = formValidity && updatedMailForm[inputName].isValid;
    }

    setMailForm(updatedMailForm);
    setFormIsValid(formValidity);
  };

  const onFocusHandler = (id) => {
    const updatedMailForm = { ...mailForm };
    const updatedInput = { ...updatedMailForm[id] };

    updatedInput.touched = true;
    updatedMailForm[id] = updatedInput;

    setMailForm(updatedMailForm);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      setError(context.dictionary.contact.incorrect);
      return;
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
          throw new Error(context.dictionary.contact.incorrect);
        }
        setMessage(context.dictionary.contact.sent);
        setFormIsValid(false);
        setMailForm(MAIL_FORM);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const modalClosedHandler = () => {
    setMessage(null);
    setError(null);
  };

  return (
    <section className="section-contact" name="section-contact">
      {message && (
        <Modal show close={modalClosedHandler} title="Success!">
          {message}
        </Modal>
      )}
      {error && (
        <Modal show close={modalClosedHandler} title="Error!" error>
          {error.toString()}
        </Modal>
      )}
      <div className="section-contact__content">
        <h2 className="section-header">
          <span className="section-header__title">
            {context.dictionary.contact.title}
          </span>
          <span className="section-header__post">
            {context.dictionary.contact.post}
          </span>
        </h2>
        <Effect up>
          <form className="contact-form" onSubmit={onSubmitHandler}>
            <div className="contact-form__group">
              <Input
                type="email"
                id={'email'}
                label="E-Mail"
                required
                placeholder={context.dictionary.contact.emailPH}
                errorMessage={context.dictionary.contact.emailError}
                isValid={mailForm.email.isValid}
                value={mailForm.email.value}
                touched={mailForm.email.touched}
                onChange={inputChangedHandler}
                onFocus={onFocusHandler}
              />
              <Input
                type="text"
                id={'name'}
                label={context.dictionary.contact.name}
                placeholder={context.dictionary.contact.namePH}
                isValid={mailForm.name.isValid}
                value={mailForm.name.value}
                touched={mailForm.name.touched}
                onChange={inputChangedHandler}
                onFocus={onFocusHandler}
              />
            </div>
            <div className="contact-form__group">
              <Input
                type="text"
                id={'subject'}
                label={context.dictionary.contact.subject}
                required
                placeholder={context.dictionary.contact.subjectPH}
                errorMessage={context.dictionary.contact.subjectError}
                isValid={mailForm.subject.isValid}
                value={mailForm.subject.value}
                touched={mailForm.subject.touched}
                onChange={inputChangedHandler}
                onFocus={onFocusHandler}
              />
            </div>
            <div className="contact-form__group">
              <Input
                type="textarea"
                id={'message'}
                label={context.dictionary.contact.message}
                rows="8"
                required
                errorMessage={context.dictionary.contact.messageError}
                isValid={mailForm.message.isValid}
                value={mailForm.message.value}
                touched={mailForm.message.touched}
                onChange={inputChangedHandler}
                onFocus={onFocusHandler}
              />
            </div>
            <button
              className={[
                'contact-form__submit',
                !formIsValid
                  ? 'contact-form__submit--disabled'
                  : 'contact-form__submit--enabled',
              ].join(' ')}
              disabled={!formIsValid}
              type="submit"
            >
              {context.dictionary.contact.send}
            </button>
          </form>
        </Effect>
      </div>
    </section>
  );
};

export default Contact;
