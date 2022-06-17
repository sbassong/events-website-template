import EventCard from "../components/EventCard";

const Agenda = (props) => {
  return (
    <div className="agendaPage">
      <title></title>
      <p></p>
      {
        props.forEach( eventObj => {
          <EventCard eventObj={ eventObj } />
        })
      }
    </div>
  )
};

export default Agenda;