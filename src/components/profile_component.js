import {useState,useEffect} from "react"
import {useDispatch,useSelector} from "react-redux";
import profile from "../services/user_service";
import {login_action,logout_action} from "../actions/auth_action";
import {layout} from '../helpers/layout';
import { Form, Input, Button,Modal, Checkbox } from 'antd';
const Profile = ({history,user})=>{
       
       

       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const dispatch = useDispatch();
      
      useEffect(() => {

         
            if(user && user.user)
              { 
                     setEmail(user.user.email);
                     setPassword(user.user.password);  
              }
              else{
                  
                     history.push("/");
              }
            
      }, [])
     

       const onChangeEmail = (event) =>{
              const email = event.target.value;
              setEmail(email);
       }

       const onChangePassword = (event) => {
              const password = event.target.value;
              setPassword(password);
       }
      const handleProfile = (event) =>{
            
              profile(email,password).then((response)=>{
                     dispatch(logout_action);
                     dispatch(login_action(email,password));
                     history.push("/");

              }).catch(response => {
                   
              });
       
      }

      return (
       <Form
        key="FormRegister"
       onFinish={handleProfile}
       id="registerForm"
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
       <Form.Item>
       <Button type="primary" htmlType="submit">
          Ok!
        </Button>
       </Form.Item>
 
     </Form>
);

}

export default Profile;