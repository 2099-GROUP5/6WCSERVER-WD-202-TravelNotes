
<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark pink-navbar">
    <div class="container">
      <img src="../src/assets/sample-logo.png" alt="" class="d-inline-block align-text-top img-logo">
      <a class="navbar-brand float-left fw-bold fst-italic" href="#">TRAVELNOTES</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">

        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">

          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/dashboard">My Dashboard</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/contact">Contact Us</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
          </li>

        </ul>

      </div>
    </div>
  </nav>



    <!-- Router view -->
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>

</template>

<style>
  .pink-navbar {
    background-color: #eb6864;
  }
  .img-logo {
    width: 3rem;
  }

</style>