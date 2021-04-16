import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = 'logo'
    let anchor = '#'
    return (
      <div>
        <div className="navbar-area">
          <nav className="navbar navbar-area navbar-expand-lg">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <button className="menu toggle-btn d-block d-lg-none" data-toggle="collapse" data-target="#realdeal_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-left" />
                  <span className="icon-right" />
                </button>
              </div>
              <div className="logo readeal-top">
                Flamin'GO
                    </div>
              <div className="nav-right-part nav-right-part-mobile">
                <Link className="btn btn-yellow" to="/add-property">ADD LISTING <span className="right"><i className="la la-plus" /></span></Link>
              </div>
              <div className="collapse navbar-collapse" id="realdeal_main_menu">
                <ul className="navbar-nav menu-open readeal-top">
                  <li><Link to="/home-v2">Acceuil</Link></li>
                  <li><Link to="/search-list">Annonces</Link></li>

                  <li className="menu-item-has-children">
                    <a href="#">Services</a>
                    <ul className="sub-menu">
                  
                      <li><Link to="/About">A propos</Link></li>
                      <li><Link to="/advisor">Partenaires</Link></li>

                    </ul>
                  </li>

                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

            </div>
          </nav>
        </div>
      </div>
    )
  }
}


export default Navbar