<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-for="(customer, index) in customers" :key="index">
                <tr>
                    <td>{{customer.firstName}}</td>
                    <td>{{customer.lastName}}</td>
                    <td>{{customer.email}}</td>
                    <td>{{customer.phone}}</td>
                    <td><a :href="'/customers/' + customer.id" class="btn btn-primary">Edit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CustomerDataService from '../services/CustomerDataService'

export default {
    name: 'customers',
    data() {
        return {
            customers: []
        }
    },
    methods: {
        retrieveCustomers() {
            CustomerDataService.getAll()
                .then(response => {
                    this.customers = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.retrieveCustomers()
    }
}
</script>
