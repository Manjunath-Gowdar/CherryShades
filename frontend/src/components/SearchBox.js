import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <div style={{ display: 'inline' }}>
      <Form onSubmit={submitHandler} className='d-flex' inline>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'></Form.Control>
        <Button
          type='submit'
          style={{ marginLeft: '8px' }}
          className='btn btn-primary'>
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchBox
