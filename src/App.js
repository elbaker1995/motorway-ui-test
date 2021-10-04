import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const SignUpForm = React.lazy(() => import(`./SignUp`));
const Images = React.lazy(() => import(`./Images`));

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <React.Suspense fallback={<p>loading...</p>}>
          <SignUpForm />
        </React.Suspense>
        <React.Suspense fallback={<p>images loading...</p>}>
          <Images />
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
