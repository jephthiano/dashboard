import {useSelector} from "react-redux";

function TopPlatform() {
  const thColor = useSelector((state) => state.theme.value);
  const cla =`${thColor.bgColor2} j-padding j-margin j-round-large`

  return (
    <div className={cla}>
      {/* header */}
      <div style={{marginBottom:'10px'}}>
        <span className="j-bolder">Top Platform</span><span className="j-right j-text-color1">See All</span><br className='j-clearfix'/>
      </div>
      {/* each platform */}
      <div style={{lineHeight:'35px'}}>
        <div style={{marginBottom:'2px'}}>
          <div className="j-bolder">Book Bazaar</div>
          <div className="j-round j-color6"style={{width:'100%',height:'10px'}}>
            <div className='j-round'style={{backgroundColor:'#6160DC',width:`70%`,height:'10px'}}></div>
          </div>
          <div className="j-text-color5">
            <span>$2,500,000</span><span className='j-right'>+15%</span><br className='j-clearfix'/>
          </div>
        </div>

        <div style={{marginBottom:'2px'}}>
          <div className="j-bolder">Artisan Aisle</div>
          <div className="j-round j-color6"style={{width:'100%',height:'10px'}}>
            <div className='j-round'style={{backgroundColor:'#54C5EB',width:`50%`,height:'10px'}}></div>
          </div>
          <div className="j-text-color5">
            <span>$1,800,000</span><span className='j-right'>+10%</span><br className='j-clearfix'/>
          </div>
        </div>

        <div style={{marginBottom:'2px'}}>
          <div className="j-bolder">Toy Troop</div>
          <div className="j-round j-color6"style={{width:'100%',height:'10px'}}>
            <div className='j-round'style={{backgroundColor:'#FFB74A',width:`39%`,height:'10px'}}></div>
          </div>
          <div className="j-text-color5">
            <span>$1,200,000</span><span className='j-right'>+8%</span><br className='j-clearfix'/>
          </div>
        </div>

        <div style={{marginBottom:'2px'}}>
          <div className="j-bolder">XStore</div>
          <div className="j-round j-color6"style={{width:'100%',height:'10px'}}>
            <div className='j-round'style={{backgroundColor:'#FF4A55',width:`35%`,height:'10px'}}></div>
          </div>
          <div className="j-text-color5">
            <span>$600,000</span><span className='j-right'>+5%</span><br className='j-clearfix'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPlatform