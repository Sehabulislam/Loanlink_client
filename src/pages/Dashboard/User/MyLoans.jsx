import React from "react";

const MyLoans = () => {
  return (
    <div>
      <title>Loanlink | My Dashboard</title>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="">
              <th>ID</th>
              <th>Info</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>10000 TK</td>
              <td>
                {
                  <div className="badge badge-success">
                    <svg
                      className="size-[1em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="currentColor"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></circle>
                        <polyline
                          points="7 13 10 16 17 8"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></polyline>
                      </g>
                    </svg>
                    Paid
                  </div>
                }
              </td>
              <td className="flex gap-1">
                {
                  <>
                    <button className="btn btn-secondary">Pay</button>
                    <button className="btn btn-info">
                      View Details
                    </button>
                    <button className="btn btn-error">Cancel</button>
                  </>
                }
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>10000 TK</td>
              <td>
                {
                  <div className="badge badge-success">
                    <svg
                      className="size-[1em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="currentColor"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></circle>
                        <polyline
                          points="7 13 10 16 17 8"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></polyline>
                      </g>
                    </svg>
                    Paid
                  </div>
                }
              </td>
              <td className="flex gap-1">
                {
                  <>
                    <button className="btn btn-secondary">Pay</button>
                    <button className="btn btn-info">
                      View Details
                    </button>
                    <button className="btn btn-error">Cancel</button>
                  </>
                }
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>10000 TK</td>
              <td>
                {
                  <div className="badge badge-success">
                    <svg
                      className="size-[1em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="currentColor"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></circle>
                        <polyline
                          points="7 13 10 16 17 8"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></polyline>
                      </g>
                    </svg>
                    Paid
                  </div>
                }
              </td>
              <td className="flex gap-1">
                {
                  <>
                    <button className="btn btn-secondary">Pay</button>
                    <button className="btn btn-info">
                      View Details
                    </button>
                    <button className="btn btn-error">Cancel</button>
                  </>
                }
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>10000 TK</td>
              <td>
                {
                  <div className="badge badge-success">
                    <svg
                      className="size-[1em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="currentColor"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></circle>
                        <polyline
                          points="7 13 10 16 17 8"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></polyline>
                      </g>
                    </svg>
                    Paid
                  </div>
                }
              </td>
              <td className="flex gap-1">
                {
                  <>
                    <button className="btn btn-secondary">Pay</button>
                    <button className="btn btn-info">
                      View Details
                    </button>
                    <button className="btn btn-error">Cancel</button>
                  </>
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoans;
