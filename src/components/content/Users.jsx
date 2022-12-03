import { useEffect, useState, useContext } from 'react';
import { Table } from 'react-bootstrap';

import { UserContext } from '../Context/UserContext';


const Users = () => {
  const { users, setUserId, handleGetUserId } = useContext(UserContext);
  return (
    <div className='py-2 container'>
      <div className="row">
        <div className="col-12"><h2 className="h2 fw-bold">Users</h2></div>
        <div className="col-12">
          <Table className='table table-striped table-hover'>
            <thead className='border-bottom border-dark'>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>phone</th>
                <th>website</th>
                <th>city</th>
                <th>company name</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user) => (
                <tr key={user.id} className="cursor-pointer"
                onClick={() => handleGetUserId(user.id)}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.address.city}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Users