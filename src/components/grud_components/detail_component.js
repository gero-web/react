import  React from "react";
import PageHeader from '../pageHeader'; 
import { useEffect,useState } from 'react';
import { Card } from 'antd';




const Detail = ({history,location}) =>{

       const [name, setName] = useState("");
       const [desc, setDesc] = useState("");

       useEffect(() => {
        if(!location.query)
              {                        
                     history.goBack();

              }
              else{
                     setName(location.query.name);
                     setDesc(location.query.desc);
              }
       }, [])
       return(

              <>
                <PageHeader
                     style={{ padding: '0 50px',margin:'-30px 0 0 0' }}
                     title="Detail"
                     history = {history}
                 />
              <Card title="Задача">
                     <Card type="inner" 
                            title={name} 
                            >
                            {desc}
                     </Card>
              </Card>
                

              </>
       )
}

export default Detail;