import './App.css';
import FirstComponent from './Components/FirstComponent';
import { Card } from './Components/Card';
import DataComponent from './Components/DataComponent';
import VideoComponent from './Components/VideoComponent';
import Chart from './Components/Chart';
import Title from './Components/Title';
import Companies from './Components/Companies';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='main_parent'>
      <FirstComponent />
      <Title title={'Rate now'} />
      <div className='data_block'>
      <DataComponent />
      </div>
      <Title title={'The major companies that accept crypto as payment'} />
      <div className='company_div'>
      <Companies />
      </div>
      <Title title={'Cryptocurrency Chart By Price'} />
      <Chart />
      
      <div className='video_block'>
      <VideoComponent />
      </div>
      <div className='footer_block'>
      <Footer />
      </div>
      
      
    </div>
  )
}



export default App;
