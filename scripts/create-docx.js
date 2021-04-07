// Write Data To the DOCX File

function loadFile(url,callback){
    PizZipUtils.getBinaryContent(url,callback);
}

function generate() {
    loadFile("./assets/input.docx",function(error,content){
        if (error) { throw error };

        function replaceErrors(key, value) {
            if (value instanceof Error) {
                return Object.getOwnPropertyNames(value).reduce(function(error, key) {
                    error[key] = value[key];
                    return error;
                }, {});
            }
            return value;
        }

        function errorHandler(error) {
            console.log(JSON.stringify({error: error}, replaceErrors));

            if (error.properties && error.properties.errors instanceof Array) {
                const errorMessages = error.properties.errors.map(function (error) {
                    return error.properties.explanation;
                }).join("\n");
                console.log('errorMessages', errorMessages);
            }
            throw error;
        }

        var zip = new PizZip(content);
        var doc;
        try {
            doc=new Docxtemplater(zip);
        } catch(error) {
            errorHandler(error);
        }
        
        doc.setData({
            "date": date,
            "title": title,
            "sub_title": subTitle,
            "invoice": invoice,
            "r": tableData,
            "gt": grandTotal,
        });
        try {
            doc.render();
        }
        catch (error) {
            errorHandler(error);
        }

        var out=doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        })
        saveAs(out,"output.docx")
    })
}