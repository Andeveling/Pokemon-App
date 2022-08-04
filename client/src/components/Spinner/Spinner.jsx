import { SpinnerDotted } from "spinners-react";

function Spinner() {
  return (
    <div className='spinner'>
      <SpinnerDotted size={200} thickness={180} speed={97} color='rgba(172, 57, 57, 1)' />
    </div>
  );
}

export default Spinner;
