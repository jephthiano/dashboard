import {useSelector} from "react-redux";
import Chart from 'addons/component/chart.inc'


function SalesTrends() {
  const thColor = useSelector((state) => state.theme.value);
  const cla = `${thColor.bgColor2} j-padding-large j-margin j-round-large`;

  return (
    <div className={cla}style={{}}>
      <div style={{width:'100%',position:'relative',height:'400px'}}>
        <div>
          <span className="j-bolder"style={{position:'relative',top:'5px'}}>
            Sales Trends
          </span>
          <span className='j-right'>
            <span style={{marginRight:'15px'}}>Sort by:</span>
            <span>
              <select className='j-padding j-round-xxlarge'name='sel'id='sel'>
                <option value='weekly'>Weekly</option>
                <option value='monthly'>Monthly</option>
                <option value='annually'>Annually</option>
              </select>
            </span>
          </span>
        </div>
        <div className="scroll"style={{width:'100%',position:'relative',height:'400px'}}>
        <div>
          <Chart />
        </div>
        </div>
      </div>
    </div>
  )
}

export default SalesTrends