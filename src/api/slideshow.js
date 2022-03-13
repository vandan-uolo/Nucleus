import axios from "axios";


const api = "https://nucleus-stage.uolo.co";


export const fetchSlideShow = () =>

        axios.get(`${api}/slides`,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then((res) => {
                console.log('test',res);
        });

