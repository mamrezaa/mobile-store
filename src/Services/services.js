// const setToken =  (tokens) =>{
//     localStorage.setItem('token', JSON.stringify(tokens))

// }

 function setToken (tokens){
    //localStorage.setItem('token', JSON.stringify(tokens.token))
    // localStorage.setItem('token', JSON.stringify(tokens.refreshToken))
     localStorage.setItem('tokens', JSON.stringify(tokens))
}



function getToken (){
    return localStorage.getItem('tokens')
 }

function clearToken (){
    return localStorage.clear()
}

 export  {setToken,getToken,clearToken}