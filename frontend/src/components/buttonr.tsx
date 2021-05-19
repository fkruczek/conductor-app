import tw, { styled } from 'twin.macro'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  isSmall?: boolean
}

const Button = styled.button(({ isSmall }: ButtonProps) => [
  // The common button styles
  tw`px-8 py-2 bg-black rounded border-none shadow-xl focus:outline-none transform duration-75 text-white`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105)`,
  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-lg`,
])

export { Button }
