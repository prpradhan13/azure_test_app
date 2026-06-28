import type { TextInputProps } from '@/utils/types'

const InputField = ({label, input, errors, ...props}: TextInputProps) => {
    const { name, required } = props;

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        {...props}
        name={name}
        id={name}
        required={required}
        value={input ?? ''}
        aria-invalid={!!errors}
        aria-errormessage={`${name}-error`}
        className={`border rounded-xl p-2 ${errors ? 'border-red-500' : 'border-gray-400'}`}
      />
      {errors && <div id={`${name}-error`}>{errors[0]}</div>}
    </div>
  )
}

export default InputField