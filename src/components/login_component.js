
import {useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {login_action} from "../actions/auth_action";
import { Form, Input, Button,Modal } from 'antd';
import {layout} from '../helpers/layout';
import {SET_MESSAGE}  from "../actions/type";
const Login = ({history,IsVisible,msgError})=>{
         
       const [visibleLogin,setVisibleLogin] = IsVisible;
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const {isLoggindIn} = useSelector(state=>state.auth_reducers);
       
       const dispatch = useDispatch();
       
       const onChangeEmail = (event) => {
              const email = event.target.value;
              setEmail(email);
       };
          
       const onChangePassword = (event) => {
              const password = event.target.value;
              setPassword(password);
       };
      
      
       const handleLogin = (event) => {
              
              dispatch(login_action(email,password)).then(()=>{
                          closeModel();                            
                     }).catch(()=>{
                        
              });
      
       }

       const okCloseModel = () =>{
        setTimeout(() => {        
        }, 2000);
      }
      const closeModel = () => {
        setVisibleLogin(false);
        msgerror();
      }
    
      const msgerror = () => {
    
        dispatch({
          type:SET_MESSAGE,
          payload:""
  });
      }
 return (    
        <Modal
          title="Авторизация"
          centered
          visible={visibleLogin}
          onOk = {okCloseModel}     
          onCancel = {closeModel}
          footer={[
            <>
               <Button form="loginForm" key="cansle" onClick={closeModel} type="danger" htmlType="reset">
                Отмена
            </Button>
              <Button form="loginForm" key="submit" onClick={okCloseModel} type="primary" htmlType="submit">
                Ok
            </Button>
         </>
          ]}
        >
    
       { !isLoggindIn && ( 
              <>
     
       <Form
       id="loginForm"
       onFinish={ handleLogin}
       {...layout}
       name="basic"
       initialValues={{
         remember: true,
       }}
       
     >
         <div
       style={{
        margin: "5",
        width: "60%",
        color:"#cc0000",
        border: "1px",
        
       }}
       >
            {msgError}
    
       </div>
       <Form.Item

         label="email"
         name="email"
        
         rules={[
           {
             required: true,
             message: 'Укажите email!',
           },
           {
            type: "email",
            message:'Укажите корректный email!'
          },
         ]}
       >
         <Input  
              onChange={onChangeEmail}
              value={email}
         />
       </Form.Item>
 
       <Form.Item
         label="Password"
         name="password"
       
         rules={[
          {
            required: true,
            message:  'Укажите пароль!',
          },
          {
            min: 8,     
            message:  "Пароль должен быть  больше 8 символов" 
         },
         ]}
       >
         <Input.Password 
              onChange={onChangePassword}
              value={password}
         />
       </Form.Item>
 
     </Form>
     </>
     )}
     </Modal>
   )
}

export default Login;