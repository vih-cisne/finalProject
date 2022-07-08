import {
    Routes,
    Route,
  } from "react-router-dom";

  import {Login } from "./Login";
  import { Home } from "./Home";
  import { Dashboard } from "./Dashboard";
  import { Checkout } from "./Checkout";
  import { AboutUs } from "./AboutUs";
  import { SignUp } from "./SignUp";
  import { FinancialStatement } from "./Financial Statement";
  
export const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Login />} />
                <Route path="home" element={<Home/>}>
                        <Route path="dashboard" element={<Dashboard />}>
                                <Route path="stats" element={<FinancialStatement/>}/>
                        </Route>
                        <Route path="checkout" element={<Checkout/>}/>
                        <Route path="about" element={<AboutUs/>}/>
                </Route>
                <Route path="signUp" element={<SignUp/>}/>
        </Routes>

    )
  }
  
