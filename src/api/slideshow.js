import axios from "axios";


const api = "https://nucleus-stage.uolo.co";


export const fetchSlideShow = () =>
        axios.get(`${api}/slides/${'62377d6d17fabc803c9e7bcf'}`).then((res) => {
                console.log('test',res);
        });

