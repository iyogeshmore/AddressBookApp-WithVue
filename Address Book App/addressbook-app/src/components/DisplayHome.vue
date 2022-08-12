<template>
    <table id="display" className="display">
        <tbody>
            <tr>
                <th>fullName</th>
                <th>address</th>
                <th>city</th>
                <th>state</th>
                <th>zipCode</th>
                <th>phoneNo</th>
                <th>action</th>

            </tr>
            <tr v-for="addressBook in addressBookData" :key="addressBook.id">
                <td>{{ addressBook.fullName }}</td>
                <td>{{ addressBook.address }}</td>  
                <td>{{ addressBook.city }}</td>
                <td>{{ addressBook.state }}</td>
                <td>{{ addressBook.zipCode }}</td>
                <td>{{ addressBook.phoneNo }}</td>
                <td>
                    <img @click="remove(addressBook.id)" src="../assets/delete.svg"
                        alt="delete" />
                    <img @click="update(addressBook.id)" src="../assets/edit.svg"
                        alt="edit" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import AddressBookService from "../Service/AddressBookService";
export default {
    name: "DisplayHome",
    data() {
        return {
            addressBookData: [],
        };
    },
    methods: {
        getAllAddressBookData() {
            AddressBookService.getAllAddressBookData().then((response) => {
                console.log(response.data.data);
                this.addressBookData = response.data.data;
            });
        },
        update(id) {
            this.$router.push({ name: "EditForm", params: { id: id } });
        },
        remove(id) {
            var answer = window.confirm(
                "Press ok to delete data..."
            );
            if (answer === true) {
                AddressBookService.deleteAddressBook(id)
                    .then((data) => {
                        alert("Employee deleted Successfully!!");
                        location.reload();
                        this.getAllAddressBookData();
                    })
                    .catch((error) => {
                        alert("Something Went Wrong!");
                    });
            } else {
                alert("Employee Not Deleted!!!");
            }
        },
        displayMessage() {
            console.log("Welcome to Bridgelabz");
        },
    },
    created() {
        this.displayMessage();
        this.getAllAddressBookData();
    },
};
</script>

