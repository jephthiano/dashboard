import {useSelector} from "react-redux";

const Chart = () => {
    const thColor = useSelector((state) => state.theme.value);
    const cla = `${thColor.bgColor3} tooltiptext`;

    return (
        <div className="con">
            <div>
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
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'68px'}} >
                            <span className={cla}>$9.000</span>
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'120px'}}>
                            <span className={cla}>$20.000</span>
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'40px'}}>
                            <span className={cla}>$5.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'161px'}}>
                            <span className={cla}>$30.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'83px'}}>
                            <span className={cla}>$10.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'216px'}}>
                            <span className={cla}>$45.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'81px'}}>
                            <span className={cla}>$10.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'140px'}}>
                            <span className={cla}>$22.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'182px'}}>
                            <span className={cla}>$35.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'51px'}}>
                            <span className={cla}>$7.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'171px'}}>
                            <span className={cla}>$37.000</span>   
                        </div>
                        <div className="tooltip month j-color2 j-hover j-hover-color1"style={{height:'151px'}}>
                            <span className={cla}>$27.000</span>   
                        </div>
                    </div>
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