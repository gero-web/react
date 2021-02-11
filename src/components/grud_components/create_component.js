import React from 'react';
import PageHeader from '../pageHeader';
import Form from './form';
import grud from '../../services/grud_service';

const Create = ({history})=>{

  const handleTask = (pk,ta,de) => {
   
      grud.create_task({'task':{
                         name:ta,
                         desctiption:de,}}).then((res)=>{
                         history.push("/home");
      }
      ).catch(res=>{
            console.log(res);
      });
}
  return (
 <>
    <PageHeader
    style={{ padding: '0 50px',margin:'-30px 0 0 0' }}
    title="Create"
    history = {history}
    />

     <Form
        id = ""
        name = ""
        desk = ""
        history = {history}
        onhandleTask = {handleTask}
     />
</>
    );

}

export default Create;