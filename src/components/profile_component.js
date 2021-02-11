import {useRef,useState,useEffect} from "react"
import {useDispatch,useSelector} from "react-redux";
import profile from "../services/user_service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {login_action,logout_action} from "../actions/auth_action";
import {required,validEmail,vpassword} from "./validate_form"

const Profile = ({history})=>{
       
       const refForm = useRef();
       const refCheck = useRef();

       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");

      
       const [successful, setSuccessful] = useState(false);
    
       const {isLoggindIn} = useSelector(state=>state.auth_reducers);
       const { messageEmail,messagePass,message } = useSelector(state => state.message_reducers);
       const dispatch = useDispatch();


      
       const { user  } = useSelector(state => state.auth_reducers)
      useEffect(() => {

            if(user && user.user)
              { 
                     setEmail(user.user.email);
                     setPassword(user.user.password);  
              }
              else{
                     history.push("/");
              }
            
      }, [user])
     

       const onChangeEmail = (event) =>{
              const email = event.target.value;
              setEmail(email);
       }

       const onChangePassword = (event) => {
              const password = event.target.value;
              setPassword(password);
       }
      const handleProfile = (event) =>{
              event.preventDefault();
       
              refForm.current.validateAll();
              if (refCheck.current.context._errors.length === 0) {
              profile(email,password).then((response)=>{
                     dispatch(logout_action);
                     dispatch(login_action(email,password));
                     setSuccessful(true);

              }).catch(response => {
                     setSuccessful(false);
              });
       }
      }

      return (
       <div className="col-md-12">
       <div className="card card-container">

       <Form onSubmit={handleProfile} ref={refForm}>
              {isLoggindIn && (
              <div>
                     <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <Input
                     type="text"
                     className="form-control"
                     name="email"
                     value={email}
                     onChange={onChangeEmail}
                     validations={[required, validEmail]}
                     />
              {messageEmail && (
                     <div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                            {messageEmail}
                            </div>
                     </div>)}
              </div>

       <div className="form-group">
         <label htmlFor="password">Password</label>
         <Input
           type="password"
           className="form-control"
           name="password"
           value={password}
           onChange={onChangePassword}
           validations={[required, vpassword]}
         />
       {messagePass && (
       <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
              {messagePass}
              </div>
       </div>
   )}
       </div>

       <div className="form-group">
         <button className="btn btn-primary btn-block">Sign Up</button>
       </div>
     </div>
   )}
 {message && (
       <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
              {message}
              </div>
       </div>
   )}
  
   <CheckButton style={{ display: "none" }} ref={refCheck} />          
</Form>

</div>
</div>
);

}

export default Profile;