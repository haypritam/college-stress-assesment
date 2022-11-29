function clicka()
{
    if(document.getElementById("age").value>=151 || document.getElementById("age").value<=0){
        alert("please enter a valid age")
    }
    else if(document.getElementById("gender").value == "default"){
        alert("please select your gender")
    }
    else if(document.getElementById("area").value == "default"){
        alert("please select your area");
    }
    else if(document.getElementById("University").value == ""){
        alert("please enter college/university name correctly");
    }
    else{
        localStorage.setItem("age",document.getElementById("age").value)
        localStorage.setItem("gender",document.getElementById("gender").value)
        localStorage.setItem("area",document.getElementById("area").value)
        localStorage.setItem("uni",document.getElementById("University").value)
        document.location.href="Qus1.html";
     }
}

function click1()
{
    var result =0
    var var1 = document.getElementById("q1_1");
    var var2 = document.getElementById("q1_2");
    var var3 = document.getElementById("q1_3");
    var var4 = document.getElementById("q1_4");
    if(var1.checked == true)
    {
        localStorage.setItem("result",result)
        document.location.href="question2.html";
    }
    else if(var2.checked == true)
    {
        result=result+1
        localStorage.setItem("result",result)
        document.location.href="question2.html";
    }
    else if(var3.checked == true)
    {
        result=result+2
        localStorage.setItem("result",result)
        document.location.href="question2.html";
    }
    else if(var4.checked == true)
    {
        result=result+3
        localStorage.setItem("result",result)
        document.location.href="question2.html";
    }
    else
    {
        alert("Please select one option");
    }
}


function click2()
{
    var re
    var result =localStorage.getItem("result");
    var var1 = document.getElementById("q2_1");
    var var2 = document.getElementById("q2_2");
    var var3 = document.getElementById("q2_3");
    var var4 = document.getElementById("q2_4");
    if(var1.checked == true)
    {
        document.location.href="question3.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question3.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question3.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question3.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click3()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q3_1");
    var var2 = document.getElementById("q3_2");
    var var3 = document.getElementById("q3_3");
    var var4 = document.getElementById("q3_4");
    if(var1.checked == true)
    {
        document.location.href="question4.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question4.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question4.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question4.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click4()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q4_1");
    var var2 = document.getElementById("q4_2");
    var var3 = document.getElementById("q4_3");
    var var4 = document.getElementById("q4_4");
    if(var1.checked == true)
    {
        document.location.href="question5.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question5.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question5.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question5.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click5()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q5_1");
    var var2 = document.getElementById("q5_2");
    var var3 = document.getElementById("q5_3");
    var var4 = document.getElementById("q5_4");
    if(var1.checked == true)
    {
        document.location.href="question6.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question6.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question6.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question6.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click6()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q6_1");
    var var2 = document.getElementById("q6_2");
    var var3 = document.getElementById("q6_3");
    var var4 = document.getElementById("q6_4");
    if(var1.checked == true)
    {
        document.location.href="question7.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question7.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question7.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question7.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click7()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q7_1");
    var var2 = document.getElementById("q7_2");
    var var3 = document.getElementById("q7_3");
    var var4 = document.getElementById("q7_4");
    if(var1.checked == true)
    {
        document.location.href="question8.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question8.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question8.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question8.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click8()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q8_1");
    var var2 = document.getElementById("q8_2");
    var var3 = document.getElementById("q8_3");
    var var4 = document.getElementById("q8_4");
    if(var1.checked == true)
    {
        document.location.href="question9.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question9.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question9.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question9.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click9()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q9_1");
    var var2 = document.getElementById("q9_2");
    var var3 = document.getElementById("q9_3");
    var var4 = document.getElementById("q9_4");
    if(var1.checked == true)
    {
        document.location.href="question10.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question10.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question10.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question10.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click10()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q10_1");
    var var2 = document.getElementById("q10_2");
    var var3 = document.getElementById("q10_3");
    var var4 = document.getElementById("q10_4");
    if(var1.checked == true)
    {
        document.location.href="Question11.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="Question11.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="Question11.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="Question11.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click11()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q11_1");
    var var2 = document.getElementById("q11_2");
    var var3 = document.getElementById("q11_3");
    var var4 = document.getElementById("q11_4");
    if(var1.checked == true)
    {
        document.location.href="question12.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="question12.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="question12.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="question12.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function click12()
{
    var re 
    var result=localStorage.getItem("result")
    var var1 = document.getElementById("q12_1");
    var var2 = document.getElementById("q12_2");
    var var3 = document.getElementById("q12_3");
    var var4 = document.getElementById("q12_4");
    if(var1.checked == true)
    {
        document.location.href="result.html";
    }
    else if(var2.checked == true)
    {
        re=Number(result)+1
        localStorage.setItem("result",re);
        document.location.href="result.html";
    }
    else if(var3.checked == true)
    {
        re=Number(result)+2
        localStorage.setItem("result",re);
        document.location.href="result.html";
    }
    else if(var4.checked == true)
    {
        re=Number(result)+3
        localStorage.setItem("result",re);
        document.location.href="result.html";
    }
    else
    {
        alert("Please select one option");
    }
}

function test(){
    alert("hello")
}
/*
function click20(){
    document.location.href="Qus1.html"
}

function click21(){
    document.location.href="question2.html"
}

function click22(){
    document.location.href="question3.html"
}

function click23(){
    document.location.href="question4.html"
}

function click24(){
    document.location.href="question5.html"
}

function click25(){
    document.location.href="question6.html"
}

function click26(){
    document.location.href="question7.html"
}

function click27(){
    document.location.href="question8.html"
}

function click28(){
    document.location.href="question9.html"
}

function click29(){
    document.location.href="question10.html"
}

function click30(){
    document.location.href="question11.html"
}*/