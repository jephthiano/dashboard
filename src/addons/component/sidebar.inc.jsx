import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "addons/state/reducer";
import { horNav } from 'addons/function/general.fuc';

function SideBar(props) {
  const thColor = useSelector((state) => state.theme.value);

  const viewport = window.innerHeight;
  
  const updateState = useDispatch();

  const changeColor = (type) => {
    let themeData = '';
    if(type === 'dark'){
      themeData = {
        bgColor1: 'j-color7', 
        bgColor2: 'j-color3',
        bgColor3: 'j-color4',
      }
    }else{
      themeData = {
        bgColor1: 'j-color6', 
        bgColor2: 'j-color4',
        bgColor3: 'j-color3',
      }
    }
    updateState(changeTheme(themeData));
  }
  // for medium large and xlarge
   return (
    <div className={thColor.bgColor1}>
    <div className="j-border-right j-hide-small"style={{position:'relative',minHeight:props.height}}>
        <div className="j-center"style={{paddingTop:'20px'}}>
          <div style={{lineHeight:'50px'}}>
            <div id='icon1'className='nav' onClick={()=> horNav('icon1')}>
              <img src={require('addons/image/sidebar/icon1.png')}/>
            </div>
            <div id='icon2'className='nav' onClick={()=> horNav('icon2')} style={{borderRight:'3px solid'}}>
              <img src={require('addons/image/sidebar/icon2.png')}/>
            </div>
            <div id='icon3'className='nav' onClick={()=> horNav('icon3')}>
              <img src={require('addons/image/sidebar/icon3.png')}/>
            </div>
            <div id='icon4'className='nav' onClick={()=> horNav('icon4')}>
              <img src={require('addons/image/sidebar/icon4.png')}/>
            </div>
            <div id='icon5'className='nav' onClick={()=> horNav('icon5')}>
              <img src={require('addons/image/sidebar/icon5.png')}/>
            </div>
            <div id='icon6'className='nav' onClick={()=> horNav('icon6')}>
              <img src={require('addons/image/sidebar/icon6.png')}/>
            </div>
            <div id='icon7'className='nav' onClick={()=> horNav('icon7')}>
              <img src={require('addons/image/sidebar/icon7.png')}/>
            </div>
          </div>
          <div style={{marginTop:'40px',lineHeight:'30px'}}>
            <div className='j-round-xxlarge j-inline-block j-padding-small j-color4'>
              <div style={{marginBottom:'10px'}} onClick={() => changeColor('light')}><img src={require('addons/image/sidebar/icon8.png')}/></div>
              <div onClick={() => changeColor('dark')}><img src={require('addons/image/sidebar/icon9.png')}/></div>
            </div>
          </div>
          <div style={{position:'absolute',bottom:'10px',left:'42%',lineHeight:'50px'}}>
            <div><img src={require('addons/image/sidebar/icon10.png')}/></div>
            <div><img src={require('addons/image/sidebar/icon11.png')}/></div>
            <div><img src={require('addons/image/sidebar/icon12.png')}/></div>
          </div>
        </div>
    </div>
</div>
  )
}

export default SideBar