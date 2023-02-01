import styled from 'styled-components'
import tw from 'twin.macro'

export default styled.p`
  font-weight: ${props => (props.medium ? '600' : '400')};
  ${tw`
   text-xs
   leading-4
   sm:text-sm
   sm:leading-6
`}
`
