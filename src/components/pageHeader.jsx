import { PageHeader } from 'antd';


const PageHeade = ({history,title,style}) =>{


       return (
              <PageHeader
              style={style || { padding: '0 50px',margin:'-30px 0 0 0' }}
              className="site-page-header"
              onBack={() => history.goBack()}
              title={title}
              subTitle=""
          />
       );
}

export default PageHeade;