import React from "react";
import "./features.css";
import { FaDesktop, FaTools, FaArrowLeft } from "react-icons/fa"; // Import the icons from react-icons

export default function Features() {
  return (
    <div className="container feature px-4 py-5" id="hanging-icons">
      <div className="row row-cols-1 g-4 justify-content-center">
        {/* First feature element */}
        <div className="col-md">
          <div className="feature-item">
            <div className="icon-square bg-dark text-light">
              <FaDesktop size={32} /> {/* Use FaDesktop icon */}
            </div>
            <div className="feature-content">
              <h2>Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="col-auto d-flex align-items-center justify-content-center">
          <div className="arrow bg-dark rounded-circle">
            <FaArrowLeft size={16} className="text-white" /> {/* Use FaArrowLeft icon */}
          </div>
        </div>

        {/* Second feature element */}
        <div className="col-md">
          <div className="feature-item">
            <div className="icon-square bg-dark text-light">
              <FaTools size={32} /> {/* Use FaTools icon */}
            </div>
            <div className="feature-content">
              <h2>Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="col-auto d-flex align-items-center justify-content-center">
          <div className="arrow bg-dark rounded-circle">
            <FaArrowLeft size={16} className="text-white" /> {/* Use FaArrowLeft icon */}
          </div>
        </div>

        {/* Third feature element */}
        <div className="col-md">
          <div className="feature-item">
            <div className="icon-square bg-dark text-light">
              <FaTools size={32} /> {/* Use FaTools icon (example, you can change the icon) */}
            </div>
            <div className="feature-content">
              <h2>Featured title</h2>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}