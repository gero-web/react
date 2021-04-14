import  React from "react";
import {tailLayout,layout} from '../../helpers/layout';
import { Form, Input, Button, Checkbox } from 'antd';
import {useEffect,useState} from "react"


const FormJSX = ({id,name,desk,onhandleTask}) =>{

      
       const [task, setTask] = useState("");
       const [desck, setDesck] = useState("");
       const [pk, setPk] = useState(id);
      useEffect(() => {
             if(name && desk){
                    setTask(name);
                    setDesck(desk);
              }
     
      }, [])

       const onChangeTask = (event)=>{
              
              const task = event.target.value;
              setTask(task);
       }

       const onChangeDesck = (event)=>{
              const desk = event.target.value;
              setDesck(desk);
       }

       const handleTask = (event) => {
              event.preventDefault();
              if(task && desck)
                     onhandleTask(pk,task,desck);      
       }
       return(
        <div  style={{minHeight: '400vh',maxWidth:'952px'}}>          
 <Form
       {...layout}
       name="basic"
      
       
     >
        
       <Form.Item
         label="Задача"
         name="Task"
         rules={[
           {
             required: true,
             message: 'Укажите задачу!',
           },
         ]}
       >
         <Input  
              onChange={onChangeTask}
              value={task}
              
              defaultValue={name}
         />
       </Form.Item>
 
       <Form.Item
         label="Описание"
         name="desck"
         rules={[
           {
             required: true,
             message:  'Укажите описание!',
           },
         ]}
       >
         <Input 
              onChange={onChangeDesck}
              value={desck}
              defaultValue={desk}
         />
       </Form.Item>
 
      
 
       <Form.Item {...tailLayout}>
         <Button type="primary" onClick={handleTask} htmlType="submit">
           Submit
         </Button>
       </Form.Item>
     </Form>
   </div>  
       )
}

export default FormJSX;