import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Mission = () => {
const dispatch = useDispatch();
const Mission = useSelector((state) => state.rockets);

useEffect(() => {
    const fetchData = async () => {
    dispatch(fetchRocketsStart());

    try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        dispatch(fetchRocketsSuccess(data));
    } catch (error) {
        dispatch(fetchRocketsFailure(error.message));
    }
    };

    fetchData();
}, [dispatch]);}

export default Mission;
