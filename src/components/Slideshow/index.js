import {useEffect, useState} from "react";
import {Button} from "@mui/material";
import ReactJson from 'react-json-view'
import {useQuery} from "react-query";
import axios from "axios";

const slides = [
    {
        order: 0,
        title: 'Revision Quiz - 01',
        metaData: `Shared By - Savita Ma'am`
    },
    {
        order: 1,
        title: 'Select correct answers',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
        question: 'Identify this famous monument shown below',
        options: [
            'Statue of Liberty',
            'Machu Pichu',
            'Red Fort',
            'Taj Mahal'
        ]
    },
    {
        order: 2,
        title: 'Select correct answers',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
        question: 'Identify this famous monument shown below',
        options: [
            'Statue of Liberty',
            'Machu Pichu',
            'Red Fort',
            'Taj Mahal'
        ]
    },
    {
        order: 3,
        title: 'Good Job !'
    },
];

const Slideshow = ({}) => {

    const fetchSlideData = async () => {
        const data = await axios({
            url: 'https://nucleus-stage.uolo.co/slides/62377d6d17fabc803c9e7bcf',
        });
        return data;
    };

    const {
        data: slideshowData,
        isLoading: slidesLoading
    } = useQuery(
        'SlideData',
        fetchSlideData
    );

    const [slideshowData, setSlideShowData] = useState(slides);

    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
    }, []);


    const handleBackClick = () => {
        if (activeSlide > 0) {
            setActiveSlide(activeSlide - 1);
        }
    };
    const handleForwardClick = () => {
        if (activeSlide < slideshowData.length - 1) {
            setActiveSlide(activeSlide + 1);
        }
    };

    return <>
        <div style={styles.wrapper}>
            {/*<Button style={styles.button} onClick={handleBackClick}>*/}
            {/*    <ArrowBack />*/}
            {/*</Button>*/}
            <div style={{...styles.slide, backgroundColor: activeSlide === 0 ? '#6A3BE4' : 'white'}}>
                {activeSlide === 0 ?
                    <text style={styles.welcomeTitle}>
                        {slideshowData[activeSlide].title}
                    </text> : <text style={styles.title}>
                        {slideshowData[activeSlide].title}
                    </text>
                }
                {slideshowData[activeSlide].image ?
                    <img style={styles.image} src={slideshowData[activeSlide].image}/> : null}
                <text style={styles.question}>
                    {slideshowData[activeSlide].question}
                </text>
                <div style={styles.options}>
                    {slideshowData[activeSlide]?.options?.map(option => {
                        return <text style={styles.option}>
                            {option}
                        </text>
                    })}
                </div>
            </div>
            <div style={styles.json} collapsed={true} theme={'monokai'}>
                <ReactJson src={slideshowData}/>
            </div>
            {/* <Button onClick={handleForwardClick}>*/}
            {/*    <ArrowForward/>*/}
            {/*</Button>*/}
        </div>
        <div style={styles.actions}>
            <Button style={styles.approve}>
                {'Approve'}
            </Button>
            <Button style={styles.reject}>
                {'Reject'}
            </Button>
        </div>
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
        height: 120,
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


