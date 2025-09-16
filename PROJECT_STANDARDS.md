# Ennéagramme Maroc - Frontend Project

## 🚀 Project Overview

This is a modern React application for Ennéagramme Maroc, a training center specializing in the Enneagram. The project is built with Vite for fast development and optimized builds.

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── About/
│   ├── Header/         # Header components (Header1, Header2, etc.)
│   ├── Common/         # Shared components (BreadCumb, PrivateRoute, etc.)
│   └── ...
├── Pages/              # Page components
├── Layout/             # Layout components
├── Routes/             # Routing configuration
├── services/           # API services and business logic
├── utils/              # Utility functions and helpers
│   ├── constants.js    # App-wide constants
│   ├── helpers.js      # Common utility functions
│   ├── logger.js       # Logging utility
│   ├── validation.js   # Form validation utilities
│   └── errorHandling.js # Error handling
├── Data/               # Mock data and static content
└── assets/             # Static assets (images, CSS, etc.)
```

## 🛠️ Best Practices Implemented

### 1. Code Organization
- **Component Structure**: Components are organized by feature/type
- **Separation of Concerns**: Business logic in services, UI logic in components
- **Constants Management**: Centralized constants in `utils/constants.js`
- **Utility Functions**: Reusable helpers in `utils/helpers.js`

### 2. Performance Optimization
- **useCallback**: Memoized event handlers to prevent unnecessary re-renders
- **useRef**: Used for DOM references and storing mutable values
- **Lazy Loading**: Components can be lazy-loaded for better initial load times
- **Debounce/Throttle**: Utility functions for expensive operations

### 3. Error Handling
- **Global Error Handler**: Centralized error handling in `utils/errorHandling.js`
- **Logger Utility**: Structured logging with different levels
- **Try-Catch Blocks**: Proper error boundaries in async operations
- **User-Friendly Messages**: French error messages for better UX

### 4. Accessibility (A11y)
- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Support for keyboard interactions
- **Semantic HTML**: Proper use of semantic elements
- **Focus Management**: Proper focus handling for modals and dropdowns

### 5. Form Validation
- **Centralized Validation**: Reusable validation rules
- **Real-time Validation**: Immediate feedback on form fields
- **Custom Hook**: `useFormValidation` for consistent form handling
- **Localized Messages**: French validation messages

### 6. State Management
- **Local State**: useState for component-specific state
- **Refs for Performance**: useRef for non-reactive values
- **Memoization**: useCallback and useMemo where appropriate

## 🔧 Development Guidelines

### Component Creation
```jsx
import { useState, useCallback } from 'react';
import { logger } from '../utils/logger';

const MyComponent = ({ prop1, prop2 = 'defaultValue' }) => {
  const [state, setState] = useState(initialState);

  const handleClick = useCallback(() => {
    logger.userAction('button_click', { component: 'MyComponent' });
    // Handle click logic
  }, []);

  return (
    <div className="my-component">
      {/* Component content */}
    </div>
  );
};

export default MyComponent;
```

### Service Functions
```javascript
import { logger } from '../utils/logger';
import { errorHandler } from '../utils/errorHandling';

export const myService = {
  async fetchData() {
    try {
      logger.api('GET', '/api/data');
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      logger.error('Failed to fetch data', error, 'myService');
      throw errorHandler.handleApiError(error);
    }
  }
};
```

### Form Validation
```javascript
import { ValidationRules, useFormValidation } from '../utils/validation';

const MyForm = () => {
  const {
    values,
    errors,
    isValid,
    setValue,
    validateAll
  } = useFormValidation(
    { email: '', name: '' },
    {
      email: ValidationRules.requiredEmail,
      name: ValidationRules.required
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};
```

## 📝 Coding Standards

### 1. Naming Conventions
- **Components**: PascalCase (`MyComponent`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (`myVariable`)
- **Constants**: UPPER_SNAKE_CASE (`MY_CONSTANT`)
- **CSS Classes**: kebab-case (`my-class`)

### 2. Import Organization
```javascript
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Third-party imports
import { Link } from 'react-router-dom';

// 3. Internal imports
import MyComponent from './MyComponent';
import { myUtility } from '../utils/helpers';
import { CONSTANTS } from '../utils/constants';
```

### 3. File Structure
- One component per file
- Export default at the bottom
- Named exports for utilities
- Proper file extensions (.jsx for React components)

### 4. CSS/Styling
- Use existing CSS classes from the theme
- Create utility classes for common patterns
- Avoid inline styles unless absolutely necessary
- Maintain responsive design principles

## 🧪 Testing Guidelines

### Unit Testing
- Test individual components in isolation
- Mock external dependencies
- Test user interactions and state changes

### Integration Testing
- Test component interactions
- Test routing and navigation
- Test form submissions and validations

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Environment Variables
- `REACT_APP_API_URL`: API base URL
- `NODE_ENV`: Environment (development/production)

### Performance Optimization
- Code splitting with React.lazy
- Image optimization
- Bundle analysis with `npm run analyze`

## 📖 Documentation

### Component Documentation
Each component should include:
- Purpose and functionality
- Props interface and types
- Usage examples
- Accessibility considerations

### API Documentation
Service functions should include:
- Function purpose
- Parameters and return types
- Error handling
- Usage examples

## 🔒 Security Considerations

### Data Validation
- Validate all user inputs
- Sanitize data before processing
- Use proper error messages without exposing system details

### Authentication
- Secure token storage
- Proper logout handling
- Protected routes implementation

## 🌐 Internationalization (i18n)

### French Localization
- All user-facing text in French
- Proper date and currency formatting
- Cultural considerations for Morocco

### Future Considerations
- Support for Arabic
- Right-to-left (RTL) layout
- Locale-specific formatting

## 📞 Contact Information

For questions or support regarding this project:
- Email: contact@enneamaroc.com
- Phone: +212 662 062 032

## 📄 License

This project is proprietary software for Ennéagramme Maroc.

---

*Last updated: September 2025*
