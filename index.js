$("#RollNo").focus();
function validateAndGetFormData() {
var RollNoVar = $("#RollNo").val();
if (RollNoVar === "") {
alert("Roll No Required Value");
$("#RollNo").focus();
return "";
}
var fullnameVar = $("#fullname").val();
if (fullname === "") {
alert("Full Name is Required Value");
$("#fullname").focus();
return "";
}
var birthVar = $("#birth").val();
if (birthVar === "") {
alert("Birth Date is Required Value");
$("#birth").focus();
return "";
}
var addressVar = $("#address").val();
if (addressVar === "") {
alert("Address is Required Value");
$("#address").focus();
return "";
}
var enrollVar = $("#enroll").val();
if (enrollVar === "") {
alert("Enrollment Date is Required Value");
$("#enroll").focus();
return "";
}
var jsonStrObj = {
RollNo: RollNoVar,
fullname: fullnameVar,
birth: birthVar,
address: addressVar,
enroll: enrollVar
};
return JSON.stringify(jsonStrObj);
}
// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
var putRequest = "{\n"
+ "\"token\" : \""
+ connToken
+ "\","
+ "\"dbName\": \""
+ dbName
+ "\",\n" + "\"cmd\" : \"PUT\",\n"
+ "\"rel\" : \""
+ relName + "\","
+ "\"jsonStr\": \n"
+ jsonObj
+ "\n"
+ "}";
return putRequest;
}
function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
var url = dbBaseUrl + apiEndPointUrl;
var jsonObj;
$.post(url, reqString, function (result) {
jsonObj = JSON.parse(result);
}).fail(function (result) {
var dataJsonObj = result.responseText;
jsonObj = JSON.parse(dataJsonObj);
});
return jsonObj;
}
function resetForm() {
$("#RollNo").val("")
$("#fullname").val("");
$("#birth").val("");
$("#address").val("");
$("#enroll").val("");
$("#RollNo").prop("disabled",false)
$("#save").prop("disabled",true)
$("#update").prop("disabled",true)
$("#reset").prop("disabled",true)
$("#RollNo").focus();

}
function saveStudent() {
var jsonStr = validateAndGetFormData();
if (jsonStr === "") {
return;
}
var putReqStr = createPUTRequest("90938327|-31949273703745625|90952340",
jsonStr, "SCHOOL-DB", "STUDENT-TABLE");
alert(putReqStr);
jQuery.ajaxSetup({async: false});
var resultObj = executeCommand(putReqStr,
"http://api.login2explore.com:5577", "/api/iml");
alert(JSON.stringify(resultObj));
jQuery.ajaxSetup({async: true});
resetForm();
$("#RollNo").focus()
}
function update() {
    $("#update").prop("disabled",true)
    jsonchg = validateAndGetFormData();
    var updateRequest = createUPDATERecordRequest

}