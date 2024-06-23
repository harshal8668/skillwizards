import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactForm() {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const accessKey = "8e32843e-15d5-4dd4-bf7e-5bf9a14a31c7";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "SkillWizard Website",
      subject: "New Contact Message from your Skillwizard Website",
    },
    onSuccess: (msg = "Success! Get back to you soon...", data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg = "Error", data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div>
      <div className="form-container">
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

        <div>{result}</div>
      </div>
    </div>
  );
}

function ModalContainer(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-header">
          <h4>Get in Touch</h4>
          <ContactForm></ContactForm>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>

      </Modal.Footer> */}
    </Modal>
  );
}

export default function Contact(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <p onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
        Contact Us
      </p>

      <ModalContainer show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
