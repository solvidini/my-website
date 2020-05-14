import React from 'react';

const Input = (props) => {
  let inputType;

  switch (props.type) {
    case 'textarea':
      inputType = (
        <textarea
          className={[
            'input input--textarea',
            !props.isValid && props.touched ? 'input--invalid' : 'input--valid',
          ].join(' ')}
          id={props.id}
          value={props.value}
          rows={props.rows}
          placeholder={props.placeholder}
          required={props.required}
          onChange={(e) => props.onChange(props.id, e.target.value)}
          onFocus={() => props.onFocus(props.id)}
        />
      );
      break;
    default:
      inputType = (
        <input
          className={[
            'input',
            !props.isValid && props.touched ? 'input--invalid' : 'input--valid',
          ].join(' ')}
          type={props.type ? props.type : 'text'}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          required={props.required}
          onChange={(e) => props.onChange(props.id, e.target.value)}
          onFocus={() => props.onFocus(props.id)}
        />
      );
  }

  return (
    <div className="form-control">
      <label className="form-control__label" htmlFor={props.id}>
        {props.label}
      </label>
      {inputType}
      {!props.isValid && props.touched && (
        <span className="form-control__error">
          {props.errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
