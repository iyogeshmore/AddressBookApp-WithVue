<template>
    <div>

        <header class="header-content header">
            <div class="logo-content">
                <router-link to="/">
                    <img src="../assets/logo.jpeg" alt="logo" />
                </router-link>

                <div>
                    <router-link to="/">
                        <span class="addressBook-text">Address</span> <br>
                        <span class="addressBook-text addressBook-book">Book</span>
                    </router-link>

                </div>
            </div>
        </header>

        <!-- UC-2 - Ability to add Form Header -->

        <div class="form-content">
            <form class="form" action="#" @submit.prevent="addAddressBook">
                <div class="form-head">
                    <div class="form-head-text">Person Address Form</div>
                    <img class="form-head-image" src="../assets/cancelButton.png" alt="logo">
                </div>

                <!-- UC-3 - Add Form Input Fields to the Address Book Form UI  -->

                <div class="form-data">
                    <div class="row-content">
                        <label for="name" class="label text">Full Name</label><br>
                        <input type="text" v-model="formData.fullName" class="input" id="fullName"
                            placeholder="Your Name..." required>
                    </div>
                    <div class="row-content">
                        <label for="address" class="label text">Address</label><br>
                        <textarea name="address" v-model="formData.address" id="address" placeholder="Your Address..."
                            required></textarea>
                    </div>
                    <div class="row-content">
                        <div class="column-data">
                            <div class="column-content">
                                <label for="city" class="label text">City</label>
                                <br>
                                <select name="city" v-model="formData.city" id="city" required>
                                    <option selected disabled hidden value="Select City">Select City</option>
                                    <option value="Agra">Agra</option>
                                    <option value="Aurangabad">Aurangabad</option>
                                    <option value="Bhopal">Bhopal</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Chiplun">Chiplun</option>
                                    <option value="Dapoli">Dapoli</option>
                                    <option value="Dwarka">Dwarka</option>
                                    <option value="Faridabad">Faridabad</option>
                                    <option value="Ghaziabad">Ghaziabad</option>
                                    <option value="Gurgaon">Gurgaon</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Hubli">Hubli</option>
                                    <option value="Indore">Indore</option>
                                    <option value="Jammu">Jammu</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Lucknow">Lucknow</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Mandawa">Mandawa</option>
                                    <option value="Nagpur">Nagpur</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Ooty">Ooty</option>
                                    <option value="Patna">Patna</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Ujjain">Ujjain</option>
                                    <option value="Vadodara">Vadodara</option>
                                </select>
                            </div>
                            <div class="column-content">
                                <label for="state" class="label text">State</label>
                                <br>
                                <select name="state" v-model="formData.state" id="state">
                                    <option selected disabled hidden value="Select State">Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                            <div class="column-content">
                                <label for="zip" class="label text">Zip code</label><br>
                                <input type="text" v-model="formData.zipCode" class="input zipcode" id="zip"
                                    placeholder="Your Zipcode..." required>
                            </div>
                        </div>
                    </div>
                    <div class="row-content">
                        <label for="phoneNumber" class="label text">Phone Number</label>
                        <br>
                        <input type="tel" class="input" v-model="formData.phoneNo" id="phoneNumber"
                            placeholder="Your phone number..." required>
                    </div>
                </div>

                <!-- UC-5 - Add Submit and Reset Button at the Bottom of the Form -->

                <div class="buttons-contact">
                    <button type="submit" class="button button-submit" id="submitButton">Add</button>

                    <!--UC-9 - Handle Cancel and Reset Event -->

                    <button type="reset" class="button button-reset" id="resetButton">Reset</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import AddressBookService from "../Service/AddressBookService"

export default {
    name: 'AddAddressBook',
    data() {
        return {
            formData: {
                fullName: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                phoneNo: '',
            },
        };
    },
    methods: {
        addAddressBook(event) {
            event.preventDefault();
const data = this.formData;
            AddressBookService.addAddressBook(data)
                .then((response) => {
                    console.log(response);
                    console.log(response.data.data);
                    this.employees = response.data.data;
                    alert("Data Added Successfully!!", response);
                })
                .catch((error) => {
                    console.log(error);
                    alert("WARNING!! Error while adding the Data!");
                });
        },
    },
};
</script>

<style>
/* <!-- UC-1 - Begin with creating an Address Book Form UI  --> */

* {
    box-sizing: border-box;

}

body {
    margin: 0;
    height: 100%;
}

.header {
    padding: 10px 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
}

.addressBook-text {
    text-align: left;
    font: normal normal bold 22px/25px Montserrat;
    letter-spacing: 0px;
    text-transform: uppercase;
    opacity: 1;
    color: #008CFF;
    margin-left: 10px;
    text-transform: uppercase;
}

.addressBook-book {
    color: #42515f;
    text-transform: uppercase;
    letter-spacing: 0px;
    text-align: left;
}

/* <!-- UC-2 - Ability to add Form Header --> */

.form-content {
    min-height: calc(100% - 80px);
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid rgb(192, 14, 224);
}

.form {
    background: #ffffff 0% 0% no-repeat padding-box;
    min-width: 1067px;
    margin: 2%;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #F5F5F5;
    border-radius: 8px;
    opacity: 1;
}

.form-head {
    display: flex;
    background: #008cff 0% 0% no-repeat padding-box;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    padding: 20px;
}

.form-head-text {
    flex: 6;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    font: normal normal normal 28px/37px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
}

/* <!-- UC-3 - Add Form Input Fields to the Address Book Form UI  --> */

.row-content {
    margin-left: 30px;
    min-width: 80%;
    min-height: 80%;
    max-width: 100%;
    margin-bottom: 15px;
}

.form-data {
    margin: 2% 10%;
    display: flex;
    flex-flow: column wrap;
}

label {
    padding: 16px 12px;
    display: inline-block;
    margin-top: 20px;
}

.text {
    text-align: left;
    font: bold normal normal normal 16px/24px Montserrat;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
}

.input {
    width: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #53b0e9;
    border-radius: 3px;
    opacity: 1;
    resize: horizontal;
    padding: 16px 12px;
}

textarea {
    height: 80%;
    width: 100%;
    resize: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #53b0e9;
    border-radius: 3px;
    letter-spacing: -1px;
    opacity: 1;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-top: 10px;
}

.column-data {
    display: flex;
    flex-flow: row wrap;
}

.column-content {
    flex: 2;
}

select {
    padding: 12px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #53b0e9;
    border-radius: px;
    text-align: left;
    font: normal normal normal 18px/24px Montserrat;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    width: 90%;
}

.zipcode {
    padding: 16px 10px;
}

/* <!-- UC-4 - Add Form Validations --> */

error-output {
    margin-left: px;
    font-size: 16px;
    font-style: italic;
    color: red;
}

/* <!-- UC-5 - Add Submit and Reset Button at the Bottom of the Form --> */

.buttons-contact {
    margin-top: 30px;
    display: flex;
    justify-content: right;
}

.button {
    background: #dfd6d6 0% 0% no-repeat padding-box;
    border: 1px solid rgb(109, 102, 102);
    border-radius: 6px;
    opacity: 1;
    font: normal normal normal 20px/26px Montserrat;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    padding: 10px 50px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
}

.button-submit {
    margin-right: 50px;
}

.button:hover {
    box-shadow: 6px 12px 18px rgba(33, 113, 225, 0.3);
}
</style>