import axios from "axios";

export const FETCH_IMAGE_LOADING = "FETCH_IMAGE_LOADING";
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS";
export const FETCH_IMAGE_FAIL = "FETCH_IMAGE_FAIL";



export const getImage = () => dispatch => {
    dispatch(fetchImageLoading());

    axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(res=>{
            console.log(res)
            dispatch(fetchImageSuccess(res.data.message));
        })
        .catch(err=>{
            dispatch(fetchImageFail(err.Response.code));
        });
}


export const fetchImageLoading = () => {
    return({ type:FETCH_IMAGE_LOADING});
}

export const fetchImageSuccess = (quote) => {
    return({type:FETCH_IMAGE_SUCCESS, payload:quote});
}

export const fetchImageFail = (error) => {
    return({type:FETCH_IMAGE_FAIL, payload:error});
}