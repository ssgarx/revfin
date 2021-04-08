import React from 'react';
import Userx from "./Userx";
import LoanApplicationx from "./LoanApplicationx";
import Loansx from "./Loansx";
import Collectionx from "./Collectionsx";
import Insurancex from "./Insurancex";
import Iotx from "./Iotx";
import Remarksx from "./Remarksx";
import Communicationsx from "./Communicationsx";
import AdditionalDocsx from "./AdditionalDocsx";
function Mainpage() {

    return (
        <>
            <div className="mainpage">
                <div className="mp1">
                    <p><a href="#User">Dahboard</a></p>
                    <p><a href="#User">User</a></p>
                    <p><a href="#Loans">Loan Application</a></p>
                    <p><a href="#Loans">Loan Schedule</a></p>
                    <p><a href="#Collections">Partner Management</a></p>
                    <p><a href="#Collections">Revenue Management</a></p>
                    <p><a href="#Insurance">Insurance</a></p>
                    <p><a href="#Communications">Communications</a></p>
                    <p><a href="#Remarks">Bulk Updates</a></p>
                    <p><a href="#User">Rules</a></p>
                    <p><a href="#User">Company Policies</a></p>
                    <p><a href="#IOT">IOT</a></p>
                </div>
                <div className="mp2">
                    <div className="mp2a">
                        <div className="sections" >
                            <Userx />
                            <LoanApplicationx />
                            <Loansx />
                            <Collectionx />
                            <Insurancex />
                            <Iotx />
                            <Remarksx />
                            <Communicationsx />
                            <AdditionalDocsx />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainpage;
