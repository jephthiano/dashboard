import "./style.css";

export const Chart = () => {
    return (
        <div>
            <div className="recent-files-table">
                <div className="amount">
                    <div className="amount-data">50.000</div>
                    <div className="amount-data">40.000</div>
                    <div className="amount-data">30.000</div>
                    <div className="amount-data">20.000</div>
                    <div className="amount-data">10.000</div>
                    <div className="amount-data">5.000</div>
                    <div className="amount-data">0</div>
                </div>
                <div className="overlap">
                    <div className="bar">
                        <div className="month j-color2 j-color2"style={{height:'68px'}} />
                        <div className="month j-color2"style={{height:'120px'}} />
                        <div className="month j-color2"style={{height:'40px'}} />
                        <div className="month j-color2"style={{height:'161px'}} />
                        <div className="month j-color2"style={{height:'83px'}} />
                        <div className="month jun"style={{height:'216px'}} />
                        <div className="month j-color2"style={{height:'81px'}} />
                        <div className="month j-color2"style={{height:'140px'}} />
                        <div className="month j-color2"style={{height:'182px'}} />
                        <div className="month j-color2"style={{height:'51px'}} />
                        <div className="month j-color2"style={{height:'171px'}} />
                        <div className="month j-color2"style={{height:'151px'}} />
                    </div>
                    {/* <div className="top-sale">
                        <div className="overlap-group">
                            <div className="element">$45.000</div>
                        </div>
                    </div> */}
                </div>
                <div className="navbar">
                    <div className="element-k">Jan</div>
                    <div className="element-k">Feb</div>
                    <div className="element-k">Mar</div>
                    <div className="element-k">Apr</div>
                    <div className="element-k">May</div>
                    <div className="element-k">Jun</div>
                    <div className="element-k">Jul</div>
                    <div className="element-k">Aug</div>
                    <div className="element-k">Sep</div>
                    <div className="element-k">Oct</div>
                    <div className="element-k">Nov</div>
                    <div className="element-k">Dec</div>
                </div>
            </div>
        </div>
    );
};

export default Chart