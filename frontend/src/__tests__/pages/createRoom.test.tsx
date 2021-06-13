/** @jsxImportSource @emotion/react */

import { render, screen } from '@testing-library/react'
import { RoomList } from 'pages/RoomList'

describe('<CreateRoom/>', () => {
  it('should show spinner on load', async () => {
    render(<RoomList />)
    expect(screen.getByLabelText('loading')).toBeTruthy()
  })
})
