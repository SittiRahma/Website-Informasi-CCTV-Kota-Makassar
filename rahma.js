const apiUrl = 'https://script.google.com/macros/s/AKfycbyG5kW0IgI54gDK6iGRA_V_xk7r5b2Scm3_q1BGc6qE94k1CbU_yP1fmFDADVUDcjYN3A/exec?action=getUsers';
const ctx = document.getElementById('myChart');
var jl_abdulkadir = [], jl_adhysirua = [], jl_adhypengayoman = [], jl_alauddintalasalapang = [], jl_amirullah = [], jl_andalastentara = [],
jl_bajigau = [], jl_banksampah = [], jl_barukang = [], jl_baskotalauddin = [], jl_batuaborongtoddopuli = [], jl_bawakaraenglatimojong = [],
jl_bawakaraengveteran = [], jl_botosawer = [], jl_cakpan = [], jl_datulama = [], jl_tatahaji = [], jl_flyover = [], jl_gabdin = [], 
jl_gatepel = [], jl_baucen = [], jl_baurat = [], jl_baurajpen = [], jl_kakat = []  
let dataAPI = [];
let label = ['08.00-10.00', '10.00-12.00', '12.00-14.00', '14.00-16.00', '16.00-18.00', '18.00-20.00', '20.00-22.00', '22.00-00.00', '00.00-02.00', '02.00-04.00', '04.00-06.00', '06.00-08.00'];

let myChart;

let label1, dataset1;
let chartJlKadir = []
let tanggalJlKadir = []
let DataJlKadir = []

let btnGrafikAdhayksa = document.getElementById('grafikAdhyaksa')
let btnGrafikAbdKadir = document.getElementById('grafikAbdKadir')
let datepicker = document.getElementById('datepicker')

// window.addEventListener('load', (event) =>{
    
    
// });
btnGrafikAdhayksa.addEventListener("click", function(){
    console.log('ini adhyaksa')
    getAPI("grafikAdhyaksa")

});
btnGrafikAbdKadir.addEventListener("click", function(){
    console.log('ini abdKadir')
    getAPI("grafikAbdKadir")
});

datepicker.datetimepicker({
    format: "YYYY",
    useCurrent: false,
    viewMode: "years"
})

datepicker.addEventListener("change", function(){
    let dateValue = datepicker.value();

    console.log(datepicker.value)
})



function showChart(datasetfromAPI){
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
              label: '# of Votes',
              data: datasetfromAPI,
              borderWidth: 1
            }]
        },
        options: {
            plugins:{
                legend:{
                    position : 'left',
                    maxHeight : 1500,
                    labels: {
                        boxWidth : 0,
                        boxHeight : 0,
                        color : 'black',
                        font : 'Montserrat',
                        padding : 10,
                        useBorderRadius : true,
                        border : 20
                    }
                },
            },
            scales: {
                x: {
                    grid : {
                        display : false
                    }
                },
                y: {
                    grid : {
                        display : false
                    },
                    beginAtZero: true
                }
            },
            tooltips: {
                mode : 'index'
            }
        }
        }); 
}


async function getAPI(props){

    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    const Tanggal = barChartData.kemacetan.map( (x) => x.Tanggal)
    const Waktu = barChartData.kemacetan.map( (x) => x.Waktu)
    const TotalKemacetan = barChartData.kemacetan.map( (x) => x.Total)
    const AbdulKadir = barChartData.kemacetan.map( (x) => x.abdul_kadir)
    const AdhyaksaSirua = barChartData.kemacetan.map( (x) => x.adhyaksa_sirua)


    if(props == "grafikAdhyaksa"){
        dataAPI = AbdulKadir
    } else if (props == "grafikAbdKadir"){
        dataAPI = AdhyaksaSirua
    }

    if(myChart){
        myChart.destroy()
    }

    console.log(dataAPI)
    showChart(dataAPI)

    
}


