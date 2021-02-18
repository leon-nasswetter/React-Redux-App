import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getImage } from "../actions";

const Image = (props) => {
    const { image, isFetching, error } = props;

    const handleClick = () => {
        props.getImage();
    }

    useEffect(() => {
        props.getImage();
    }, [])

    if(error) {
        return <h2>Error: {error}</h2>
    }
    if(isFetching) {
        return <h2>Fetching a new random image</h2>
    }
    return (
        <>
            <img src={image}></img>
            <br/>
            <button onClick={handleClick}>Get new image</button>
        </>
    )
}

const mapSateToProps = (state) => {
    return {
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapSateToProps, { getImage })(Image)