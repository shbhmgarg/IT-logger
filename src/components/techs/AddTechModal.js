import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter a First and Last name " });
    } else {
      const newTech = { firstName, lastName };

      addTech(newTech);

      // Clear Fields
      setFirstName("");
      setLastName("");
      M.toast({ html: "Technician added successfully" });
    }
  };

  return (
    <div id='add-tech-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add New Technician</h4>
        <div className='row' style={{ marginTop: "20px" }}>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={(e) => e.preventDefault()}
          className='modal-close waves-effect red btn'
          style={{ marginRight: "10px" }}
        >
          Close
        </a>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
