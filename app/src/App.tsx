import React from 'react'
import tw from 'twin.macro'
// import Score from './components/Score'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const Score = React.lazy(() => import('./components/Score'))

const App = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Score />
  </React.Suspense>
)

export default App
