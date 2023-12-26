
import { useDispatch } from 'react-redux';
import { fetchRocketsStart, fetchRocketsSuccess, fetchRocketsFailure } from './rocketsSlice';

const fetchData = () => {
const dispatch = useDispatch();

dispatch(fetchRocketsStart());

fetch('https://api.spacexdata.com/v4/rockets')
    .then(response => response.json())
    .then(data => dispatch(fetchRocketsSuccess(data)))
    .catch(error => dispatch(fetchRocketsFailure(error.message)));
};

export default fetchData;
