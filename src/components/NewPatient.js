import {AiOutlineUserAdd} from 'react-icons/ai'

const NewPatient = ({patientPopUp}) => {
    return (
        <div className="addPatient" onClick={patientPopUp}>
            <p><span><AiOutlineUserAdd></AiOutlineUserAdd></span> <span> Add New Patient</span></p>
        </div>
    )
}

export default NewPatient