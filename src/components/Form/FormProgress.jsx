import PropTypes from 'prop-types';

export const FormProgress = ({ 
  title = 'Form Progress', 
  currentStep = 1, 
  totalSteps = 1,
}) => {
  // Ensure currentStep doesn't exceed totalSteps
  const safeCurrentStep = Math.min(currentStep, totalSteps);
  
  // Calculate progress width
  const progressPercentage = (safeCurrentStep / totalSteps) * 100;

  return (
    <div className="w-full my-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Step {safeCurrentStep}/{totalSteps}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div 
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden h-1"
      >
        <div
          className="h-full rounded-full transition-all duration-300 ease-in-out bg-[#25A2C3]"
          style={{ 
            width: `${progressPercentage}%`,
          }}
        />
      </div>
    </div>
  );
};

// PropTypes for type checking and documentation
FormProgress.propTypes = {
  title: PropTypes.string,
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
  barColor: PropTypes.string,
  barHeight: PropTypes.string
};

export default FormProgress;