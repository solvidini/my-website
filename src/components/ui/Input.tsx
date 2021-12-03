import React from 'react'

interface IInput {
  id: string
  name: string
  type: string
  isValid: boolean
  label: string
  placeholder: string
  errorMessage: string
  touched: boolean
  value: string
  rows?: number
  required?: boolean
  onChange: (id: string, value: string) => void
  onBlur: (id: string) => void
}

const Input = (props: IInput) => {
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
    onBlur,
    label,
    errorMessage,
    name,
  } = props

  const validityClass =
    !isValid && touched ? 'text-field__input--invalid' : 'text-field__input--valid'

  const renderLabel = () => {
    return (
      <label className='text-field__label' htmlFor={id}>
        {label}
        {required && <span className='asterisk'>*</span>}
      </label>
    )
  }

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className={['text-field__input text-field__input--textarea', validityClass].join(' ')}
            id={id}
            name={name}
            value={value}
            rows={rows}
            placeholder={placeholder}
            required={required}
            onChange={e => onChange(id, e.target.value)}
            onBlur={() => onBlur(id)}
          />
        )
      default:
        return (
          <input
            className={['text-field__input', validityClass].join(' ')}
            type={type ? type : 'text'}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={e => onChange(id, e.target.value)}
            onBlur={() => onBlur(id)}
          />
        )
    }
  }

  const renderError = () => {
    if (!isValid && touched) {
      return <span className='field-control__error'>{errorMessage}</span>
    }
    return null
  }

  return (
    <div className='field-control'>
      <div className='text-field'>
        {renderInput()}
        {renderLabel()}
      </div>
      {renderError()}
    </div>
  )
}

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
}

export default Input
