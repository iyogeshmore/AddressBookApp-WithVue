    <template>
        <div>

    <body>
        <!-- UC-1 - Create the Page Header for the Home Page -->

    <header class="header-content header">
        <div class="logo-content">
            <router-link to="/addAddressBook" >
                <img src="../Assets/logo.jpeg" alt="logo"/>
                </router-link>
    
        <div>
            <span class="address-text">ADDRESS</span><br>
            <span class="address-text address-book">BOOK</span>
        </div>
        </div>
    </header>

    <!-- UC 2 – Ability to Content Header --> 

    <div class="main-content">
        <div class="header-content person-header">
        <div class="person-detail-text">
            Employee Details
            <div class="person-count"></div>
        </div>
        <router-link to="/addAddressBook">
            
            <button class="add-button">
            <img src="../Assets/plus_symbol.svg" alt="">Add Person</button>
        </router-link>
        </div>

    <!-- UC 3 – Ability to view Person Address Book details in a Tabular Format -->

        <div class="table-main">
        <DisplayHome/>
        </div>
    </div>

    </body>
        </div>
    </template>

    <script>
    import DisplayHome from './DisplayHome.vue'
    export default {
        name: 'Home',
        components: {
            DisplayHome
        }
    }
    </script>

    <style>
    /* <!-- UC-1 - Create the Page Header for the Home Page --> */

    * {
        box-sizing: border-box;
    }

    body {
        margin-left: 0;
        height: 100%;
        background-color: #f7f7f7;
    }

    .header {
        padding: 15px 0;
        background-color: #ffffff;
    }

    .header-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 0px solid rgb(14, 11, 223);
    }

    .logo-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 0px solid rgb(5, 53, 228);
        width: 80%;
    }

    .logo-content-img {
        border: solid 0px #42515f;
    }

    .address-text {
        font: normal normal bold 20px/25px Montserrat;
        font-family: "Montserrat", sans-serif;
        letter-spacing: 0px;
        color: #079ced;
        text-transform: capitalize;
        padding-left: 10px;
    }

    .address-book {
        color: #42515f;
    }

    /* <!-- UC 2 – Ability to Content Header --> */

    .main-content{
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 80px);
        background-color: #f7f7f7;
        padding: 30px 0 10px;
        box-sizing: border-box ;
    }

    .person-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        padding-bottom : 25px;
    }

    .person-detail-text{
        font: normal normal bold 24px/25px Montserrat;
        letter-spacing: 0px;
        color: #42515f;
        opacity: 1;
    }

    .person-count{
        background-color : #079ced;
        color: #ffffff;
        border-radius: 43%;
        font-size: 16px;
        width: 26px;
        text-align: center;
        display : inline-block;
    }

    .add-button {
        font: normal normal normal 22px/29px Montserrat;
        letter-spacing: 0px;
        color: #ffffff;
        background: #079ced 0% 0% no-repeat padding-box;
        border-radius: 5px;
        opacity: 1;
        border: none;
        padding: 5px 18px;
        outline: none;
        cursor: pointer;
        text-decoration: none;
    }

    /* <!-- UC 3 – Ability to view Person Address Book details in a Tabular Format --> */

    .table-main {
        width: 80%;
        margin: 0 auto;
        overflow: auto;
    }

    .table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 15px;
        min-width: 800px;
    }

    td, th {
        text-align: left;
        padding: 5px 8px;
        font-family: Montserrat;
    }

    th {
        background: #42515f 0% 0% no-repeat padding-box;
        text-align: left;
        letter-spacing: 0px;
        color: #ffffff;
        text-transform: uppercase;
        opacity: 1;
        padding: 15px 8px;
    }

    tr:not(:first-child) {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #e3e3e3;
        border-radius: 3px;
    }

    td {
        font: normal normal normal 14px/21px Montserrat;
        letter-spacing: 0px;
        color: #3d3d3d;
        opacity: 1;
        font-weight: 600;
    }

    td:first-child {
        display: flex;
        align-items: center;
    }

    td img:first-child {
        margin-right: 20px;
    }

    td img {
        cursor: pointer;
    }
    </style>