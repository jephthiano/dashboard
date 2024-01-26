function SketchChart() {
  return (
    <div style={{height:'400px',marginTop:'8px'}}>
      <div className='j-row'>
        <div className='j-col s6 j-padding'>
          <div className="j-color4 j-round-large j-padding sketch-height">
            <div style={{marginBottom:'10px'}}>
              <span><img src={require('addons/image/sketch/icon1.png')}/></span>
              <span>
                <img src={require('addons/image/sketch/sketch_green.png')} className='j-right'style={{width:'60%'}}/>
              </span>
            </div>
            <div style={{lineHeight:'35px',marginBottom:'10px'}}>
              <div className="j-text-color5">Total Order</div>
              <div className='j-large j-bolder j-text-color7'>350</div>
            </div>
            <div>
              <span className="j-small j-color2 j-round-xlarge j-padding-small"style={{marginRight:"5px"}}>
                <img src={require('addons/image/sketch/trending-up.png')}style={{marginRight:'5px'}}/>
              <span className="j-text-color1">23.5%</span>
              </span>
              <span className="j-small j-text-color5">vs previous month</span>
            </div>
          </div>
        </div>

        <div className='j-col s6 j-padding'>
          <div className="j-color4 j-round-large j-padding sketch-height">
            <div style={{marginBottom:'10px'}}>
              <span><img src={require('addons/image/sketch/icon2.png')}/></span>
              <span>
                <img src={require('addons/image/sketch/sketch_red.png')} className='j-right'style={{width:'60%'}}/>
              </span>
            </div>
            <div style={{lineHeight:'35px',marginBottom:'10px'}}>
              <div className="j-text-color5">Total Refund</div>
              <div className='j-large j-bolder j-text-color7'>270</div>
            </div>
            <div>
              <span className="j-small j-color9 j-round-xlarge j-padding-small"style={{marginRight:"5px"}}>
                <img src={require('addons/image/sketch/trending-down.png')}style={{marginRight:'5px'}}/>
                <span className="j-text-color8">23.5%</span>
              </span>
              <span className="j-small j-text-color5">vs previous month</span>
            </div>
          </div>
        </div>
      </div>
      <div className='j-row'>
        <div className='j-col s6 j-padding'>
          <div className="j-color4 j-round-large j-padding sketch-height">
            <div style={{marginBottom:'10px'}}>
              <span><img src={require('addons/image/sketch/icon3.png')}/></span>
              <span>
                <img src={require('addons/image/sketch/sketch_red.png')} className='j-right'style={{width:'60%'}}/>
              </span>
            </div>
            <div style={{lineHeight:'35px',marginBottom:'10px'}}>
              <div className="j-text-color5">Average Sales</div>
              <div className='j-large j-bolder j-text-color7'>1567</div>
            </div>
            <div>
              <span className="j-small j-color9 j-round-xlarge j-padding-small"style={{marginRight:"5px"}}>
                <img src={require('addons/image/sketch/trending-down.png')}style={{marginRight:'5px'}}/>
                <span className="j-text-color8">23.5%</span>
              </span>
              <span className="j-small j-text-color5">vs previous month</span>
            </div>
          </div>
        </div>

        <div className='j-col s6 j-padding'>
          <div className="j-color4 j-round-large j-padding sketch-height">
            <div style={{marginBottom:'10px'}}>
              <span><img src={require('addons/image/sketch/icon4.png')}/></span>
              <span>
                <img src={require('addons/image/sketch/sketch_green.png')} className='j-right'style={{width:'60%'}}/>
              </span>
            </div>
            <div style={{lineHeight:'35px',marginBottom:'10px'}}>
              <div className="j-text-color5">Total Income</div>
              <div className='j-large j-bolder j-text-color7'>$350.000</div>
            </div>
            <div>
              <span className="j-small j-color2 j-round-xlarge j-padding-small"style={{marginRight:"5px"}}>
                <img src={require('addons/image/sketch/trending-up.png')}style={{marginRight:'5px'}}/>
                <span className="j-text-color1">23.5%</span>
              </span>
              <span className="j-small j-text-color5">vs previous month</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SketchChart