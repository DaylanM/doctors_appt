import DoctorShow from "./DoctorShow.js";

const DoctorList = ({doctors, deleteDoctor, updateDoctor}) => (
  <>
  { doctors.map( d =>
      <DoctorList
        key={d.id}
        {...d}
        updateDoctor={updateDoctor}
        deleteDoctor={deleteDoctor}
        />)
        }
      </>
)
export default DoctorList;