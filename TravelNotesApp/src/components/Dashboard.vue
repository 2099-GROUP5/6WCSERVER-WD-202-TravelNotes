<template>

    <div class="row justify-content-center">

        <!-- GREETINGS SECTION -->
        <div class="">
            <br>
            <h4 class="text-center fw-bold">HELLO THERE !</h4>
            <h1 class="text-center fw-bolder">{{Users[0].name}}</h1>
            <h5 class="text-center fw-normal">{{Users[0].email}}</h5>
           

        </div>
        <div class="row d-flex align-items-center justify-content-center mt-2 mb-5">
                    <div class="col-lg-6 " >
                    <div class="card w-100 opr">
                        <div class="card-body d-flex align-items-center" style="margin-right: 1rem;">
                        <div class="ms-3">
                            
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <router-link :to="{name: 'managetravels'}" class="btn btn-success w-100">MANAGE TRAVELS </router-link>

                        </div>

                        <div class="flex-grow-1 ms-3">
                            <router-link :to="{name: 'manageessentials'}" class="btn btn-success w-100">MANAGE ESSENTIALS </router-link>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        

        <!-- FUTURE TRAVELS SECTION -->
        <div class="travels">
            <h3 class="text-center">Future Travels</h3>
            <router-link :to="{name: 'newlocation'}" class="btn btn-success">+ ADD NEW TRAVEL </router-link>

            <!-- PALAWAN -->
            <div v-for="p in travels" :key="p._id" class="container" style="padding: .5rem;">
                
                <div class="card w-100">
                    <div class="card-body d-flex align-items-center" style="margin-right: 1rem;">

                        <div class="ms-3">
                            <i class="uil uil-sunset icon-size"></i>
                        </div>

                        <div class="flex-grow-1 ms-3">
                            <h5 class="card-title loc-name">{{p.place}}</h5>
                        </div>

                        <div class="ms-3">
                            <p class="card-text">{{p.date}}</p>
                        </div>

                        <div class="ms-3">
                            <router-link :to="{name: 'infotravel', params: {id: p._id}}" class="btn btn-success" >🡆</router-link>
                        </div>

                    </div>
                </div>

            </div>
         




        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
        data() {
            return {
                Users: [],
                travels: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Users = res.data;
            }).catch(error => {
                console.log(error)
            });
            let apiURL2 = 'http://localhost:4000/api/travels';
            axios.get(apiURL2).then(res => {
                this.travels = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-student/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
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

    .opr { 
        border-radius: 15px;
        background-color: #fbd8d1;
    } 

    .travels { 
        background-color: #fceeed;
        padding: 2%;
        border-radius: 15px;
    } 

</style>