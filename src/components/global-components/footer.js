import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_v1 extends Component {

  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = "Footer logo"
    const inlineStyle = {
      backgroundImage: 'url(' + publicUrl + footerdata.footerbg + ')'
    }

    return (
      <footer className="footer-area">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col">
                <a className="footer-logo" href="#">Flamin'GO</a>
              </div>
              <div className="col">
                <div className="col">
                  <h4 className="widget-title">{footerdata.quicklink.title}</h4>
                  <ul>
                    {footerdata.quicklink.links.map((item, i) =>
                      <li className="readeal-top" key={i}><Link to={item.url} >{item.title}</Link></li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="footer-social text-sm-right">
                  <span>Suivez-nous</span>
                  <ul className="social-icon">
                    {footerdata.socialicon.map((item, i) =>
                      <li key={i}>
                        <a href={item.url} target="_blank"><i className={item.icon} /></a>
                      </li>
                    )}
                  </ul>
                </div>


              </div>
            </div>
          </div>


        </div>
      </footer>

    )
  }
}


export default Footer_v1