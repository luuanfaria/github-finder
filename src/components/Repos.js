import React from 'react'
import { Card, Container } from 'react-bootstrap'

const Repos = ({ data }) => {

    const items = data.map(item => (
        <Card key={item.id}>
            <Card.Body>
                <Card.Title>
                    <a target="_blank" rel="noopener noreferrer" href={item.html_url}>{item.name}</a>
                </Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
            </Card.Body>
        </Card>
    ))
    return (
        <Container>
            <h1>Repos</h1>
            {items}
        </ Container>
    )
}

export default Repos
