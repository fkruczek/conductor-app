/** @jsxImportSource @emotion/react */
import { OptionType } from 'models'
import { forwardRef } from 'react'
import 'twin.macro'

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: OptionType[]; label: string }

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ options, label, ...props }, ref) => (
  <label htmlFor={props.name} tw="capitalize grid italic font-light gap-1">
    {label}:
    <select
      ref={ref}
      {...props}
      tw="text-lg rounded-lg p-3 shadow-inner bg-field italic border-none focus:outline-none hocus:bg-gray-100 transform duration-200"
    >
      {options.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  </label>
))

Select.displayName = 'Select field'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input = forwardRef<HTMLInputElement, InputProps & { label: string }>((props, ref) => (
  <div tw="grid gap-1 italic">
    <label htmlFor={props.id}>{props.label}: </label>
    <input
      tw="text-lg rounded-lg p-3 shadow-inner bg-field italic border-none focus:outline-none hocus:bg-gray-100 transform duration-200"
      ref={ref}
      {...props}
    />
  </div>
))

Input.displayName = 'Input field'

export { Select, Input }
