const LoginScreen = () => {
  return (
    <>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control " />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
             Password
            </label>
            <input type="password" className="form-control " />
          </div>
          <button className="btn btn-primary d-block w-100">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
