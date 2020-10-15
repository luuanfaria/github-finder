import React from 'react'
import { Container, Image, Card, ListGroup } from 'react-bootstrap'

const Profile = ({ data }) => {
    return (
        <Container>
            <div className="profile">
                <div className="left">
                    <h1>{data.name}</h1>
                    <div className="Image">
                        <Image src={data.avatar_url} rounded />
                    </div>
                    <a className="btn btn-outline-dark" href={data.html_url} rel="noopener noreferrer" target="_blank">View Profile</a>
                </div>
                <div className="right">
                    <div className="right-one">
                        <ListGroup horizontal>
                            <ListGroup.Item>{data.public_repos} Public Repos</ListGroup.Item>
                            <ListGroup.Item>{data.public_gists} Public Gists</ListGroup.Item>
                            <ListGroup.Item>{data.followers} Followers</ListGroup.Item>
                            <ListGroup.Item>{data.following} Following</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="right-two">
                        <Card style={{ width: '100%' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Username: {data.login}</ListGroup.Item>
                                <ListGroup.Item>Loaction: {data.location}</ListGroup.Item>
                                <ListGroup.Item>Email: {data.email}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Profile
