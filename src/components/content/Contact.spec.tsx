import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import i18n from 'src/i18n'
import nock from 'nock'

import Contact from './Contact'

describe('<Contact />', () => {
  beforeEach(() => {
    i18n.init()
  })
  afterEach(() => {
    if (!nock.isDone()) {
      throw new Error(`Not all nock interceptors were used: ${JSON.stringify(nock.pendingMocks())}`)
    }
    nock.cleanAll()
  })

  test('Tests if component loads and has 4 input fields', () => {
    const { getByRole, getAllByRole } = render(<Contact disableGsap />)
    expect(getByRole('form')).toBeInTheDocument()
    expect(getAllByRole('textbox')).toHaveLength(4)
  })

  test('Tests form submitting', async () => {
    const { getByTestId, getByText } = render(<Contact disableGsap />)
    const submitRequest = nock('https://samuelk.pl:8081')
      .persist()
      .post('/send', {
        name: '',
        email: 'example@email.com',
        subject: 'Title!',
        message: 'My message for you!',
      })
      .reply(200, { message: 'Message successfully sent.' }, { 'Access-Control-Allow-Origin': '*' })

    fireEvent.change(getByTestId('email'), {
      target: { value: 'example@email.com' },
    })
    fireEvent.change(getByTestId('subject'), {
      target: { value: 'Title!' },
    })
    fireEvent.change(getByTestId('message'), {
      target: { value: 'My message for you!' },
    })

    expect(getByText('Send').getAttribute('disabled')).toBe(null)

    fireEvent.click(getByText('Send'))

    await waitFor(() => {
      expect(submitRequest.isDone()).toBeTruthy()
    })
  })
})
