import Modal from "react-bootstrap/Modal";
import React from "react";
import { useState} from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactForm() {
  const { register, reset, handleSubmit } = useForm();
  // const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
 
  const accessKey = "8e32843e-15d5-4dd4-bf7e-5bf9a14a31c7";


  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "SkillWizard Website",
      subject: "New Contact Message from your Skillwizard Website",
    },
    onSuccess: (msg = "Success! Get back to you soon...", data) => {
      console.log(data);
      // setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg = "Error", data) => {
      // setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" {...register("name", { required: true })} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" {...register("email", { required: true })} />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input type="tel" {...register("Contact", { required: true })} />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea {...register("message", { required: true })}></textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit Form
          </button>
        </form>

        <div style={{color:'green',fontWeight:'500'}}>{result}</div>
    
    </>
  );
}


export default function Contact(props) {

  const [show, setShow] = useState(false);

  return (
    <>
      <li style={{cursor:'pointer'}} onClick={() => setShow(true)}>
        Contact Us
      </li>

      <Modal  className="modalContainer"  show={show}  onHide={() => setShow(false)}  dialogClassName="modal-90w "  aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header  className="modalHeaderContainer" closeButton closeVariant='white'>
          <Modal.Title  className="modalTitle" id="example-custom-modal-styling-title">
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyContainer ">
          <ContactForm></ContactForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
