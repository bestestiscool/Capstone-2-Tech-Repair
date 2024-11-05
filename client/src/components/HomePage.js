import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="text-center my-5">
        <h1 className="display-4">Welcome to TechRepair Experts!</h1>
        <p className="lead">Your go-to platform for expert tech repair insights and cost estimation tools.</p>
      </header>

      {/* YouTube Channel Showcase Section */}
      <section className="text-center my-4">
        <h2 className="h4">Discover the TechRepair Experts YouTube Channel</h2>
        <p>Explore in-depth guides, tips, and step-by-step repair videos for your devices. Our videos simplify repairs and give you the confidence to tackle issues at home.</p>
        <a href="https://www.youtube.com/channel/TechRepairExperts" className="btn btn-primary">
          Visit our YouTube Channel
        </a>
      </section>

      {/* Cost Estimator Section */}
      <section className="text-center my-4">
        <h2 className="h4">Estimate Your Repair Costs</h2>
        <p>With our repair cost estimator, you can easily get an idea of potential repair costs before committing. Whether it’s a phone screen replacement or laptop repair, we help you make informed decisions.</p>
        <a href="/repair-cost-estimator" className="btn btn-success">
          Try the Cost Estimator
        </a>
      </section>
    </div>
  );
};

export default HomePage;
