<template>

    <div class="row justify-content-center">

        <!-- GREETINGS SECTION -->
        <div class="">
            <br>
            <h4 class="text-center fw-bold"><i class="uil uil-at big-con"></i></h4>
            <h1 class="text-center fw-bolder">Contact Us</h1>
            <h6 class="text-center fw-normal desc-text">
                We are always happy to hear from you! Here are the details where you can contact us:
            </h6>
            <br>

        </div>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6 text-center">
                <ul class="list-unstyled">
                    <li>
                        <i class="uil uil-envelopes smol-con"></i>
                        <br>travelnotes@ourmail.com
                    </li>
                    
                    <br>

                    <li>
                        <i class="uil uil-phone smol-con"></i>
                        <br>0929-611-8003
                    </li>

                    <br>

                    <li>
                        <i class="uil uil-compass smol-con"></i>
                        <br>Holy Angel Ave, Sto Rosario,
                        <br>Angeles, 2009, Philippines
                    </li>

                </ul>
            </div>
            <div class="col-md-6">
                <img src="../assets/ac-map.png" class="img-fluid rounded" alt="Contact Image">
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


</style>