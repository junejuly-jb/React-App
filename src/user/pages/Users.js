import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        { id: 'u1', name: 'June', image: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-1/p240x240/127280798_3450007395036388_2924320079594531997_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_eui2=AeHqic09SIQag9yi9lu_ZBQ6Z6-_wcomZqNnr7_ByiZmo805WWjiBSOy8uytsZKGd3jmR7xKjo6CB6SY9kfO4zXD&_nc_ohc=m4SRYvUdGtAAX8v7BWM&_nc_oc=AQmihmYNGa6eqBZmVX9m2NNzdEtZNta5bWWGnOOkndNFy5GViD35Ms8F8iYoseFUbF4&_nc_ht=scontent.fmnl4-3.fna&tp=6&oh=02bb8356148d124ddcb13700feec5ec8&oe=6011B084', places: '4'}
    ]

    return <UsersList items={USERS}/>
}

export default Users;