# TypeScript Extension for EAUCOLE Design System
Design System for building consistent and standardised EAUCOLE related web apps & services written in TypeScript.

### Notice
This is an extension for the EAUCOLE Design System. Please refer to the official documentation https://design.eaucole.com/docs

### Setup
Import the <code>EAUDesignSystem</code> and wrap your <code>App</code> component with it.
```tsx

// Ensure design-system folder is in the correct path of your src folder
// Adjust path if needed
import EAUDesignSystem from "./design-system/EAUDesignSystem.tsx";

function App() {

  return (

    <EAUDesignSystem>
      <div className="App"></div>
    </EAUDesignSystem>
    
  );

}

export default App;
```