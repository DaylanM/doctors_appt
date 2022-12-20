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
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          placeholder="First Name"
          name='first_name'
          value={user.first_name}
          onChange={(e) => setUser ({ ...user, first_name: e.target.value })}
          required
        />
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          name='last_name'
          value={user.last_name}
          onChange={(e) => setUser ({...user, last_name: e.target.value})}
          required
        />
        <label>Date of Birth</label>
        <input
          placeholder="DD-MM-YYYY"
          name="dob"
          value={user.dob}
          onChange={(e) => setUser ({...user, dob: e.target.value})}
          required
        />
        <button type='submit'>Submit</button>
      </form>

    </>
  )
}

export default UserForm;