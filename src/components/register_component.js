
import {useState,useRef} from "react"
import {useDispatch,useSelector} from "react-redux";

import { register_action} from "../actions/auth_action";
import { Form, Input, Button,Alert, Space,Checkbox,message } from 'antd';
import  PageHeader  from './pageHeader';
import {tailLayout,layout} from '../helpers/layout';

const Register = ({history})=>{
    

       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
      
       const {isLoggindIn} = useSelector(state => state.auth_reducers)
       const { message:msg } = useSelector(state => state.message_reducers);
       const dispatch = useDispatch();

    

       const onChangeEmail = (event) => {
              const email = event.target.value;    
              setEmail(email);
       };
          
       const onChangePassword = (event) => {
              const password = event.target.value;
              setPassword(password);
       };

       const handleRegister = (event) => {
              dispatch(register_action(email,password)).then(()=>{
                             history.push("/login");
                     }).catch(()=>{
                          
                     });
              
       }

 const msgerror = () => {
              console.log("1");
              message.error(msg);
};


 return ( 
       
        <>  
           <PageHeader
              style={{ padding: '0 50px',margin:'-30px 0 0 0' }}
              history= {history}
              title="Регистрация"
              
       />

       { !isLoggindIn && ( 
              <>
       { msg && 
              (<Space>
                     { msgerror()}
              </Space>)
       }   
       <Form
       onFinish={handleRegister}
     
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
             message: 'Укажите email!',
           },
           {
             type:"email",
             
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
            len: 8,
            message:  "Пароль должен быть больше 8 символов" 
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
 
       <Form.Item {...tailLayout} >
         <Button type="primary" htmlType="submit">
           Submit
         </Button>
       </Form.Item>
     </Form>
     </>
     )}
     </>
   );   
}

export default Register;