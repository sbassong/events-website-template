import AccomodationCard from "../components/AccomodationCard";

const Accomodation = (props) => {
  return (
    <div className="accomodationPage">
      <title className="accomodationTitle"></title>
      {
        props.forEach( accomodation => {
          <AccomodationCard accomodation={ accomodation } />
        })
      }
    </div>
  )
};

export default Accomodation;