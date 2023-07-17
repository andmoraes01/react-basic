import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UserDetails() {

    const { userId } = useParams();

    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                if (userData.data) {
                    setUser({
                        id: userData.data.id,
                        name: userData.data.first_name,
                        lastName: userData.data.last_name,
                        email: userData.data.email,
                        photo: userData.data.avatar
                    })
                }
            })
    }, [userId])

    if(user.name != undefined) {
        return <>
            <h1>{user.name} {user.lastName}</h1>
            <img src={user.photo} alt={user.name}/>
            <p>{user.email}</p>
            <Link to="/usuarios"> Votlar</Link>
        </>
    }

    return <>
        <h1>Usuário não encontrado !</h1>
        <Link to="/usuarios"> Voltar</Link>
    </>
}

export default UserDetails