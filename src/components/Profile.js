import React from 'react'

const Profile = ({ data }) => {
    return (
        <div className="card-profile">
            <h3>                        
                <a className="btn btn-light" href={data.html_url} rel="noopener noreferrer" target="_blank">
                {data.name}
                </a>
            </h3>
        </div>
    )
}

export default Profile
