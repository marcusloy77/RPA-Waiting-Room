import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import './AddPatient.css'

const AddPatient = ({popup, addNewPatient, cancel}) => {
    if (popup) {
    return (
            <div className="popup">

                <Form>
                    <Form.Group className='mb-3'>
                        <InputGroup className="mb-3">
                            <Form.Label>Patient Identifier: </Form.Label>
                            <Form.Control type="id" placeholder="'red shirt'" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Label typeof="time">Time To Observe For: </Form.Label>
                            <Form.Control aria-label="time to wait" placeholder="15" />
                            <InputGroup.Text>:00 mins</InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <Form.Control placeholder="Time Vaccinated"/>
                            <Button variant="outline-secondary">AM</Button>
                            <Button variant="outline-secondary">PM</Button>
                        </InputGroup>

             
                        <Button variant="primary" type="submit" onClick={addNewPatient}> Add </Button>
                        <Button variant="primary" type="submit" onClick={cancel}> Cancel</Button>

                    </Form.Group>
                </Form>
            </div>
        )
    }
    else {
        return <></>
    }
}

export default AddPatient