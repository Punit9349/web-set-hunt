import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function customToast(text,result){
   if(result.toUpperCase()==='SUCCESS')
   return toast.success(text,{
    position: toast.POSITION.TOP_RIGHT 
   });
   else if(result.toUpperCase()==='FAILURE')
   return toast.success(text,{
    position: toast.POSITION.TOP_RIGHT
   });
   else if(result.toUpperCase()==='WARNING')
   return toast.success(text,{
    position: toast.POSITION.TOP_RIGHT
   });
}


