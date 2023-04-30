import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    axios
      .post("https://api-j.onrender.com/ajis/meaasge/vistorsmsg", data)
      .then((resp) => {
        console.log(resp);
        alert("Message sent, we would get bck to you as soo as possible");
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
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
              {...register("visitorname", { required: true })}
            />
          </div>
          {errors.visitorname && (
            <p className="validation-text">Kindly enter a name.</p>
          )}
        </div>

        <div className="input-main-con">
          <div className="input-con">
            <input
              type="email"
              placeholder="Enter Email"
              {...register("visitoremail", { required: true })}
            />
          </div>
          {errors.visitoremail && (
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
              {...register("visitorphonenumber", { required: true })}
            />
          </div>
          {errors.visitorphonenumber && (
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
