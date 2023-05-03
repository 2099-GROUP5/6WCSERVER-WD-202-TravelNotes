<template>

    <div class="row justify-content-center mb-3">

        <!-- GREETINGS SECTION -->
        <div class="">
            <br>
            <h4 class="text-center fw-bold"><i class="uil uil-info-circle big-con"></i></h4>
            <h1 class="text-center fw-bolder">About TravelNotes</h1>
            <br>

        </div>

        <div class="container mt-2">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h6 class="fw-normal info-text">
                        <b>TravelNotes</b> is a comprehensive travel planning site that helps travelers organize their trips and streamline their itinerary.
                        Whether you're planning a weekend getaway or a multi-country adventure, TravelNotes can help make your travel planning process more efficient and enjoyable.
                        <br><br>With TravelNotes, users can easily create and manage their travel plans, including destinations, and essentials.
                        The site offers a user-friendly interface that makes it easy to add details for each travel notes you are making.
                    </h6>
                </div>
                <div class="col-md-4 mb-4">
                    <center><img src="../assets/sample-logo.png" class="w-75"></center>
                </div>
                <div class="col-md-4 mb-4">
                    <p class="quote">Traveling is the only thing you buy that makes you richer, but organizing your travels makes you smarter.</p>
                </div>
            </div>
        </div>


    <div class="w-100 p-2 mt-5" style="background: #7daedd; margin: 0 auto;">
        <div class="container my-5">
            <h1 class="text-center mb-4 creator-title">Meet the Creators</h1>
            <div class="row">
            <div class="col-md-3 mb-4">
                <div class="card">

                <img src="../assets/dale.jpg">
                
                <div class="card-body">
                    <h5 class="card-title">Dale Bedania</h5>
                    <p class="card-text">Back-End Web Developer</p>
                </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">

                <img src="../assets/shane.png">
                
                <div class="card-body">
                    <h5 class="card-title">Shane Paras</h5>
                    <p class="card-text">Front-End Web Developer</p>
                </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">

                <img src="../assets/seb.png">
                
                <div class="card-body">
                    <h5 class="card-title">Sebastian Pamintuan</h5>
                    <p class="card-text">General Web Developer</p>
                </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">

                <img src="../assets/pat.jpg">
                
                <div class="card-body">
                    <h5 class="card-title">Patricia Quiatchon</h5>
                    <p class="card-text">General Web Developer</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    </div>

    
</template>

<script>
import axios from "axios";

</script>

<style>

    body {
        font-family: 'Poppins', sans-serif;
    }

    .icon-size {
        font-size: 3rem;
        color: #eb6864;
    }

    .loc-name {
        font-size: 1.6rem;
    }
    .card:hover {
        background-color: #fde4cc;
    }
    .desc-text {
        color: #939597;
        font-size: 1rem;
        line-height: 1.5;
    }
    .big-con {
        font-size: 10rem;
        color: #eb6864;
    }
    .smol-con {
        font-size: 2rem;
        color: #eb6864;
    }
    .info-text {
        color: #404040;
        font-size: 1rem;
        line-height: 1.5;
    }
    .quote {
        font-size: 1.9rem;
        color: #ca4727;
        line-height: 1.5;
        font-weight: bold;
    }
    .creator-title {
        color: white;
        font-weight: bold;
    }


</style>