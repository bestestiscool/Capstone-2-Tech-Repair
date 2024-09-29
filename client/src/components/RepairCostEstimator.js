import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faTools, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const RepairCostEstimator = () => {
  const [step, setStep] = useState(0);  // Step in the multi-step form 
  const [deviceType, setDeviceType] = useState('');
  const [model, setModel] = useState('');
  const [problem, setProblem] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(null);
  
  const [repairCosts, setRepairCosts] = useState([]);  // Store repair costs fetched from the database

  useEffect(() => {
    // Fetch repair costs from the backend when the component loads
    axios.get('https://techrepair-experts.onrender.com/api/repair-costs')
      .then(response => {
        setRepairCosts(response.data);  // Store the repair costs in state
      })
      .catch(error => {
        console.error('Error fetching repair costs:', error);
      });
  }, []);

  // Handle form steps and reset estimated cost on step change
  const handleNextStep = () => {
    setStep(step + 1);
    setEstimatedCost(null);  // Reset estimate when moving forward to next step
  };
  
  const handlePreviousStep = () => {
    setStep(step - 1);
    setEstimatedCost(null);  // Reset estimate when moving back to make changes
  };

  // Reset form for a new estimate
  const resetForm = () => {
    setStep(0);
    setDeviceType('');
    setModel('');
    setProblem('');
    setEstimatedCost(null);
  };

  // Calculate the estimate based on the user's selections
  const calculateEstimate = () => {
    const selectedCost = repairCosts.find(cost =>
      cost.device_type === deviceType && cost.model === model && cost.repair_type === problem
    );
    
    setEstimatedCost(selectedCost ? selectedCost.cost : 'Price not available');
  };

  // Get the available models for the selected device type
  const getAvailableModels = () => {
    const models = repairCosts
      .filter(cost => cost.device_type === deviceType)
      .map(cost => cost.model);
    return [...new Set(models)];  // Remove duplicates
  };

  // Get the available problems for the selected model
  const getAvailableProblems = () => {
    const problems = repairCosts
      .filter(cost => cost.device_type === deviceType && cost.model === model)
      .map(cost => cost.repair_type);
    return [...new Set(problems)];  // Remove duplicates
  };

  // Progress bar percentage calculation
  const getProgress = () => ((step + 1) / 4) * 100;  

  return (
    <div className="container my-5 animate__animated animate__fadeIn">
      <h2 className="text-center mb-4">Repair Cost Estimator</h2>

      {/* Progress Bar */}
      <div className="progress mb-4">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-info"
          role="progressbar"
          style={{ width: `${getProgress()}%` }}
          aria-valuenow={getProgress()}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <div className="card shadow p-4 animate__animated animate__fadeIn">
        {step === 0 && (
          <div className="text-center">
            <FontAwesomeIcon icon={faMobileAlt} size="4x" className="mb-3" />
            <h3>Select Device Type</h3>
            <select className="form-select my-3" value={deviceType} onChange={(e) => setDeviceType(e.target.value)}>
              <option value="">Select Device</option>
              {[...new Set(repairCosts.map(cost => cost.device_type))].map((device, index) => (
                <option key={index} value={device}>{device}</option>
              ))}
            </select>
            <button className="btn btn-primary" onClick={handleNextStep} disabled={!deviceType}>Next</button>
          </div>
        )}

        {step === 1 && (
          <div className="text-center">
            <FontAwesomeIcon icon={faLaptop} size="4x" className="mb-3" />
            <h3>Select Model</h3>
            <select className="form-select my-3" value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="">Select Model</option>
              {getAvailableModels().map((model, index) => (
                <option key={index} value={model}>{model}</option>
              ))}
            </select>
            <button className="btn btn-secondary me-2" onClick={handlePreviousStep}>Back</button>
            <button className="btn btn-primary" onClick={handleNextStep} disabled={!model}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <FontAwesomeIcon icon={faTools} size="4x" className="mb-3" />
            <h3>Select Problem</h3>
            <select className="form-select my-3" value={problem} onChange={(e) => setProblem(e.target.value)}>
              <option value="">Select Problem</option>
              {getAvailableProblems().map((problem, index) => (
                <option key={index} value={problem}>{problem}</option>
              ))}
            </select>
            <button className="btn btn-secondary me-2" onClick={handlePreviousStep}>Back</button>
            <button className="btn btn-primary" onClick={handleNextStep} disabled={!problem}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <FontAwesomeIcon icon={faDollarSign} size="4x" className="mb-3" />
            <h3>Review & Get Estimate</h3>
            <p><strong>Device Type:</strong> {deviceType}</p>
            <p><strong>Model:</strong> {model}</p>
            <p><strong>Problem:</strong> {problem}</p>
            <button className="btn btn-secondary me-2" onClick={handlePreviousStep}>Back</button>
            <button className="btn btn-success" onClick={calculateEstimate}>Get Estimate</button>
          </div>
        )}

        {estimatedCost && step === 3 && (
          <div className="text-center mt-4 animate__animated animate__fadeInUp">
            <h3 className="fw-bold">Estimated Cost: {estimatedCost === 'Price not available' ? estimatedCost : `$${estimatedCost}`}</h3>
            <button className="btn btn-info mt-3" onClick={resetForm}>New Estimate</button> 
          </div>
        )}
      </div>
    </div>
  );
};

export default RepairCostEstimator;
