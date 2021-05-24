/** @jsxImportSource @emotion/react */
import { OptionType } from 'models'
import { SelectHTMLAttributes } from 'react'
import 'twin.macro'

type ScoreSelectProps = {
  options: OptionType[]
} & SelectHTMLAttributes<HTMLSelectElement>

const TransparentSelect = ({ options, ...props }: ScoreSelectProps) => {
  return (
    <select
      tw="fixed text-xl md:text-2xl xl:text-3xl opacity-40 hocus:opacity-100 focus:outline-none transform duration-300"
      {...props}
    >
      {options.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  )
}

export { TransparentSelect }
