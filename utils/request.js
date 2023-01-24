import axios from 'axios';

async function networkRequest(method,url,data){
    try{
        const response = await axios({
            method,
            url,
            data
        });
        return response;
    }
    catch(error){
        // console.log(error.response);
        return error.response;
    }
}

export default networkRequest;