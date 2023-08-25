import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step10.css";
const Step10 = () => {
  return (
    <div className="step-10">
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="discover-your-progress">
        Discover your progress with a glance at your points, and uncover
        countless ways to earn more. Keep going, as an exciting surprise awaits
        based on your synergy points at the end of the onboarding journey!
      </div>
      <div className="aha-i-see">
        AHA! I see you’ve found the secret tab for the Key to synergy points.
      </div>
      <Button className="button" variant="primary">
        Reveal the key
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step10;
