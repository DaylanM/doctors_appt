import { useState, useEffect } from "react";

const UserForm = ({addUser, setAdd, id, first_name, last_name, dob, img, updateUser, setEdit}) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', dob: ''})

  useEffect ( () => {
    if (id) {
      setUser({ first_name, last_name, dob,})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
      setAdd(false)
    }
    setUser({ first_name: '', last_name: '', dob: ''})
  }

  return (
    <>
      onsSubmit={handleSubmit}
      <label>First Name</label>
      <form
        name='first_name'
        value={user.first_name}
        onChange={(e) => setUser ({ ...user, first_name: e.target.value })}
        required
      ></form>
    
    </>
  )
}

export default UserForm;