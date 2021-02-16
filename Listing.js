import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "./Listing.css";
import carphoto from "../images/car4.png";
function Listing() {

    return (
        <>
            <section >
                <div className="container mt-5">
                    <div className="card p-3 cardcontainer">
                        <div className="row">
                            <div className="col-md-2 left">
                                <div className="listimg">
                                    <img src={carphoto} className="img-fluid" alt="car img" />
                                </div>
                            </div>
                            <div className="col-md-8 right">

                                <div className="list1">

                                    <span>********* </span><br />
                                    <span>********* </span><br />
                                    <span>********* </span>  <br />
                                    <span>*********</span>

                                </div>
                                <div className="list2">
                                    <span>********* </span><br />
                                    <span>********* </span><br />
                                    <span>********* </span>  <br />
                                    <span>*********</span>

                                </div>
                                <div className="list3">
                                    <FontAwesomeIcon className="icon_star" icon={faStar} />
                                    <FontAwesomeIcon className="icon_star" icon={faStar} />
                                    <FontAwesomeIcon className="icon_star" icon={faStar} />
                                    <FontAwesomeIcon className="icon_star" icon={faStar} />
                                    <FontAwesomeIcon className="icon_star" icon={faStar} />
                                    <p>200 customer rating</p>
                                    <FontAwesomeIcon className="icon_calendar" icon={faCalendarAlt} />
                                    <FontAwesomeIcon className="icon_calendar" icon={faMapMarkerAlt} />
                                </div>
                            </div>
                            <div className="col-md-2 ">
                                <div className="list4">
                                    <button type="button" class="btn   book-now-btn">Book Now</button>
                                    <h5 className="price_txt"> INR <span>400</span> /day</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Listing;