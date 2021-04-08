import React from 'react';

function LoanApplicationx() {
    return (
        <>
            <section id="LoanApplication">
                <div className="LA1">
                    <p>loan application</p>
                </div>
                <div className="LA">
                    <div className="LAA1">
                        <div className="LAA1A">
                            <p>Application 1</p>
                        </div>
                        <div className="LAA1B">
                            <p><span>Loan ID</span>: Lorem Ipsum </p>
                            <p><span>Loan amount</span>: 9876543210</p>
                            <p><span>Loan Term</span>: Lorem Ipsum  </p>
                            <p><span>Date of Application</span>: Dolor</p>
                            <p><span>Application Status</span>: <span className="appStatus">Rejected</span></p>
                            <p><span>Rejection Reason</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="LAA1C">
                            <button>View Loan Application</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoanApplicationx;
