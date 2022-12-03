import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useParams } from "react-router-dom";

const PhotoAlbum = () => {
    const { photoAlbums, setPhotoAlbums } = useContext(UserContext)
    const [newAlbum, setNewAlbum] = useState("")
    const { userId } = useParams()

    // Delete Album
    const handleDelete = (albumId) => {
        const deleteALbum = async () => {
            await axios.delete(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            setPhotoAlbums(photoAlbums.filter(item => item.id !== albumId))
        }
        deleteALbum()    
    }
    const handleNewAlbum = (e) => {
        e.preventDefault()
        const postAlbum = async () => {
            const postData = {
                userId: Number(userId),
                id: Number(userId + 1),
                title: newAlbum,
            }
            const res = await axios.post(`https://jsonplaceholder.typicode.com/albums/`)
            setPhotoAlbums([...photoAlbums, postData])
        }
        postAlbum()
    }

  return (
    <div className="row">
        <div className="col-12">
            <div className="border-top pt-3 mb-3 row">
                <div className="col-8">
                    <h4 className="h4">Photo Albums: </h4>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-12 col-lg-6">
                    <form action="#" className="d-flex items-center gap-3">
                        <input type="text" className="form-control" placeholder="Title of new album" onChange={e => setNewAlbum(e.target.value)}/>
                        <button type="submit" className="flex-shrink-0 w-25 btn btn-success btn-lg" onClick={handleNewAlbum}>New Albums</button>
                    </form>
                </div>
            </div>
            <div className="row">
                {photoAlbums && photoAlbums.map((item, index) => (
                    <div key={item.id} className="mb-3 col-md-6">
                        <div className="d-flex items-center justify-content-between border rounded text-decoration-none text-black ">
                            <div className=" py-2 flex-shrink-0 border-end d-flex items-center justify-content-center w-10">
                                {index + 1}
                            </div>
                            <div className="py-2 w-100 px-4 text-truncate fw-bold text-start">
                                {item.title}
                            </div>
                            <div className="text-center flex-shrink-0 w-10 py-2">
                                <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(item.id)}> X </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PhotoAlbum