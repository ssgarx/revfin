import React from 'react';
import UserProfilePic from "../media/userpic.png";

function Userx() {
    return (
        <>
            <section id="User">
                <div className="user-1">
                    <p>Credit Score: XX</p>
                </div>
                <div className="UserA">
                    <div className="UserA1">
                        <img src={UserProfilePic} alt="" />
                    </div>
                    <div className="UserA2">
                        <p><span>Name</span>: Lorem Ipsum Dolor</p>
                        <p><span>Email</span>: Lorem@ipsum.com</p>
                        <p><span>Father's Name</span>: Dolor Ipsum </p>
                        <p><span>Marital Status</span>: Dolor</p>
                        <p><span>Address</span>: Lorem Ipsum Dolor Posum</p>
                    </div>
                    <div className="UserA3">
                        <p><span>No of Dependent</span>: Lorem Ipsum </p>
                        <p><span>Phone</span>: 9876543210</p>
                        <p><span>Pancard</span>: Lorem Ipsum  </p>
                        <p><span>Residence Status</span>: Dolor</p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Userx;
