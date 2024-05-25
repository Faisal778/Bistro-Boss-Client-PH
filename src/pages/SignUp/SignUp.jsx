import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser} = useContext(AuthContext);

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
    })
  }



  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600"> email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=..*[a-z])/,
                  })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600">
                    Password must have minimum length of 6
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="text-red-600">
                    Password must have maximum length of 20
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-600">
                    Password must one upper case, one lower case, one special chanracter
                  </p>
                )}

                {/* {errors.password && <span className="text-red-600">Password is required</span>}*/}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Sign UP" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
