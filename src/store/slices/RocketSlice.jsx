
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Rockets = () => {
const dispatch = useDispatch();
const Rockets = useSelector((state) => state.rockets);

useEffect(() => {
    const fetchData = async () => {
    dispatch(fetchRocketsStart());

    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        dispatch(fetchRocketsSuccess(data));
    } catch (error) {
        dispatch(fetchRocketsFailure(error.message));
    }
    };

    fetchData();
}, [dispatch]);

}


export default Rockets;

