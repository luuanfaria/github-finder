import React, { useState } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = ({ inputQ }) => {
    const [input, setInput] = useState('')

    const onChange = (text) => {
        setInput(text)
    }

    const submit = (e) => {
        e.preventDefault()
        if (input !== '') {
            inputQ(input)
        } else {
            alert('Please enter a username')
        }
    }

    return (
        <Form onSubmit={submit}>
            <InputGroup className="mb-3" >
                < FormControl
                    placeholder="Search GitHub Profile..."
                    aria-label="Search GitHub Profile..."
                    aria-describedby="basic-addon2"
                    onChange={(e) => onChange(e.target.value)}
                    value={input}
                />
                <InputGroup.Append>
                    <InputGroup.Append>
                        <Button type="submit" onSubmit={submit} variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default Search
