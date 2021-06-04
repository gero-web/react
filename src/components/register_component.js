
import {useState} from "react"
import {useDispatch,useSelector} from "react-redux";
import { register_action,login_action} from "../actions/auth_action";
import { Form, Input, Button,Modal, Checkbox } from 'antd';
import { SET_MESSAGE} from "../actions/type";
import {tailLayout,layout} from '../helpers/layout';

const Register = ({IsVisible,msgError})=>{
    

       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [visibleRegister,setVisibleRegister] = IsVisible;
       const {isLoggindIn} = useSelector(state => state.auth_reducers)
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
                        dispatch(login_action(email,password)).then(()=>{             
                                closeModelRegister();
                          
                          }).catch(()=>{ });
                     }).catch(()=>{
                     
                      console.log(1);
                     });
              
       }
       const okCloseModelRegister = () =>{
        setTimeout(() => {        
        }, 1000);
      }
      const closeModelRegister = () => {
          setVisibleRegister(false);
          msgerror();
      }
      const msgerror = () => {
    
        dispatch({
          type:SET_MESSAGE,
          payload:""
  });
  };


 return ( 
        <>  
        <Modal key="ModalRegister"
          title="Регистрация"
          centered
          visible={visibleRegister}
          onCancel = {closeModelRegister}
          footer={[
            <>
              <Button form="registerForm" key="cansle" onClick={closeModelRegister} type="danger" htmlType="reset">
                Отмена
            </Button>
              <Button form="registerForm" key="submit" onClick={okCloseModelRegister} type="primary" htmlType="submit">
                Ok
            </Button>
         </>
          ]}
        >
{ !isLoggindIn && ( 
              <>
    
       <Form
        key="FormRegister"
       onFinish={handleRegister}
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
 
       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
         <Checkbox>Remember me</Checkbox>
       </Form.Item>
 
     </Form>
     </>
     )}
     </Modal>
     </>
   );   
}

export default Register;