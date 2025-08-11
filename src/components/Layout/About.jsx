import React from "react";

const About = () => {
  return (
    <div className="bg-black w-full h-150">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        {/* 1 */}
        <div class="parent">
          <div class="card">
            <div class="content-box">
              <span class="card-title">Garbage Notifier</span>
              <p class="card-content">
                For new residents, this app notifys them about the garbage
                collection schedule.
              </p>
              <a
                class="see-more"
                href="https://garbage-notifier.vercel.app/"
                alt="garbage"
              >
                <span>See more</span>
              </a>
            </div>
            <div class="date-box">
              <span class="month">July</span>
              <span class="date">2025</span>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div class="parent">
          <div class="card">
            <div class="content-box">
              <span class="card-title">Project 2</span>
              <p class="card-content">Working on it</p>
              <span class="see-more">See More</span>
            </div>
            <div class="date-box">
              <span class="month">TBA</span>
              <span class="date">N/A</span>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div class="parent">
          <div class="card">
            <div class="content-box">
              <span class="card-title">Project 3</span>
              <p class="card-content">Working on it</p>
              <span class="see-more">See More</span>
            </div>
            <div class="date-box">
              <span class="month">TBA</span>
              <span class="date">N/A</span>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div class="parent">
          <div class="card">
            <div class="content-box">
              <span class="card-title">Project 4</span>
              <p class="card-content">Working on it</p>
              <span class="see-more">See More</span>
            </div>
            <div class="date-box">
              <span class="month">TBA</span>
              <span class="date">N/A</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
