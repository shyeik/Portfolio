import React from "react";

const Mission = () => {
  return (
    <div className="bg-[#1C1C1C] w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8">
        {/* 2 */}
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <span className="card-title">Bakery Easy</span>
              <p className="card-content">
                Frontend for a bakery, where users can order cakes and customize
                online.
              </p>
              <a
                className="see-more"
                href="https://bakeryeasy-frontend.vercel.app/"
                alt="bakeryeasy"
              >
                <span>Visit</span>
              </a>
            </div>
            <div className="date-box">
              <span className="month">Aug 2024 - May 2025</span>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <span className="card-title">Garbage Notifier</span>
              <p className="card-content">
                For residents Commonwealth, this app notifys them about the
                collection schedule.
              </p>
              <a
                className="see-more"
                href="https://garbage-notifier.vercel.app/"
                alt="garbage"
              >
                <span>Visit</span>
              </a>
            </div>
            <div className="date-box">
              <span className="month">June 2025 -July 2025</span>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <span className="card-title">Project 3</span>
              <p className="card-content">Working on it</p>
              <span className="see-more">See More</span>
            </div>
            <div className="date-box">
              <span className="month">TBA</span>
              <span className="month">N/A</span>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <span className="card-title">Project 4</span>
              <p className="card-content">Working on it</p>
              <span className="see-more">See More</span>
            </div>
            <div className="date-box">
              <span className="month">TBA</span>
              <span className="month">N/A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
