import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "addons/state/reducer";
import  { toggle_func} from 'addons/function/general.fuc.js';

function Header() {
  const thColor = useSelector((state) => state.theme.value);
  const cla = `${thColor.bgColor2} j-border-bottom j-vertical-center-container`
  const cla2 = `${thColor.bgColor2} j-modal-click j-padding modal`
  const cla3 = `${thColor.bgColor2} j-right j-padding j-card profile j-modal-click modal`
  
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

  return (
    <>
    <div className={cla}style={{height:'80px'}}>
      <div className='j-bar j-text-color5 j-vertical-center-element'>
            {/* for large and xlarge */}
            <div className='j-hide-small j-hide-medium'style={{marginRight:'8px'}}>
              <div className="j-bar-item">
                <div className='j-bolder j-large'style={{position:'relative',top:'8px'}}>Dashboard</div>
              </div>
                <div className='j-right'>
                  {/* search */}
                  <div className="j-bar-item j-text-color3"style={{position:'relative',top:'0px'}}>
                    <img src={require('addons/image/header/search.png')}className='j-inline-block'style={{width:'18px',position:'relative',left:'30px',top:'-1px'}}/>
                    <input type="search"className="j-inline-block j-input j-round-xxlarge j-search-width"style={{paddingLeft:'35px'}}
                    placeholder="Search..."/>
                  </div>
                  {/* calendar */}
                  <div className="j-bar-item"style={{position:'relative',top:'8px'}}>
                    <img src={require('addons/image/header/calendar.png')}style={{marginRight:'8px'}}/>
                    <span>January 25, 2024</span>
                  </div>
                  {/* notification */}
                  <div className="j-bar-item">
                    <img src={require('addons/image/header/bell.png')}style={{width:'40px'}}/>
                  </div>
                  {/* user */}
                  <div className="j-bar-item j-border j-round-xxlarge"onClick={() => toggle_func('profile_modal')}>
                    <div className="">
                      <div className="j-inline-block"style={{marginRight:'10px'}}>
                        <img src={require('addons/image/header/justin.png')}style={{position:'relative',top:'-3px'}}/>
                      </div>
                      <div className="j-inline-block"style={{lineHeight:'15px',marginRight:'10px',position:'relative',top:'4px'}}>
                      <span>Justin Bergson</span><br/>
                        <span className="">justin@gmail.com</span>
                      </div>
                      <div className="j-inline-block">
                        <img src={require('addons/image/arrow_down.png')}style={{position:'relative',top:'-3px'}}/>
                      </div>
                      </div>
                  </div>
                </div>
                <div className='j-clearfix'></div>
            </div>
            {/* for small and medium */}
            <span className='j-hide-large j-hide-xlarge 'style={{marginRight:'8px'}}>
              <div className="j-bar-item">
                <div className='j-bolder j-large j-hide-small'style={{position:'relative',top:'16px'}}>Dashboard</div>
                <span  id="mo"className="j-xlarge j-clickable j-hide-medium j-hide-large j-hide-xlarge"style={{position:'relative',top:'16px'}}
                  onClick={() => {toggle_func('menu_modal')}}>
                    &#9776;
                </span>
              </div>
              <span className='j-right'style={{position:'relative',top:'12px'}}>
                {/* search */}
              <div className="j-bar-item">
                <div className='j-hide-medium j-circle j-border-2'style={{padding:'2px 8px 12px 8px'}}onClick={() => {toggle_func('search_modal')}}>
                  <img src={require('addons/image/header/search2.png')}className=""style={{width:'20px',position:'relative',top:'5px'}}/>
                </div>
                  <span className="j-hide-small">
                    <img src={require('addons/image/header/search.png')}className='j-inline-block'style={{width:'18px',position:'relative',left:'30px',top:'-1px'}}/>
                    <input type="search"className="j-inline-block j-input j-round-xxlarge j-search-width"style={{paddingLeft:'35px'}}
                    placeholder="Search..."/>
                    </span>
                </div>
                {/* notification */}
                <div className="j-bar-item">
                  <img src={require('addons/image/header/bell.png')}/>
                </div>
                {/* user */}
                <div className="j-bar-item"onClick={() => toggle_func('profile_modal')}>
                  <img src={require('addons/image/header/justin.png')}/>
                </div>
              </span>
              <div className='j-clearfix'></div>
            </span>
        </div>
    </div>
    {/* small screen sidebar*/}
    {/* icon */}
    <div className='j-hide-large j-hide-xlarge j-hide-medium'>
    <div id="menu_modal"className={cla2}style={{width:'100%',display:'none'}}>
      <div className='j-large'>Menu</div>
      <div className="j-row">
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon1.png')}/>
        </div>
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon2.png')}/>
        </div>
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon3.png')}/>
        </div>
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon4.png')}/>
        </div>
      </div>
      <div className="j-row">
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon5.png')}/>
        </div>
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon6.png')}/>
        </div>
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon7.png')}/>
        </div>
      </div>
      <div className='j-large'>Display</div>
      <div className="j-row">
        <div className='j-col s3 j-section' onClick={() => changeColor('light')}>
          <img src={require('addons/image/sidebar/icon8.png')}/>
        </div>
        <div className='j-col s3 j-section'onClick={() => changeColor('dark')}>
          <img src={require('addons/image/sidebar/icon9.png')}/>
        </div>
      </div>
      <div className='j-large'>Others</div>
      <div className="j-row">
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon10.png')}/>
        </div>
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon11.png')}/>
        </div>
        <div className='j-col s3 j-section'>
          <img src={require('addons/image/sidebar/icon12.png')}/>
        </div>
      </div>
    </div>
  </div>
  {/* search */}
  <div className='j-hide-large j-hide-xlarge j-hide-medium'>
    <div id="search_modal"className={cla2}style={{width:'100%',display:'none'}}>
      <div className="j-cnter">
        <img src={require('addons/image/header/search.png')}className='j-inline-block'style={{width:'18px',position:'relative',left:'30px',top:'-1px'}}/>
        <input type="search"className="j-inline-block j-input j-round-xxlarge"style={{paddingLeft:'35px',width:'88%'}}
          placeholder="Search..."/>
      </div>
    </div>
  </div>
  <div id='profile_modal'className={cla3}style={{position:'absolute',width:'200px',zIndex:'1',lineHeight:'35px',display:'none'}}>
    <div><img src={require('addons/image/sidebar/icon10.png')}style={{marginRight:'5px'}}/> Profile</div>
    <div><img src={require('addons/image/sidebar/icon11.png')}style={{marginRight:'5px'}}/> Settings</div>
    <div><img src={require('addons/image/sidebar/icon12.png')}style={{marginRight:'5px'}}/> Log Out</div>
  </div>
 </>
  )
}

export default Header