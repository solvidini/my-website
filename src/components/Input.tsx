import React from 'react';

type Props = {
   id: string;
   type: string;
   isValid: boolean;
   label: string;
   placeholder: string;
   errorMessage: string;
   touched: boolean;
   value: string;
   rows?: number;
   required?: boolean;
   onChange: Function;
   onFocus: Function;
};

const Input = (props: Props) => {
   const {
      type,
      isValid,
      touched,
      id,
      value,
      rows,
      placeholder,
      required,
      onChange,
      onFocus,
      label,
      errorMessage,
   } = props;

   const validityClass = !isValid && touched ? 'input--invalid' : 'input--valid';

   const renderLabel = () => {
      return (
         <label className="form-control__label" htmlFor={id}>
            {label}
         </label>
      );
   };

   const renderInput = () => {
      switch (type) {
         case 'textarea':
            return (
               <textarea
                  className={['input input--textarea', validityClass].join(' ')}
                  id={id}
                  value={value}
                  rows={rows}
                  placeholder={placeholder}
                  required={required}
                  onChange={(e) => onChange(id, e.target.value)}
                  onFocus={() => onFocus(id)}
               />
            );
         default:
            return (
               <input
                  className={['input', validityClass].join(' ')}
                  type={type ? type : 'text'}
                  id={id}
                  value={value}
                  placeholder={placeholder}
                  required={required}
                  onChange={(e) => onChange(id, e.target.value)}
                  onFocus={() => onFocus(id)}
               />
            );
      }
   }

   const renderError = () => {
      if (!isValid && touched) {
         return <span className="form-control__error">{errorMessage}</span>;
      }
      return null;
   }

   return (
      <div className="form-control">
         {renderLabel()}
         {renderInput()}
         {renderError()}
      </div>
   );
};

Input.defaultProps = {
   type: 'text',
   label: '',
   value: '',
   placeholder: '',
   errorMessage: null,
   isValid: false,
   touched: false,
   required: false,
   rows: 1,
};

export default Input;
