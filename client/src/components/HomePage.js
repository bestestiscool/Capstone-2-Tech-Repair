import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header id="header" className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 intro-text">
                <h1>
                  Welcome to <span>TechRepair Experts!</span>
                </h1>
                <p>Your go-to platform for expert tech repair insights and cost estimation tools.</p>
                <a href="/about" className="btn btn-custom btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
