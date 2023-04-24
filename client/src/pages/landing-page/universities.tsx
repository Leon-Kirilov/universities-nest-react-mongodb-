import { useEffect, useState } from "react";
import UniversityList from "../../components/layouts/landing/universityList";
import axios from "axios";
const Universities = () => {
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('http://localhost:3002/api/v1/university');
        setUniversities(data.universities)
      } catch {
        // navigate('/')
      }
    }
    fetchData();
  }, [])
  return (
    <>
      <UniversityList universities={universities} />
    </>
  )
}

export default Universities;