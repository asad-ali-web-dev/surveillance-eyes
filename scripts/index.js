window.addEventListener('load', () => {
    addRowInputs();
})

function formInputIdArrRecord(index) {
    formInputIdArr.push({
        input1: 'row-' + index + '-input1',
        input2: 'row-' + index + '-input2',
        input3: 'row-' + index + '-input3',
        input4: 'row-' + index + '-input4',
    });
}

function getValues(index) {
    var val1 = document.getElementById(formInputIdArr[index].input1).value;
    var val2 = parseInt(document.getElementById(formInputIdArr[index].input2).value);
    var val3 = parseInt(document.getElementById(formInputIdArr[index].input3).value);
    var val4 = document.getElementById(formInputIdArr[index].input4).value;
    console.log(typeof(val1), typeof(val2), typeof(val3), typeof(val4));
    formInputValues.push({
        input1: val1,
        input2: val2,
        input3: val3,
        input4: val4
    })
}

function loadValues() {
    title = titleInput.value;
    subTitle = subTitleInput.value;
    date = dateInput.value;
    invoice = invoiceInput.value;

    for (let i = 0; i < rowCount; i++) {
        formInputIdArrRecord(i);
        getValues(i);
    }

    formInputValues.forEach((value, index) => {
        if (value.input1 && value.input2 && value.input3 && value.input4) {
            var sn = index + 1;
            total_price = parseInt(value.input2) * parseInt(value.input3);
            tableData.push({
                n: sn,
                product_name: value.input1,
                qty: value.input2,
                up: value.input3,
                tp: total_price,
                wty: value.input4
            });
            grandTotal += total_price;
        } else {
            feildsEmpty = true;
            console.log("Feilds are empty!", feildsEmpty);
        }
    });
}

// This function will append 4 input feild whenever called
function addRowInputs () {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-info alert-dismissible fade show mx-5";
    alertDiv.role = "alert";
    var wrapDiv = document.createElement("div");
    wrapDiv.className = "d-flex flex-wrap gap-4"

    alertDiv.appendChild(wrapDiv);
    
    floatLabal1Div = document.createElement("div");
    floatLabal1Div.className = "form-floating flex-fill";

    floatLabal2Div = document.createElement("div");
    floatLabal2Div.className = "form-floating flex-fill";

    floatLabal3Div = document.createElement("div");
    floatLabal3Div.className = "form-floating flex-fill";

    floatLabal4Div = document.createElement("div");
    floatLabal4Div.className = "form-floating flex-fill";

    var input1 = document.createElement("input");
    input1.type = "text"; input1.placeholder = "Product Name"; input1.id = 'row-' + rowCount + '-input1';
    input1.className = "form-control border-0 shadow-sm";
    var input1label = document.createElement("label");
    input1label.setAttribute('for', input1.id);
    input1label.innerHTML = "Product Name";

    floatLabal1Div.appendChild(input1);
    floatLabal1Div.appendChild(input1label);

    var input2 = document.createElement("input");
    input2.type = "number"; input2.placeholder = "Quantity"; input2.id = 'row-' + rowCount + '-input2';
    input2.className = "form-control border-0 shadow-sm"
    var input2label = document.createElement("label");
    input2label.setAttribute('for', input2.id);
    input2label.innerHTML = "Quantity";

    floatLabal2Div.appendChild(input2);
    floatLabal2Div.appendChild(input2label);

    var input3 = document.createElement("input");
    input3.type = "number"; input3.placeholder = "Unit Price"; input3.id = 'row-' + rowCount + '-input3';
    input3.className = "form-control border-0 shadow-sm"
    var input3label = document.createElement("label");
    input3label.setAttribute('for', input3.id);
    input3label.innerHTML = "Unit Price";

    floatLabal3Div.appendChild(input3);
    floatLabal3Div.appendChild(input3label);

    var input4 = document.createElement("input");
    input4.type = "text"; input4.placeholder = "Warranty"; input4.id = 'row-' + rowCount + '-input4';
    input4.className = "form-control border-0 shadow-sm"
    var input4label = document.createElement("label");
    input4label.setAttribute('for', input4.id);
    input4label.innerHTML = "Warranty";

    floatLabal4Div.appendChild(input4);
    floatLabal4Div.appendChild(input4label);


    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "btn-close mt-3";
    closeBtn.setAttribute('data-bs-dismiss', "alert");
    closeBtn.setAttribute('aria-label', "Close");

    wrapDiv.appendChild(floatLabal1Div);
    wrapDiv.appendChild(floatLabal2Div);
    wrapDiv.appendChild(floatLabal3Div);
    wrapDiv.appendChild(floatLabal4Div);
    wrapDiv.appendChild(closeBtn);

    dataForm.appendChild(alertDiv);
    rowCount++;
}