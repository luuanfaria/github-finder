import React from 'react'
import { Card } from 'react-bootstrap'

const Repos = ({ data }) => {

    const items = data.map(item => (
        <Card key={item.id}>
            <Card.Body>
                <Card.Title>
                    <a target="_blank" rel="noopener noreferrer" href={item.html_url}>{item.name}</a>
                </Card.Title>
                <Card.Text>
                    {item.description}
                    <br></br>
                    <p className="btn-link disabled">
                        {item.language}
                    </p>                    
                </Card.Text>
            </Card.Body>
        </Card>
    ))
    return (
        <>
            <h5>Repositórios</h5>
            {items}
        </>
    )
}

export default Repos
