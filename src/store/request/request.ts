import axios from "axios";
import {GetAllPersonPayloadType, GetAllPersonsPayloadType, TypeResponseData} from "../interface/interface";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

const GetApi = {
    getAllPersons({page,title}: GetAllPersonPayloadType) {
        return instance.get(`people?page=${page}&search=${title||''}`).then(response => response)
    },
    getPerson(title:string) {
        return instance.get(`people/?search=${title}`).then(response => response)
    },
}
export default GetApi
