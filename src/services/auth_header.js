
export const userLocalStorage = () => {
       return  localStorage.key('user') ? JSON.parse(localStorage.getItem('user')).user : undefined;
};

export  function authHeader(){
       const user = userLocalStorage();
       if(user && user.token){
              return { Authorization: 'token ' + user.token,
                       }
       }  
       return {};

};