import axios from "axios"



function Axios(){
  if (window.localStorage.getItem('jwt') === null){
  window.localStorage.setItem('jwt','None')
  }
  let jwt = `Bearer ${(window.localStorage.getItem('jwt'))}`
  const res = axios.create(
    {
      baseURL: 'https://dd38-61-216-112-120.ngrok-free.app',
      timeout:5000,
      headers:{
        'ngrok-skip-browser-warning':'123',
        'Authorization':jwt,
        'Content-Type':'Application/json',
        'Accept':'*/*'
      }
    }
  )
  return  res
}

export default Axios