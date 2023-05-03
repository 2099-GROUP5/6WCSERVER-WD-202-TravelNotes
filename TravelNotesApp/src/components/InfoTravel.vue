<template>

    <div class="row justify-content-center">

        <!-- GREETINGS SECTION -->
        <div class="">
            <br>
            <h4 class="text-center fw-bold">A TRIP TO</h4>

            <h1 class="text-center fw-bolder place">{{list.place}}</h1>
            <h5 class = "text-center"> {{list.date }}</h5>

            
            <br><br>

        </div>



        <!-- ESSENTIALS SECTION -->
        <div class="">
            <h3 class="text-center">ESSENTIALS</h3>

            <div class="container" style="padding: .5rem;">

                <div class="row">
                    <div v-for= "item in ess" :key="item._id"  class="col-md-4" >
                    <div class="card w-100 mt-3">
                        <div class="card-body d-flex align-items-center" style="margin-right: 1rem;">
                        <div class="ms-3">
                            <i class="uil uil-check-circle smol-icon"></i>
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 class="card-title dest-name">{{item.name}}</h5>
                        </div>
                        </div>
                    </div>
                    </div>
                
            
                </div>
            </div>
                
                

                <div class="text-end mt-3">
                    <router-link class="btn btn-success" to="/newessential"><i class="uil uil-backpack"></i> List a New Essential</router-link>
                </div>

            </div>

        </div>

    


</template>

<script>
import axios from "axios";

export default {
        data() {
            return {
                    list: {},
                    ess: []
            }
        },
        created() {
            let apiURL2 = `http://localhost:4000/api/travels/${this.$route.params.id}`;
            axios.get(apiURL2).then(res => {
                this.list = res.data;
            }).catch(error => {
                console.log(error)
            });

            let essAPI = `http://localhost:4000/api/essentials`;
            axios.get(essAPI).then(res => {
                this.ess = res.data;
            }).catch(error => {
                console.log(error)
            });

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

    .smol-icon {
        font-size: 1.5rem;
        color: #eb6864;
    }

    .dest-name {
        font-size: 1.3rem;
    }

    .card:hover {
        background-color: #fde4cc;
    }

    .place { 
        text-decoration: overline;
    }

</style>