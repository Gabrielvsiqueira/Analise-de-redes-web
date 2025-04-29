import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

type CustomInputProps = {
    className: string;
    id: string;
    placeholder?: string;
}

function CustomInput({className, placeholder}: CustomInputProps) {
    <>
    return (
      <InputGroup className={className}>
        <InputGroup.Text ></InputGroup.Text>
        <Form.Control
          placeholder={placeholder} />
      </InputGroup>
    )
    </>
}

export default CustomInput;