<template>

    <div class="row justify-content-center">

        <!-- GREETINGS SECTION -->
        <div class="">
            <br>
            <h4 class="text-center fw-bold"><i class="uil uil-backpack big-con"></i></h4>
            <h1 class="text-center fw-bolder">List a New Essential</h1>
            <h6 class="text-center fw-normal desc-text">
                Creating a list of essential items can also help you pack efficiently and avoid overpacking.<br>
                It can also help you prioritize what items are most important and avoid forgetting anything.<br>
                It is always a good idea to pack light and bring only what you need to make your travels more comfortable.
            </h6>
            <br>

        </div>

        

        <!-- FUTURE TRAVELS SECTION -->
        <form  @submit.prevent="handleSubmitForm"> 
            <center><div class="input-group mb-3 w-50">
                <input type="text" class="form-control" placeholder="Type a new essential that you want to list here" v-model = "ess.name">
                <button class="btn add-item" id="button-addon2">ADD TO ESSENTIAL LIST</button>
            </div></center>

        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
        data() {
            return {
                ess: {
                   name: '',
                } 
            } 
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-essential';
                
                axios.post(apiURL, this.ess).then(() => {
                  this.$router.push('/Dashboard'); 
                  this.ess = {
                    name: ''
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