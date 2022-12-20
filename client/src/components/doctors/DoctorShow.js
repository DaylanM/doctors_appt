import {useState} from 'react'
import DoctorForm from './DoctorForm';

const DoctorShow = ({id, first_name, last_name, practice, updateDoctor, deleteDoctor} ) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
    {
      editing ? 
      <>
      <DoctorForm
         id={id}
         first_name ={first_name}
         last_name ={last_name}
         practice ={practice}
         updateDoctor ={updateDoctor}
         setEdit={setEdit}
         />
         <button onClick= {() => setEdit(false)}>
         Cancel
         </button>
         </>
         :
         <>
         <h2>{first_name}</h2>
         <h3>{last_name}</h3>
         <h4>{practice}</h4>
         <button
         onClick={() => setEdit(true)}>
         Edit?
         </button>
         <button onClick={() => deleteDoctor(id)}>
         Delete?
         </button>
         </>
    }
    </>
  )
}
export default DoctorShow;