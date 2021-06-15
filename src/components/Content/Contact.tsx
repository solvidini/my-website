import React, { useState } from 'react';
import Effect from 'react-reveal/Fade';

import withTranslation from '../../hoc/withTranslation';
import Input from '../Input';
import * as vali from '../../utils/validators';
import Modal from '../UI/Modal';
import { Dictionary } from '../../languageContext';

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

interface Props {
   dictionary: Dictionary
}

const Contact = (props: Props) => {
   const { dictionary } = props;
   const [mailForm, setMailForm] = useState(MAIL_FORM);
   const [isFormValid, setisFormValid] = useState(false);
   const [error, setError] = useState();
   const [message, setMessage] = useState();

   const inputChangedHandler = (id: string, value: string) => {
      const updatedMailForm: any = { ...mailForm };
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
      setisFormValid(formValidity);
   };

   const onBlurHandler = (id: string) => {
      const updatedMailForm: any = { ...mailForm };
      const updatedInput = { ...updatedMailForm[id] };

      updatedInput.touched = true;
      updatedMailForm[id] = updatedInput;

      setMailForm(updatedMailForm);
   };

   const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();

      if (!isFormValid) {
         setError(dictionary.contact.incorrect);
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
               throw new Error(dictionary.contact.incorrect);
            }
            setMessage(dictionary.contact.sent);
            setisFormValid(false);
            setMailForm(MAIL_FORM);
         })
         .catch((err) => {
            setError(err);
         });
   };

   const modalClosedHandler = () => {
      setMessage(undefined);
      setError(undefined);
   };

   const renderModal = () => {
      if (message) {
         return (
            <Modal show onClose={modalClosedHandler} title="Success!">
               {message}
            </Modal>
         )
      }
      return null;
   }

   const renderError = () => {
      if (error) {
         return (
            <Modal show onClose={modalClosedHandler} title="Error!" isError>
               {(error || '').toString()}
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
               <span className="section-header__title">{dictionary.contact.title}</span>
               <span className="section-header__post">{dictionary.contact.post}</span>
            </h2>
            <Effect up>
               <form className="contact-form" onSubmit={onSubmitHandler}>
                  <div className="contact-form__block">E-MAIL</div>
                  <div className="contact-form__group">
                     <Input
                        type="email"
                        id={'email'}
                        label="E-Mail"
                        required
                        placeholder={dictionary.contact.emailPH}
                        errorMessage={dictionary.contact.emailError}
                        isValid={mailForm.email.isValid}
                        value={mailForm.email.value}
                        touched={mailForm.email.touched}
                        onChange={inputChangedHandler}
                        onBlur={onBlurHandler}
                     />
                     <Input
                        type="text"
                        id={'name'}
                        label={dictionary.contact.name}
                        placeholder={dictionary.contact.namePH}
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
                        label={dictionary.contact.subject}
                        required
                        placeholder={dictionary.contact.subjectPH}
                        errorMessage={dictionary.contact.subjectError}
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
                        label={dictionary.contact.message}
                        rows={8}
                        required
                        errorMessage={dictionary.contact.messageError}
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
                     {dictionary.contact.send}
                  </button>
               </form>
            </Effect>
         </div>
      </section>
   );
};

export default withTranslation(Contact);
