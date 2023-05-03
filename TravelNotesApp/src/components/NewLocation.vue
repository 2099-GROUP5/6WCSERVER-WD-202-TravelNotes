<template>

    <div class="row justify-content-center">
        
        <!-- GREETINGS SECTION -->
        <div class="">
            <br>
           
            <h4 class="text-center fw-bold"><i class="uil uil-map-marker-plus big-con"></i></h4>
            <h1 class="text-center fw-bolder">Add a New Location</h1>

            <h6 class="text-center fw-normal desc-text">
                Having a list of destinations when traveling is essential in making the most out of your trip.<br>
                It helps you plan ahead and make sure that you won't miss out on any must-see places.<br>
                Creating a list can be as simple as jotting down the names of the places you want to visit
            </h6>
            <br>

        </div>


        <!-- FUTURE TRAVELS SECTION -->
        <form @submit.prevent="handleSubmitForm">
        <center><div class="input-group mb-3 w-50">
            <input type="text" class="form-control" placeholder="Type a new location that you want to list here" v-model = "user.place">
        </div></center>
            <center><div class="input-group mb-3 w-50">
                <input type="date" class="form-control" v-model = "user.date">

                <button class="btn add-item" id="button-addon2">ADD TO DESTINATION LIST</button>
            </div></center>
        </form>


    </div>
</template>

<script>

import axios from "axios";
    export default {
        data() {
            return {
                user: {
                   place: '',
                   date: '',
      
                } 
            }
            
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';
                
                axios.post(apiURL, this.user).then(() => {
                  this.$router.push('/Dashboard')
                  this.user = {
                    place: '',
                    date: '',

                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
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
    .add-item {
        background-color: #eb6864;
        color: white;
        font-weight: medium;
    }
    .add-item:hover {
        background-color: #bc5350;
        color: white;
        font-weight: medium;
    }


</style>