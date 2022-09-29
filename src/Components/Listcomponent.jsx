import { UserContext } from './UserContext';
import { useContext } from 'react';

export default function Listcomponent() {
    const { name, email, mobileno } = useContext(UserContext)
    return (
        <>
            <p>Name :</p>{name}
            <p>Email :</p>{email}
            <p>Mobile No :</p>{mobileno}
        </>
    )
}