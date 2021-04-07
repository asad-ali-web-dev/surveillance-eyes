var mokeupData = {
    n: 0,
    product_name: '',
    qty: 0,
    up: 0,
    tp: 0,
    wty: ''
}

var date = '';
var invoice = '';
var title = '';
var subTitle = '';
var grandTotal = 0;

var formInputIdArr = [];
var formInputValues = [];

var tableData = [];

var feildsEmpty = false;

var rowCount = 0;
var dataForm = document.getElementById("dataForm");
var titleInput = document.getElementById("title");
var subTitleInput = document.getElementById("subTitle");
var dateInput = document.getElementById("date");
var invoiceInput = document.getElementById("invoice");