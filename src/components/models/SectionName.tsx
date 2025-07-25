

interface IsectionName {
    sectionname: string
}
const SectionName = ({sectionname}:IsectionName) => {
  return (
    <div>
        <div className="text-3xl font-semibold my-5">
            {sectionname}
        </div>
    </div>
  )
}

export default SectionName