import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Photos = () => {
  const [photos, setPhotos] = useState([])
  const [countLoad, setCountLoad] = useState(12)
  const [searchId, setSearchId] = useState()
  const [submitSearchId, setSubmitSearchId] = useState(1)

  useEffect(() => {
    const getPhotos = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos`, {
        params: {
          _start: 0,
          _limit: countLoad,
          albumId: null || searchId
        }
      });
      setPhotos(data)
    }
    getPhotos()
  }, [countLoad, submitSearchId])

  const increaseStartLoad = () => {
    setCountLoad(countLoad + 12)
  }
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setCountLoad(12)
    setSubmitSearchId(searchId)
  }
  return (
    <div className='py-2 container'>
      <div className="row"><h2 className="h2 fw-bold">Photos</h2></div>
      <div className="my-4 row">
        <div className="col-12">
          <form action="#" className='d-flex items-center gap-2'>
            <div className="">
              <select name="filter" className='form-select'>
                <option value="albumId">Album Id</option>
              </select>
            </div>
            <div className="">
              <input name="search" className='form-control' 
              placeholder='Search by album id' 
              onChange={e => setSearchId(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary'
            onClick={handleSubmitSearch}>Search</button>
          </form>

        </div>
      </div>
      <div className="row">
        {photos && photos.map(photo => (
          <div key={photo.id} className='mb-4 col-3'>
            <div className="w-100 card">
              <img className="card-img-top" src={photo.url} />
              <div className="card-body">
                <div className="w-full text-truncate card-title h5">
                  {photo.title}
                </div>
                <p className="mb-1 card-text">Id: #{photo.id}</p>
                <p className="card-text">Album Id: #{photo.albumId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12">
          <div className="w-100 text-center">
            <button type='button' className='btn btn-primary'
            onClick={increaseStartLoad}>Load more</button>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Photos