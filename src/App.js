import React from "react";
<<<<<<< HEAD
import AppRouter from "./router/AppRouter";
import AuthContexProvider from "./context/AuthContext"
=======
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
>>>>>>> b56cc861ebf91c757180bef6b050ee945ba48adb

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <AuthContexProvider>

     
    <AppRouter>

   </AppRouter> 
   </AuthContexProvider>
=======
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
>>>>>>> b56cc861ebf91c757180bef6b050ee945ba48adb
    </div>

  );
};

export default App;
