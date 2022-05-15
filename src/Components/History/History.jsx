import React, { Fragment } from "react";

const History = ({ history }) => {
  return (
    <Fragment>
      <h1>History</h1>

      <div className="d-flex justify-content-center align-items-center"></div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">WON</th>
          </tr>
        </thead>
        <tbody>
          {history.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td><td> {el}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default History;
