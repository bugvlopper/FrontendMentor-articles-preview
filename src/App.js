import './App.css';
import iconFacebook from "./images/icon-facebook.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconPinterest from "./images/icon-pinterest.svg";
import drawer from "./images/drawers.jpg";
import avatar from "./images/avatar-michelle.jpg";
import { Component } from 'react';

class App extends Component {
  state = {  } 

  _toggleShare(params){
    let target = params.target;
    let share = document.getElementsByClassName('share')[0];
    if(target.nodeName === "path"){
        if(target.parentElement.parentElement.className.match(/active/)){
        target.parentElement.parentElement.classList.remove("active")
        share.classList.remove('active')
      }else{
        share.classList.add('active')
        target.parentElement.parentElement.classList.add('active')
      }
    }else if(target.nodeName === "svg"){
        if(target.parentElement.className.match(/active/)){
            target.parentElement.classList.remove("active")
            share.classList.remove('active')
          }else{
            share.classList.add('active')
            target.parentElement.classList.add('active')
          }
    }else{
      if(target.className.match(/active/)){
        target.classList.remove("active")
        share.classList.remove('active')
      }else{
        share.classList.add('active')
        target.classList.add('active')
      }
    }
  }

  render() { 
    
    return (
      <div className='card'>
        <div className='drawer'>
        <img src={drawer} alt="drawer" />
        </div>
        <div className='content'>
          <h1>
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
          </p>
          <div className='bottom-content'>
            <div className='avatar'>
              <img src={avatar} alt="avatar" />
              <div className='avatar-content'>
                <h2>Michelle Appleton</h2>
                <p className='date'>
                  28 jun 2020
                </p>
              </div>
            </div>
            <div className='share'>
              <p>Share</p>
              <a href="/">
                <img src={iconFacebook} alt="Facebook" />
              </a>
              <a href="/">
                <img src={iconTwitter} alt="Twitter" />
              </a>
              <a href="/">
                <img src={iconPinterest} alt="Pinterest" />
              </a>
            </div>
            <div className='shareButton' onClick={this._toggleShare}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
