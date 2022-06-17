import RsvpNameForm from "../components/RsvpNameForm";
import RspvDecisionForm from "../components/RsvpDecisionForm";

const Rsvp = () => {
  return (
    <div className="rsvpPage">
      {
        true 
        ? <RsvpNameForm />
        : <RspvDecisionForm />
      }

    </div>
  )
};

export default Rsvp;