import axios from 'axios';

const base_url ="https://api.randomuser.me/";

export async function fetchUser(){
    try{
    const response = await axios.get(base_url);
    const result = response.data.results
    console.log ('res..', result)
    return result;

    }catch(error){
        console.log(error)
    }
}
fetchUser()