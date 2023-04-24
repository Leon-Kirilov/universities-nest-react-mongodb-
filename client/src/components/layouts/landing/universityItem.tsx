import { Link } from "react-router-dom";
interface UniversityItemProps {
  university: any
}
const UniversityItem = ({ university }: UniversityItemProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 mt-6">
        <div className="w-full">
          <img className="w-full h-[900px]" src="https://static.wixstatic.com/media/1734f5_829dd8f864e744faac760eadf1db92fb~mv2.jpg/v1/fill/w_562,h_1069,al_c,q_85,enc_auto/1734f5_829dd8f864e744faac760eadf1db92fb~mv2.jpg" />
        </div>
        <div className="text-white w-full bg-[#616161] p-20 h-[900px]">
          <h1 className="text-6xl">
            {university.title}
          </h1>
          <p className="mt-16 mb-8 leading-8">
            {university.description}
          </p>
          <Link to={`/universities/${university._id}`} className="text-[#1a2df3] underline italic">
            See More
          </Link>
        </div>
      </div>
    </>
  )
}

export default UniversityItem;