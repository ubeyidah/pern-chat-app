import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "sonner";
import Chat from "./pages/Chat";
import PublicLayout from "./components/PublicLayout";
import AuthLayout from "./components/AuthLayout";
import useAuthentication from "./hooks/useAuthentication";
import { useEffect } from "react";
import Loader from "./pages/Loader";

const App = () => {
  const { account, loading } = useAuthentication();
  useEffect(() => {
    account();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Toaster theme="dark" />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
