import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {useEffect,useState} from "react";
import Register from "./components/register_component";
import {Login} from "./components/login_component";
import Profile from "./components/profile_component";
import { Router, Switch, Route, Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {logout_action} from "./actions/auth_action"
import {history} from "./helpers/history_helper";
import Home from "./components/home_component";
import Edit from "./components/grud_components/edit_component";
import Create from "./components/grud_components/create_component";
import Detail from "./components/grud_components/detail_component";
import {clearMessage} from "./actions/message_action";
import { Layout, Menu } from 'antd';




function App() {
  const {isLoggindIn,user} = useSelector(state => state.auth_reducers)
  
  const dispatch = useDispatch();
  const { Header, Content } = Layout;
  
  const onLogout = (event) => {
    event.preventDefault();
    dispatch(logout_action());
  }

  useEffect(() => {
    
    history.listen((location) => dispatch(clearMessage()));
  
  }, [dispatch]);
  
  return (
    <Router history = {history}>
    <div className="App">
       <Layout className="layout">
       <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
             <Link to={"/home"} >
                  Main
              </Link>
          </Menu.Item>
          { !isLoggindIn && (  
            <>     
                <Menu.Item key="2">  
                  <Link to={"/login"} >
                    Login
                  </Link>
                </Menu.Item>
                
                <Menu.Item key="3">
                  <Link to={"/register"} >
                    Sign Up
                  </Link>
                </Menu.Item>              
                </>
              )}
                { isLoggindIn && (
                  <>
                <Menu.Item key="4">
                <Link to={"/profile"} className="nav-link">
                      profile
                  </Link>
                </Menu.Item>    
                    <Menu.Item key="5">
                    <Link onClick={onLogout} to={'/'} className="nav-link">
                      Logout
                    </Link>
                    </Menu.Item>
                  </>         
                )} 
        </Menu>
      </Header>       
      <Content style={{ padding: '0 50px',margin:'50px 0 0 0' }}>
      <div className="site-layout-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />  
            <Route exact path="/detail" component={Detail} /> 
            <Route exact path="/edit" component={Edit} />   
            <Route exact path="/add" component={Create} />         
          </Switch>
        </div>
    </Content>    
     
        </Layout>
        </div>
    </Router>
  );
}

export default App;
