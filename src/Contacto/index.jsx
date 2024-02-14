import Form from 'react-bootstrap/Form';
import "./styles.css"

const Contacto = () => {
    return (
      
      <>
      <div>
        <h1>Cuentanos... ¿En que te podemos ayudar?</h1>
        
      </div>
      <Form className='card border-primary border-top-3d bg-primary-subtle'>
      <Form.Group className="mb-3 control" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 control" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
      </>
    );
  };
  
  export default Contacto;