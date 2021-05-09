/** @jsxImportSource @emotion/react */
import { OptionType } from 'models/index'
import { useController, UseControllerProps } from 'react-hook-form'
import 'twin.macro'

function Select({
  options,
  label,
  ...controllerProps
}: UseControllerProps<any> & { options: OptionType[]; label: string }) {
  const { field } = useController(controllerProps)

  return (
    <label htmlFor={field.name} tw="capitalize grid gap-2 text-sm font-bold">
      {label}:
      <select {...field}>
        <option value=""></option>
        {options.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  )
}
export { Select }
