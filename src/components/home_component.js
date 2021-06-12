import  React from "react";
import {useEffect,useState} from 'react';
import PageHeader from './pageHeader'; 
import task from '../services/grud_service';
import { Table,  Space, Popconfirm, message} from 'antd';
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
                
          }}>Изменить </Link>
          )}
          <Link to={{
                pathname:'/detail',
                query: {
                       name:record.name,
                       desc:record.desctiption
                
                },
          }} >Подробней </Link>
           <Popconfirm title="Вы действительно хотите удалить, строку?"               
            okText="Да" 
            onConfirm={()=>{
              task.delateTask(record.pk).then(response=>{
                history.push("/home");
              }).catch(res=>{
                message.error("Вы не авторизованы или у вас нет прав");
              });   
            }}
            cancelText="Нет">
            <a onClick={(event)=>{
              event.preventDefault();    
                 
            }} >Удалить</a>
        
            </Popconfirm>
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
                      Создать задачу!
                    </Button> 
                    <Table columns={columns} dataSource={data} />
               
              </>
       )
}

export default Home;