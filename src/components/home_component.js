import  React from "react";
import {useEffect,useState} from 'react';
import PageHeader from './pageHeader'; 
import task from '../services/grud_service';
import { Table,  Space } from 'antd';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { Button} from 'antd';


 const Home = ({history}) =>{
  const {isLoggindIn} = useSelector(state => state.auth_reducers)
  const columns = [
    {
      title: 'Задача',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Описание',
      dataIndex: 'desctiption',
      key: 'desctiption',
    },
   
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {isLoggindIn && (
            <Link to={
              {
                pathname:'/edit',
                query: record
                
          }}>Edit </Link>
          )}
          <Link to={{
                pathname:'/detail',
                query: {
                       name:record.name,
                       desc:record.desctiption
                
                },
               
  
          }} >Detail </Link>
          <a onClick={(event)=>{
             event.preventDefault();
             task.delateTask(record.pk).then(response=>{
                window.location.reload();
             }).catch(res=>{
               console.log(res);
             });
          }} >Delete</a>
        </Space>
      ),
    },
  ];

 
       const [data, setData] = useState([]);
       useEffect(() => {
              task.getAllTask().then((response)=>{
                     setData(response.data.map((item,index)=> {return {...item,key:item.pk}}));
                     
              })
       }, [])
      
       const createHandle = () => {
         history.push('/add');
       }
       return(

              <>
                 <PageHeader
                     style={{ padding: '0 50px',margin:'-30px 0 0 0' }}
                     title="Home"
                     history = {history}
                     
                 />
                 
                    <Button onClick={createHandle}   type="link" size='large'>
                      Create!
                    </Button> 
                    <Table columns={columns} dataSource={data} />
               
              </>
       )
}

export default Home;