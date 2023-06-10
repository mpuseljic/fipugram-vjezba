<template>
  <div class="about">
      <h1>This is a signup page</h1>

      <div class="row">
          <div class="col"></div>
          <div class="col">
              <form>
                  <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                      />
                      <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                      </small>
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword2">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
          <div class="col"></div>
      </div>
  </div>
</template>