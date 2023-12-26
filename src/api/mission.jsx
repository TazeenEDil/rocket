import { useDispatch } from 'react-redux';
import { fetchRocketsStart, fetchRocketsSuccess, fetchRocketsFailure } from './rocketsSlice';

const fetchdata = () => {
const dispatch = useDispatch();

dispatch(fetchMissionStart());

fetch('https://api.spacexdata.com/v3/missions')
    .then(response => response.json())
    .then(data => dispatch(fetchMissionSuccess(data)))
    .catch(error => dispatch(fetchMissionFailure(error.message)));
};

export default fetchdata;