import tw, { styled } from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  isSmall?: boolean
}

const Button = styled.button(({ isSmall }: ButtonProps) => [
  // The common button styles
  tw`px-10 py-2 bg-button rounded-lg border-none shadow-lg focus:outline-none transform duration-75 text-white font-extrabold`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105)`,
  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-lg`,
])

export { Button }
