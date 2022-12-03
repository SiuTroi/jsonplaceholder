import { useState, useEffect, createContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [userDetail, setUserDetail] = useState([])
    const [photoAlbums, setPhotoAlbums] = useState([])
    const [userId, setUserId] = useState('')
    const navigate = useNavigate()
    
    useEffect(() => {
        const getApi = async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(data)
        }
        getApi()
    }, [])

    // get Infor User Detail
    const handleGetUserId = (id) => {
        const getUserId = async () => {
            const getUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            const getPhotoAlbum = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            setUserDetail(getUser.data)
            setPhotoAlbums(getPhotoAlbum.data)
            navigate(`/users/${id}`)
        }
        getUserId()
    }
    
    return <UserContext.Provider value={{users, userId, setUserId, userDetail, handleGetUserId, photoAlbums, setPhotoAlbums}}>
        { children }
    </UserContext.Provider>
}