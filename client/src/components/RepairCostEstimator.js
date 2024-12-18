import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop, faTools, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';


// Choose API URL based on the environment variable
const isSupabase = process.env.REACT_APP_USE_SUPABASE === 'true';
const API_URL = isSupabase
  ? process.env.REACT_APP_SUPABASE_API_URL // Supabase API URL
  : process.env.REACT_APP_LOCAL_API_URL;   // Local API URL

const RepairCostEstimator = () => {
  const [step, setStep] = useState(0); // Step in the multi-step form
  const [deviceType, setDeviceType] = useState(''); // Selected device type
  const [model, setModel] = useState(''); // Selected model
  const [problem, setProblem] = useState(''); // Selected problem
  const [estimatedCost, setEstimatedCost] = useState(null); // Estimated cost
  const [repairCosts, setRepairCosts] = useState([]); // Store repair costs fetched from the database
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch repair costs from the backend API when the component loads
  useEffect(() => {
    axios
      .get(`${API_URL}/api/repair-costs`)
      .then(response => {
        setRepairCosts(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => {
        console.error('Error fetching repair costs:', error);
        setError('Failed to fetch repair costs.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleNextStep = () => {
    setStep(step + 1);
    setEstimatedCost(null); // Reset estimate when moving forward to the next step
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    setEstimatedCost(null); // Reset estimate when moving back to make changes
  };

  const resetForm = () => {
    setStep(0);
    setDeviceType('');
    setModel('');
    setProblem('');
    setEstimatedCost(null);
  };

  const calculateEstimate = () => {
    const selectedCost = repairCosts.find(cost =>
      cost.deviceType === deviceType && cost.model === model && cost.repairType === problem
    );
    setEstimatedCost(selectedCost ? selectedCost.cost : 'Price not available');
  };

  // Get available models for the selected device type
  const getAvailableModels = () => {
    const models = repairCosts
      .filter(cost => cost.deviceType === deviceType)
      .map(cost => cost.model);
    return [...new Set(models)].sort();
  };

  // Get available problems for the selected device type and model
  const getAvailableProblems = () => {
    const problems = repairCosts
      .filter(cost => cost.deviceType === deviceType && cost.model === model)
      .map(cost => cost.repairType);
    return [...new Set(problems)].sort();
  };

  // Calculate the progress percentage based on the current step
  const getProgress = () => ((step + 1) / 4) * 100;

  if (loading) {
    return <p className="text-center">Loading repair costs...</p>;
  }

  return (
    <div className="repair-cost-estimator-bg">
      <div className="card-content animate__animated animate__fadeIn">
        <h2 className="text-center mb-4">Repair Cost Estimator</h2>

        {error && <p className="text-danger text-center">{error}</p>}

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

        {/* Main Content of the Estimator */}
        <div className="card-body">
          {step === 0 && (
            <div className="text-center">
              <FontAwesomeIcon icon={faMobileAlt} size="4x" className="mb-3" />
              <h3>Select Device Type</h3>
              <Select
                options={[...new Set(repairCosts.map(cost => cost.deviceType))].map(device => ({
                  label: device,
                  value: device
                }))}
                value={deviceType ? { label: deviceType, value: deviceType } : null}
                onChange={selectedOption => setDeviceType(selectedOption.value)}
                placeholder="Select Device"
                isSearchable={true}
              />
              <button className="btn btn-primary mt-3" onClick={handleNextStep} disabled={!deviceType}>Next</button>
            </div>
          )}

          {step === 1 && (
            <div className="text-center">
              <FontAwesomeIcon icon={faLaptop} size="4x" className="mb-3" />
              <h3>Select Model</h3>
              <Select
                options={getAvailableModels().map(model => ({
                  label: model,
                  value: model
                }))}
                value={model ? { label: model, value: model } : null}
                onChange={selectedOption => setModel(selectedOption.value)}
                placeholder="Select Model"
                isSearchable={true}
              />
              <button className="btn btn-secondary me-2" onClick={handlePreviousStep}>Back</button>
              <button className="btn btn-primary" onClick={handleNextStep} disabled={!model}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <FontAwesomeIcon icon={faTools} size="4x" className="mb-3" />
              <h3>Select Problem</h3>
              <Select
                options={getAvailableProblems().map(problem => ({
                  label: problem,
                  value: problem
                }))}
                value={problem ? { label: problem, value: problem } : null}
                onChange={selectedOption => setProblem(selectedOption.value)}
                placeholder="Select Problem"
                isSearchable={true}
              />
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
    </div>
  );
};

export default RepairCostEstimator;
