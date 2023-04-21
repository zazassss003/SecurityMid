import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home"
import Leave from "./pages/Leave"
import Comment from "./pages/Comment"
import Registration from './pages/Registration';
import Login from './pages/Login';
import { AuthContext } from './helper/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Navbar, Nav } from 'react-bootstrap';


function App() {
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3001/auth/auth', {
      headers: {
        accessToken: localStorage.getItem('accessToken')
      }
    }).then((response) => {
      if (response.data.error) {
        setAuthState(false)
      } else {
        setAuthState(true)
      }
    })
  }, [])

  const logout = () => {
    localStorage.removeItem("accessToken")
    setAuthState(false)
  }
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant='dark'>
        <Container
          className="d-flex align-items-start justify-content-start"
        >
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <AuthContext.Provider value={{ authState, setAuthState }}>
            <Nav>
              <Nav.Link as={Link} to="/leavecomment"> Leave Comment!</Nav.Link>
              <Nav.Link as={Link} to="/Comment"> Comment Board</Nav.Link>
              {!authState ? (
                <>
                  <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                  <Nav.Link as={Link} to="/registration"> Registration </Nav.Link>
                </>
              ) : (
                <button onClick={logout}> Logout </button>
              )
              }
            </Nav>
          </AuthContext.Provider>
        </Container>
      </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leavecomment" element={<Leave />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;


