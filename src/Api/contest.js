import React,{useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchSuccess } from "../Redux/Slices/ContestSlice";

const Contest =()=>{
  const [allContests, setAllContests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch=useDispatch();
  
  const fetchContests = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://codeforces.com/api/contest.list');
      // console.log(response.data.result);
      const getData=response.data.result
      // dispatch(fetchSuccess(getData));
      setAllContests(getData);
      setLoading(false);

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); 
    }
  };
  return {
    allContests,
    loading,
    error,
    fetchContests
  }
}

export default Contest
