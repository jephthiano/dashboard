import {useSelector} from "react-redux";
import SideBar from 'addons/component/sidebar.inc'
import Header from 'addons/component/header.inc'
import SalesTrends from 'addons/component/salestrends.inc'
import LastOrders from 'addons/component/lastorders.inc'
import SketchChart from 'addons/component/sketchchart.inc'
import TopPlatform from 'addons/component/topplatform.inc'

function App() {
  const thColor = useSelector((state) => state.theme.value);
  const cla = `${thColor.bgColor1} j-row`

  const viewportHieght = window.innerHeight;
  const height = `${viewportHieght}px`;
  return (
    <div >
      <div className={cla}>
        <div className="j-col m1 xlhalf j-hide-small"style={{height:height,overflowY:'scroll'}}>
          <SideBar height={height}/>
        </div>
        <div className="j-col m11 xlrest"style={{height:height,overflowY:'scroll'}}>
          <Header />
          <div className="j-row">
            <div className='j-col l7'>
              <SalesTrends />
            </div>
            <div className='j-col l5'>
              <SketchChart />
            </div>
          </div>
          <div className="j-row">
            <div className='j-col l7'>
              <LastOrders />
            </div>
            <div className='j-col l5'>
            <TopPlatform />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
