import UniversityItem from "./universityItem";

interface UniversityListProps {
  universities: any;
}
const UniversityList = ({ universities }: UniversityListProps) => {

  return (
    <div>
      {
        universities.map((university: any) => (
          <UniversityItem key={university._id} university={university} />
        ))
      }
    </div>
  )
}

export default UniversityList;
