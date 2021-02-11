import React from 'react';
import PageHeader from '../pageHeader';
import Form from './form';
import grud from '../../services/grud_service';

const Edit = ({history,location})=>{

  const  {pk,name:task,desctiption:desc} = location.query ? location.query : history.goBack();
  
  const handleTask = (pk,ta,de) => {
   
      grud.updateTask(pk,{'task':{
                          name:ta,
                          desctiption:de,}}).then((res)=>{
                          history.push("/home");
      }
      ).catch(res=>{
            console.log(res);
      });
}
  return (
 <div >

    <PageHeader
    style={{ padding: '0 50px',margin:'-30px 0 0 0' }}
    title="Edit"
    history = {history}
    />

     <Form
       
       id = {pk}
       name = {task}
       desk = {desc}
       history = {history}
       onhandleTask = {handleTask}
       />
     
</div>
    );

}

export default Edit;