import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class Explore extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.explore

    return <div className="explore-area pd-top-85">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title"> { data.title } </h2>
        </div>
        <div className="row">
        { data.items.map( ( item, i )=>
            <div key={ i } className="col-lg-4 col-sm-6">
            <div className="single-explore">
              <div className="thumb">
                <img src={ publicUrl+item.image } alt="explore" />
                
              </div>
              <div className="details readeal-top">
                <h4><Link to={item.url}>{ item.city }</Link></h4>
                
              </div>
            </div>
          </div>
         ) }

        </div>
      </div>
    </div>


        }
}

export default Explore