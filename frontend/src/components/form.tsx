/** @jsxImportSource @emotion/react */
import { OptionType } from 'models'
import { forwardRef } from 'react'
import 'twin.macro'

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: OptionType[]; label: string }

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ options, label, ...props }, ref) => (
  <label htmlFor={props.name} tw="capitalize grid text-xl font-light">
    {label}:
    <select
      ref={ref}
      {...props}
      tw="text-xl rounded-lg p-3 shadow-inner bg-field italic border-none focus:outline-none hocus:bg-gray-100 transform duration-200"
    >
      {options.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  </label>
))

Select.displayName = 'Select control'

export { Select }
