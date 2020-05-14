import React, { useContext, useState } from 'react';
import Effect from 'react-reveal/Fade';

import { LanguageContext } from '../../context';
import Input from '../Input';
import * as vali from '../../utils/validators';

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

  console.log(error);

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
      setError('Data in E-Mail form is not correct!');
      return;
    }

    fetch('http://localhost:8081/send', {
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
          throw new Error('Data in E-Mail form is not correct!');
        }
        //clear the form
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  return (
    <section className="section-contact" name="section-contact">
      <div className="section-contact__content">
        <h2 className="section-header">
          <span className="section-header__title">
            {context.dictionary.contact.title}
          </span>
          <span className="section-header__post">
            {context.dictionary.contact.post}
          </span>
        </h2>
        <form className="contact-form" onSubmit={onSubmitHandler}>
          <div className="contact-form__group">
            <Input
              type="email"
              id={'email'}
              label="E-Mail"
              required
              placeholder="example@email.com"
              errorMessage="Please enter a valid e-mail."
              isValid={mailForm.email.isValid}
              value={mailForm.email.value}
              touched={mailForm.email.touched}
              onChange={inputChangedHandler}
              onFocus={onFocusHandler}
            />
            <Input
              type="text"
              id={'name'}
              label="Name"
              placeholder="Your Name"
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
              label="Subject"
              required
              placeholder="E-Mail Subject"
              errorMessage="Subject should have at least 2 characters. (max 30)"
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
              label="Message"
              rows="8"
              required
              placeholder="What do you want from me?"
              errorMessage="Your message should have at least 5 characters. (max 5000)"
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
              !formIsValid ? 'contact-form__submit--disabled' : null,
            ].join(' ')}
            disabled={!formIsValid}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
