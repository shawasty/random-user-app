import axios from 'axios';

const base_url ="https://api.randomuser.me/";

export async function fetchUser(){
    const response = await axios.get(base_url);
    console.log ('res..', response)
}
fetchUser()