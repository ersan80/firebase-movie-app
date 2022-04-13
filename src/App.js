import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContexProvider from "./context/AuthContext"

const App = () => {
  return (
    <div>
      <AuthContexProvider>

     
    <AppRouter>

   </AppRouter> 
   </AuthContexProvider>
    </div>

  );
};

export default App;
