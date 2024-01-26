function LastOrders() {
  return (
    <div className="j-color4 j-margin j-round-large">
      {/* header */}
      <div className="j-padding"style={{marginBottom:'0px'}}>
        <span className="j-bolder">Last Orders</span><span className="j-right j-text-color1">See All</span><br className='j-clearfix'/>
      </div>
      {/* table */}
      <div className='j-responsive j-vertical-scroll j-padding'>
        <table className="j-table j-bordered">
          <thead>
          <tr className="j-text-color5 j-bolder">
            <td style={{paddingLeft:'0px'}}>Name</td><td>Date</td><td>Amount</td><td>Status</td><td>Invoice</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td style={{paddingLeft:'0px'}}>
            <img src={require('addons/image/order/marcus.png')}style={{marginRight:'8px'}}/>
              Marcus Bergson
            </td>
            <td className="j-text-color5">Nov 15, 2023</td>
            <td className="j-bolder">$80,000</td>
            <td className="j-text-color1">Paid</td>
            <td>
              <img src={require('addons/image/order/download.png')}style={{marginRight:'3px'}}/>
              View
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft:'0px'}}>
              <img src={require('addons/image/order/jaydon.png')}style={{marginRight:'8px'}}/>
              Jaydon Vaccaro
              </td>
            <td className="j-text-color5">Nov 15, 2023</td>
            <td className="j-bolder">$150,000</td>
            <td className="j-text-color8">Refund</td>
            <td>
              <img src={require('addons/image/order/download.png')}style={{marginRight:'3px'}}/>
              View
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft:'0px'}}>
              <img src={require('addons/image/order/corey.png')}style={{marginRight:'8px'}}/>
              Corey Schleifer
              </td>
            <td className="j-text-color5">Nov 14, 2023</td>
            <td className="j-bolder">$87,000</td>
            <td className="j-text-color1">Paid</td>
            <td>
              <img src={require('addons/image/order/download.png')}style={{marginRight:'3px'}}/>
              View
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft:'0px'}}>
              <img src={require('addons/image/order/cooper.png')}style={{marginRight:'8px'}}/>
              Cooper Press
              </td>
            <td className="j-text-color5">Nov 14, 2023</td>
            <td className="j-bolder">$100,000</td>
            <td className="j-text-color8">Refund</td>
            <td>
              <img src={require('addons/image/order/download.png')}style={{marginRight:'3px'}}/>
              View
            </td>
          </tr>
          <tr>
            <td style={{paddingLeft:'0px'}}>
              <img src={require('addons/image/order/phillip.png')}style={{marginRight:'8px'}}/>
              Phillip Lubin
              </td>
            <td className="j-text-color5">Nov 13, 2023</td>
            <td className="j-bolder">$78,000</td>
            <td className="j-text-color1">Paid</td>
            <td>
              <img src={require('addons/image/order/download.png')}style={{marginRight:'3px'}}/>
              View
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LastOrders