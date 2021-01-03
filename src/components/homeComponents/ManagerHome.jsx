import React from 'react';

function ManagerHome() {
  return (
    <div className="container">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-auto">
            <img src="//placehold.it/200" className="img-fluid" alt="" />
          </div>
          <div className="col">
            <div className="card-block px-2">
              <h4 className="card-title">Manage Citations for Projects</h4>
              <p className="card-text">
                Create new projects and save citations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ManagerHome;
