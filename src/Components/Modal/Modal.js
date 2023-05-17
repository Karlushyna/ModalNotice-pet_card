import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="title">Сute dog looking for a home</h2>
            <ul>
              <li className="item">
                <p className="item-title">Name:</p>
                <p className="item-description">back</p>
              </li>
              <li className="item">
                <p className="item-title">Birthday:</p>
                <p className="item-description">back</p>
              </li>
              <li className="item">
                <p className="item-title">Breed:</p>
                <p className="item-description">back</p>
              </li>
              <li className="item">
                <p className="item-title">Place:</p>
                <p className="item-description">back</p>
              </li>
              <li className="item">
                <p className="item-title">The sex:</p>
                <p className="item-description">back</p>
              </li>
              <li className="item">
                <p className="item-title">Email:</p>
                <p className="item-description">back</p>
              </li>
              <li className="item">
                <p className="item-title">Phone:</p>
                <p className="item-description">back</p>
              </li>
              <li className="item">
                <p className="item-title">Comments:</p>
                <p className="item-description">back</p>
              </li>
              
            </ul>
            <div className="button-wrap">
              <button className="modal-button">Contact</button>
              <button className="modal-button">Add to</button>
              
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
