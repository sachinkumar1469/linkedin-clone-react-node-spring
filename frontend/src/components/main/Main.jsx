
// Local Imports
import "./main.scss";
import LeftMain from './left/LeftMain';
import RightMain from './right/RightMain';
import CenterMain from './center/CenterMain';

function Main() {
  return (
    <div className='main'>
      <LeftMain/>
      <CenterMain/>
      <RightMain/>
    </div>
  )
}

export default Main
