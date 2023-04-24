import axios from "axios";
import { useEffect, useState } from "react";
const University = () => {
  const [university, setUniversity] = useState<any>("");
  useEffect(() => {
    const url = window.location.pathname;
    const id = url.split('/');
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3002/api/v1/university/${id[id.length - 1]}`)
      setUniversity(data.university)
    }
    fetchData();
  }, [])

  return (
    <>
      {
        university &&
        <div className="w-full">
          <div className="w-3/4 mx-auto">
            <h1 className="text-8xl mb-8">{university.title}</h1>
            <button className="bg-blue-700 text-3xl p-4 text-white rounded-md">APPLY FOR {university.title}</button>
            <p className="mt-8 bg-gray-600 text-white p-4 text-2xl">
              {university.description}
            </p>
          </div>
          <div className="w-full h-48 bg-gray-600 mt-8 flex flex-col items-center text-white">
            <h2 className="text-lg mt-4">College Statistics</h2>

            <div className="w-3/4 flex gap-4 justify-between mt-8">
              <div className="flex flex-col items-center gap-2">
                <h3>Total Student Numbers</h3>
                <p>{university.student.total_count}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3>Male Student Numbers</h3>
                <p>{university.student.male_count}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3>Female Student Numbers</h3>
                <p>{university.student.female_count}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3>International Student Numbers</h3>
                <p>{university.student.international_count}</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto bg-[#ae633f] p-4 mt-8">
            <h1 className="text-white text-center text-3xl">{`Academic Departments at ${university.title}`}</h1>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {
                university.colleges.map((college: any, index: number) => (
                  <div key={index}>
                    <h2 className="text-2xl text-black">{college.title}</h2>
                    <ul className="flex flex-col gap-4 mt-8">
                      {
                        college.faculties.map((faculty: string) => (
                          <li key={faculty} className="text-white">{faculty}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))

              }
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default University;