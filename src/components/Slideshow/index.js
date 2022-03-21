import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import ReactJson from 'react-json-view'
import {useQuery} from "react-query";
import axios from "axios";

const api = 'https://nucleus-stage.uolo.co';


const Slideshow = ({}) => {

    let location = useLocation();

    const fetchSlideData = async (id) => {
        return await axios.get(`${api}/slides/${id}`);
    };

    const [slideData, setSlideData] = useState({});

    const {
        data: slideshowData,
        isLoading: slidesLoading
    } = useQuery(
        'SlideData',
        () => fetchSlideData(location?.search?.split('=')[1])
    );

    useEffect(() => {
        console.log('test ',slideshowData?.data?.slide?.content);
        setSlideData(slideshowData?.data?.slide?.content);
    }, [slideshowData]);


    // const handleBackClick = () => {
    //     if (activeSlide > 0) {
    //         setActiveSlide(activeSlide - 1);
    //     }
    // };
    // const handleForwardClick = () => {
    //     if (activeSlide < slideshowData.length - 1) {
    //         setActiveSlide(activeSlide + 1);
    //     }
    // };

    return <>
        <div style={styles.wrapper}>
            {slideData?.question ? <>
                <div style={{...styles.slide, backgroundColor: 'white'}}>
                    {/*{activeSlide === 0 ?*/}
                    {/*    <text style={styles.welcomeTitle}>*/}
                    {/*        {slideshowData[activeSlide].title}*/}
                    {/*    </text> : <text style={styles.title}>*/}
                    {/*        {slideshowData[activeSlide].title}*/}
                    {/*    </text>*/}
                    {/*}*/}
                    {slideData.question?.fragments?.length > 0 ?
                        <img style={styles.image} src={slideData.question?.fragment[0].url}/> : <img style={styles.image} src={'https://images.unsplash.com/photo-1553613599-d0f3dd9416ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkeSUyMGxpYmVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}/>}
                    <text style={styles.question}>
                        {slideData.question?.text}
                    </text>
                    <div style={styles.options}>
                        {slideData.question?.options?.map(option => {
                            return <text key={option._id} style={{...styles.option, backgroundColor: option?.text === slideData?.answer?.options[0]?.text ? 'green' : 'white'}}>
                                {option?.text}
                            </text>
                        })}
                    </div>
                </div>
                <div style={styles.json} collapsed={true} theme={'monokai'}>
                    <ReactJson src={slideData}/>
                </div>
                </>
            :null}
        </div>
        {/*<div style={styles.actions}>*/}
        {/*    <Button style={styles.approve}>*/}
        {/*        {'Approve'}*/}
        {/*    </Button>*/}
        {/*    <Button style={styles.reject}>*/}
        {/*        {'Reject'}*/}
        {/*    </Button>*/}
        {/*</div>*/}
    </>;
};

export default Slideshow;

const styles = {
    wrapper: {
        display: 'flex',
        width: 1000,
        height: 600,
        backgroundColor: '#6A3BE4',
        background: 'linear-gradient(168.49deg, #6A3BE4 0%, #2E34B0 98.26%)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto',
    },
    json: {
        overflow: 'scroll',
        margin: '20px 10px',
        backgroundColor: 'white',
        padding: '20px 30px',
        borderRadius: 12,
        width: 600,
        height: 500,
    },
    slide: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '90%',
        width: 250,
        marginRight: '50px',
        borderRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeTitle: {
        color: 'white',
        position: 'absolute',
        fontFamily: 'Outfit',
        width: '70%',
        top: 50,
        left: 20,
        fontSize: 32,
        fontWeight: 500,
    },
    button: {
        width: 30,
        height: '100%',
    },
    title: {
        color: '#9D9D9D',
        position: 'absolute',
        top: 10,
        fontSize: 14,
        fontWeight: 500,
        padding: '10px 20px'
    },
    image: {
        height: 200,
        width: '90%',
        margin: '10px 0px',
        borderRadius: 12
    },
    question: {
        color: '#2C1B66',
        width: '100%',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 500,
        padding: '5px 10px'
    },
    options: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        marginTop: '10px',
        flexDirection: 'column'
    },
    option: {
        textAlign: 'center',
        border: '1px solid #000000',
        borderRadius: 12,
        margin: '5px 5px',
        color: '#121212',
        fontWeight: 500,
        fontSize: 16,
        padding: '10px 0px'
    },
    actions: {
        display: 'flex',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px auto'
    },
    approve: {
        margin: '10px 10px',
        width: '20%',
        height: '100%',
        color: 'white',
        backgroundColor: 'green',
        borderRadius: 12,
        cursor: 'pointer'
    },
    reject: {
        border: '1px solid',
        margin: '10px 10px',
        width: '20%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 12,
        cursor: 'pointer'
    }
};


