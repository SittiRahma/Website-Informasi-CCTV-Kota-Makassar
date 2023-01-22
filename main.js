const chart1 = document.querySelector("#myChart");
const chart2 = document.querySelector("#myChart2");
const selectChart1 = document.querySelector(".abdul-kadir");
const selectChart2 = document.querySelector(".adhyaksa");

function showChart1(){
    chart1.classList.toggle("invisible");
}

function showChart2(){
    chart2.classList.toggle("invisible");
}

selectChart1.addEventListener("click", showChart1);
selectChart1.addEventListener("click", showChart2);