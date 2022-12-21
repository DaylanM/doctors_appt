import { useEffect, useState } from "react";

const DoctorForm = ({addDoctor, id, first_name, last_name, practice, updateDoctor, setEdit}) => {
  const [ doctor, setDoctor] = useState ({first_name:'', last_name:'', practice:'', })

  useEffect (() => {
    if (id) {
      setDoctor({first_name, last_name, practice,})
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
   if (id) {
     updateDoctor(id, doctor)
     setEdit(false)
    } else {
      addDoctor(doctor)
   }

    setDoctor({ first_name: '', last_name: '', practice:'', })

  }

  return (
    <>
    <h1>{id?'Update':'Create'}Doctor</h1>
    <form onSubmit={handleSubmit}>
      <label>Doctor First Name</label>
      <input
        name='first_name'
        value={doctor.first_name}
        onChange={(e) => setDoctor({...doctor, first_name: e.target.value })}
        required
      />
       <label>Doctor Last Name</label>
      <input
        name='last_name'
        value={doctor.last_name}
        onChange={(e) => setDoctor({...doctor, last_name: e.target.value })}
        required
        />
         <label>practice</label>
      <input
        name='practice'
        value={doctor.practice}
        onChange={(e) => setDoctor({...doctor, practice: e.target.value })}
        required
        />
        <button type='submit'> Submit </button>
      </form>
      </>
  )
}
export default DoctorForm;