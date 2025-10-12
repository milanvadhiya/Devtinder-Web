
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import ForgotAndResetPassword from "./components/ForgotAndResetPassword"
import Connections from "./components/Connection"
import Request from "./components/Request"
import Premium from "./components/Premium"

function App() {


  return (
    <>
      <Provider store={appStore}> 
    {/* <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<div><Body/></div>}>
          <Route path="/"  element={<Feed/>}/>
           <Route path="/forgotPassword" element={<ForgotAndResetPassword />} />
          <Route path="/login"  element={<Login/>}/>
          <Route path="/profile"  element={<Profile/>}/>
            <Route path="/connections"  element={<Connections/>}/>
            <Route path="/requests"  element={<Request/>}/>
      </Route>
     </Routes>
    </BrowserRouter> */}
    <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
               <Route path="/forgotPassword" element={<ForgotAndResetPassword />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Request />} />
              <Route path="/premium" element={<Premium />} />
              
             
            </Route>
          </Routes>
        </BrowserRouter>

    {/* <BrowserRouter basename="/">
  <Routes>
    <Route path="/" element={<div><Body/></div>}>
      <Route path="/" element={<Feed/>}/>
      <Route path="/forgotPassword" element={<ForgotAndResetPassword />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/connections" element={<Connections/>}/>
      <Route path="/requests" element={<Request/>}/>
    </Route>
  </Routes>
</BrowserRouter> */}

  </Provider>
    </>
  )
}

export default App
