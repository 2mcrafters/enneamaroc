import React from 'react';

/**
 * FormFixWrapper - A component to wrap around forms with input visibility issues
 * This component provides a localized style fix when global styles are not enough
 */
const FormFixWrapper = ({ children }) => {
  return (
    <div className="form-fix-wrapper">
      <style jsx>{`
        /* Apply these styles to any input elements within this wrapper */
        .form-fix-wrapper :global(input),
        .form-fix-wrapper :global(textarea),
        .form-fix-wrapper :global(select) {
          background-color: #ffffff !important;
          color: #333333 !important;
          border: 1px solid #d1d5db !important;
        }

        /* Placeholder styling */
        .form-fix-wrapper :global(input::placeholder),
        .form-fix-wrapper :global(textarea::placeholder) {
          color: #9ca3af !important;
          opacity: 1;
        }

        /* Focus states */
        .form-fix-wrapper :global(input:focus),
        .form-fix-wrapper :global(textarea:focus),
        .form-fix-wrapper :global(select:focus) {
          border-color: #0a83ca !important;
          box-shadow: 0 0 0 3px rgba(10, 131, 202, 0.2) !important;
          outline: none !important;
        }

        /* Special treatment for checkbox and radio */
        .form-fix-wrapper :global(input[type="checkbox"]),
        .form-fix-wrapper :global(input[type="radio"]) {
          background-color: transparent !important;
          border: 1px solid #d1d5db !important;
        }

        /* Make sure all labels are visible */
        .form-fix-wrapper :global(label) {
          color: #333333 !important;
        }
      `}</style>
      {children}
    </div>
  );
};

export default FormFixWrapper;
