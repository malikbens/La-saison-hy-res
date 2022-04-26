import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class BannerV2 extends Component {

  componentDidMount() {

    const $ = window.$;

    if ($('.single-select').length) {
      $('.single-select').niceSelect();
    }
  }

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    let data = sectiondata.banner

    const inlineStyle = {
      backgroundImage: 'url(' + publicUrl + '/assets/img/banner/1.jpg)'
    }

    return <div>
      {/* banner area start */}
      <div className="banner-area jarallax" style={inlineStyle}>
        <div className="container">
          <div className="banner-inner-wrap">
            <div className="row">
              <div className="col-12">
                <div className="banner-inner">
                  <h5 className="sub-title">{data.subtitle}</h5>
                  <h1 className="title">{data.title1} <br /> {data.title2}</h1>
                  <div className="banner-btn-wrap">
                    <a className="btn btn-yellow float-left mr-2" href={data.btnurl}>{data.btntxt}</a>
                    <a href={data.videolink} className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner area end */}

    </div>
            

        }
}

export default BannerV2