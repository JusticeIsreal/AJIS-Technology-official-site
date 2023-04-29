import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      useremail: "",
      message: "",
    },
  });

  // submit user details
  const onSubmit = async (data) => {
    // reset();
  };
  return (
    <div className="contact-form">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>let's talk</h2>
        <div className="input-main-con">
          <div className="input-con">
            <input
              type="text"
              placeholder="First name"
              {...register("username", { required: true })}
            />
          </div>
          {errors.username && (
            <p className="validation-text">Kindly enter a name.</p>
          )}
        </div>

        <div className="input-main-con">
          <div className="input-con">
            <input
              type="email"
              placeholder="Enter Email"
              {...register("useremail", { required: true })}
            />
          </div>
          {errors.useremail && (
            <p className="validation-text">
              Kindly enter a valid email address.
            </p>
          )}
        </div>
        <div className="input-main-con">
          <div className="input-con">
            <input
              type="number"
              placeholder="Enter phone number"
              {...register("phonenumber", { required: true })}
            />
          </div>
          {errors.phonenumber && (
            <p className="validation-text">
              Kindly enter a valid phone number.
            </p>
          )}
        </div>

        <div className="input-main-con">
          <div className="input-con">
            <textarea
              placeholder="Write us a message"
              {...register("message", { required: true })}
            />
          </div>
          {errors.message && (
            <p className="validation-text">Kindly enter your message.</p>
          )}
        </div>
        <div className="login-btn-link">
          <input
            type="submit"
            // disabled={regBtnLoading}
            className="login-submit-btn"
            // value={regBtnLoading ? "Uploading ..." : "Sign up"}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
