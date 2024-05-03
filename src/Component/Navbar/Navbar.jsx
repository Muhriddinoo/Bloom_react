import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-text">
            <h1>Bloom Architechture</h1>
          </div>
          <div onClick={toggleModal} className="navbar-icon">
            <div className="navbar-icon-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
              >
                <path
                  d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                  fill="#E3E7F2"
                />
              </svg>
            </div>
            <p>Заказать проект</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-text">
              <h2>Back Call</h2>
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
            </div>
            <div className="input">
              <input type="text" className="input1" placeholder="Your Name" />
              <input
                type="text"
                className="input1"
                placeholder="Phone Number"
              />
            </div>
            <div className="modal-modal">
              <p>Leave a request and we will contact you</p>
              <div className="modal-icon">
                <div className="modal-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="70"
                    viewBox="0 0 90 90"
                    fill="none"
                  >
                    <path
                      d="M66.6789 31.2201C66.8552 36.6117 69.5245 40.6488 72.0052 42.7478L73.8676 40.5467C71.9309 38.9079 69.7071 35.6054 69.5606 31.1259C69.4155 26.6871 70.7163 21.4407 77.4441 14.7129L75.4053 12.6741C68.6774 19.402 63.4312 20.7028 58.9924 20.5576C54.5129 20.4111 51.2103 18.1874 49.5715 16.2506L47.3705 18.1131C49.4695 20.5937 53.5065 23.263 58.8981 23.4393C61.0096 23.5084 63.2926 23.1944 65.7138 22.3657L12.7922 75.2873L14.831 77.3261L67.7525 24.4045C66.9238 26.8257 66.6098 29.1086 66.6789 31.2201Z"
                      fill="#E3E7F2"
                    />
                  </svg>
                </div>
                <div className="modal-icon-text">
                  <h3>Order Project</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
