import axios from 'axios';

const getDutyForCleaning = () => {
  return axios.get('http://localhost:5000/duty-for-cleaning');
};

const getDutyForWater = () => {
  return axios.get('http://localhost:5000/duty-for-water');
};

export default {
  getDutyForCleaning,
  getDutyForWater,
};
