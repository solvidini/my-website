import PropTypes from 'prop-types';
import React from 'react';

const Input = (props) => {
   const {
      type,
      id,
      label,
      value,
      errorMessage,
      isValid,
      touched,
      required,
      rows,
      placeholder,
      onChange,
      onBlur,
   } = props;
   let inputType;

   switch (type) {
      case 'textarea':
         inputType = (
            <textarea
               className={[
                  'input input--textarea',
                  !isValid && touched ? 'input--invalid' : 'input--valid',
               ].join(' ')}
               id={id}
               value={value}
               rows={rows}
               required={required}
               placeholder={placeholder}
               onChange={(e) => onChange(id, e.target.value)}
               onBlur={() => onBlur(id)}
            />
         );
         break;
      default:
         inputType = (
            <input
               className={['input', !isValid && touched ? 'input--invalid' : 'input--valid'].join(
                  ' '
               )}
               type={type}
               id={id}
               value={value}
               required={required}
               placeholder={placeholder}
               onChange={(e) => onChange(id, e.target.value)}
               onBlur={() => onBlur(id)}
            />
         );
   }

   const renderLabel = () => {
      return (
         <label className="form-control__label" htmlFor={id}>
            {label}
         </label>
      );
   };

   const renderErrorMessage = () => {
      if (!isValid && touched) {
         return <span className="form-control__error">{errorMessage}</span>;
      }
      return null;
   };

   return (
      <div className="form-control">
         {renderLabel()}
         {inputType}
         {renderErrorMessage()}
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

Input.propTypes = {
   type: PropTypes.oneOf('text', 'email', 'textarea'),
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   placeholder: PropTypes.string,
   errorMessage: PropTypes.string,
   isValid: PropTypes.bool,
   touched: PropTypes.bool,
   required: PropTypes.bool,
   rows: PropTypes.number,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
};

export default Input;
