import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useRole from "../../hooks/useRole";

const ApplyLoan = () => {
  const { register, handleSubmit,formState : {errors} } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const data = useLoaderData();
  const role = useRole();
  const navigate = useNavigate();

  const handleApplyLoan = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "I am  ready to applying this loan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/applyLoans", data).then((res) => {
          if (res.data.insertedId) {
            navigate(role === "borrower" && "/dashboard/myLoans");
          }
          Swal.fire({
            title: "Submitted!",
            text: "Your loan application has pending. Please pay.",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold">Loan Application Form</h1>
      <form onSubmit={handleSubmit(handleApplyLoan)} className="py-3 space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 space-y-3 lg:space-y-0">
          <div>
            <label>Loan Title</label>
            <input
              type="text"
              {...register("loanTitle")}
              defaultValue={data?.title}
              readOnly
              className="input input-lg w-full"
            />
          </div>
          <div>
            <label>Your Email</label>
            <input
              type="text"
              {...register("email")}
              defaultValue={user?.email}
              readOnly
              className="input input-lg w-full"
            />
          </div>
          <h1 className="border-b border-gray-300 lg:col-span-full mt-3 lg:mt-0"></h1>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 lg:gap-5">
              <div className="">
                <label>First Name</label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="Sender Name"
                  className="input input-lg w-full"
                />
                {errors.firstName?.type === "required" && (
              <p className="text-red-500">First Name is required</p>
            )}
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                  className="input input-lg w-full"
                />
                {errors.lastName?.type === "required" && (
              <p className="text-red-500">Last Name is required</p>
            )}
              </div>
              <div>
                <label>Contact Number</label>
                <input
                  type="number"
                  className="input input-lg w-full"
                  {...register("contactNumber", { required: true })}
                  placeholder="Contact Number"
                />
                {errors.contactNumber?.type === "required" && (
              <p className="text-red-500">Contact Number is required</p>
            )}
              </div>
              <div>
                <label>NID/Passport Number</label>
                <input
                  type="number"
                  className="input input-lg w-full"
                  {...register("nidPassportNumber", { required: true })}
                  placeholder="NID/Passport Number"
                />
                {errors.nidPassportNumber?.type === "required" && (
              <p className="text-red-500">NID/Passport Number is required</p>
            )}
              </div>

              <div className="">
                <label>Loan Reason</label>
                <input
                  type="text"
                  {...register("reason", { required: true })}
                  placeholder="Loan Reason"
                  className="input input-lg w-full"
                />
                {errors.reason?.type === "required" && (
              <p className="text-red-500">Loan Reason is required</p>
            )}
              </div>
              <div className="">
                <label>Your Address</label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Your Address"
                  className="input input-lg w-full"
                />
                {errors.address?.type === "required" && (
              <p className="text-red-500">Your Address is required</p>
            )}
              </div>
            </div>
          </div>
          <h1 className="border-b border-gray-300 mt-3 block lg:hidden"></h1>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 lg:gap-5">
              <div>
                <label>Income Source</label>
                <input
                  type="text"
                  {...register("incomeSource", { required: true })}
                  placeholder="Income Source"
                  className="input input-lg w-full"
                />
                {errors.incomeSource?.type === "required" && (
              <p className="text-red-500">Income Source is required</p>
            )}
              </div>

              <div>
                <label>Interest</label>
                <input
                  type="number"
                  {...register("interest")}
                  defaultValue={data?.interest}
                  className="input input-lg w-full"
                />
              </div>
              <div>
                <label>Monthly Income</label>
                <input
                  type="number"
                  className="input input-lg w-full"
                  {...register("monthlyIncome", { required: true })}
                  placeholder="Monthly Income"
                />
                {errors.monthlyIncome?.type === "required" && (
              <p className="text-red-500">Monthly Income is required</p>
            )}
              </div>
              <div>
                <label>Loan Amount</label>
                <input
                  type="number"
                  className="input input-lg w-full"
                  {...register("loanAmount", { required: true })}
                  placeholder="Loan Amount"
                />
                {errors.loanAmount?.type === "required" && (
              <p className="text-red-500">Loan Amount is required</p>
            )}
              </div>
              <div className="col-span-full">
                <label>Notes</label>
                <input
                  type="text"
                  {...register("notes")}
                  placeholder="Write Notes"
                  className="input input-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <button
          type="submit"
          className="btn bg-red-500 text-white text-lg mt-5 lg:p-5"
        >
          Proceed to Confirm Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
