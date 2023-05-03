<template>
    <div>
        <div class="justify-content-center">

<!-- GREETINGS SECTION -->
<div class="">
    <br>
    <h4 class="text-center fw-bold title">MANAGE ESSENTIALS</h4>
</div>
</div>


<div class="wrapper">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
   
     
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ess in Essentials" :key="ess._id">
                        <td>{{ ess.name }}</td>
                       
                        <td class="d-flex justify-content-end">
                            <router-link :to="{name: 'editessential', params: { id: ess._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteStudent(ess._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                Essentials: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/essentials';
            axios.get(apiURL).then(res => {
                this.Essentials = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-ess/${id}`;
                let indexOfArrayItem = this.Essentials.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.$router.push('/Dashboard'); 
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .btn-success {
        margin-right: 10px;
    }

    .row { 
        width:70%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff2ef
    }

    .wrapper { 
        width: 100%; 
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;   
        background-color: #fefffe     ;
    }

.title { 
    font-size: 3vw;
} 
</style>