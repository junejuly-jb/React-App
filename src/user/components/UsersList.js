import React from 'react';
import './UsersList.css'
import UserItem from './UserItem'

const UsersList = props => {

    if (props.items.length == 0) {
        return (<div className="center">
                <h2>No users found</h2>
            </div>
        )
    } 

    return (
        <ul>{props.items.map(user => (
            <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
            /> 
            // <div>
            //     <img src={user.image}/>
            //     <li>{ user.id}</li>
            //     <li>{user.places}</li>
            // </div>
        ))}
        </ul>
    )


}

export default UsersList