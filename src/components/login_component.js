
import {useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import {login_action} from "../actions/auth_action";
import { Form, Input, Button, Space,Checkbox,message } from 'antd';
import  PageHeader  from './pageHeader';
import {tailLayout,layout} from '../helpers/layout';
 export const Login = ({history})=>{
      
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");

       const {isLoggindIn} = useSelector(state=>state.auth_reducers);
       const { messageEmail,messagePass,message:msg } = useSelector(state => state.message_reducers);
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
              event.preventDefault();
              dispatch(login_action(email,password)).then(()=>{
                            history.push("/");
                            
                     }).catch(()=>{
                           
              });
              

       }

     
 const msgerror = () => {
              message.error(msg);
};


 return (     
        <>
       <PageHeader
              style={{ padding: '0 50px',margin:'-30px 0 0 0' }}
              history= {history}
              title="Авторизация"
              
       />
       { !isLoggindIn && ( 
              <>
       { msg && 
              (<Space>
                     { msgerror()}
              </Space>)
       }   
       <Form
       {...layout}
       name="basic"
       initialValues={{
         remember: true,
       }}
       
     >
        
       <Form.Item
         label="email"
         name="email"
         rules={[
           {
             required: true,
             message: messageEmail || 'Please input your username!',
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
             message:  messagePass || 'Please input your password!',
           },
         ]}
       >
         <Input.Password 
              onChange={onChangePassword}
              value={password}
         />
       </Form.Item>
 
       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
         <Checkbox>Remember me</Checkbox>
       </Form.Item>
 
       <Form.Item {...tailLayout}>
         <Button type="primary" onClick={handleLogin} htmlType="submit">
           Submit
         </Button>
       </Form.Item>
     </Form>
     </>
     )}
     </>
   );   
}
