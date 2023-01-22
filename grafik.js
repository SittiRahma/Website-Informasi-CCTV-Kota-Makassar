const apiUrl = 'https://script.google.com/macros/s/AKfycbyG5kW0IgI54gDK6iGRA_V_xk7r5b2Scm3_q1BGc6qE94k1CbU_yP1fmFDADVUDcjYN3A/exec?action=getUsers';
const ctx = document.getElementById('myChart');

let label = ['08.00-10.00', '10.00-12.00', '12.00-14.00', '14.00-16.00', '16.00-18.00', '18.00-20.00', '20.00-22.00', '22.00-00.00', '00.00-02.00', '02.00-04.00', '04.00-06.00', '06.00-08.00'];

let myChart;

let label1, dataset1;
let chartJlKadir = []
let tanggalJlKadir = []
let DataJlKadir = []

let btnGrafikAdhayksa = document.getElementById('grafikAdhyaksa')
let btnGrafikAbdKadir = document.getElementById('grafikAbdKadir')
let btnGrafikAlauddin = document.getElementById('grafikAlauddin')
let btnGrafikAmirullah = document.getElementById('grafikAmirullah')
let btnGrafikBajiGau = document.getElementById('grafikBajigau')
let btnGrafikBarukang = document.getElementById('grafikBarukanga')
let btnGrafikCakalangPanampu = document.getElementById('grafikCakalangPanampu')
let btnGrafikTataHaji = document.getElementById('grafikTataHaji')
let btnGrafikFlyover = document.getElementById('grafikflyover')
let btnGrafikKajaolaliddo = document.getElementById('grafikKajaolaliddo')
let datepicker = document.getElementById('datepicker')

let namaJalan;

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

btnGrafikAlauddin.addEventListener("click", function(){
    console.log('ini alauddin')
    getAPI("grafikAlauddin")
});

btnGrafikAmirullah.addEventListener("click", function(){
    console.log('ini amirulllah')
    getAPI("grafikAmirullah")
});

btnGrafikBajiGau.addEventListener("click", function(){
    console.log('ini bajigau')
    getAPI("grafikBajigau")
});

btnGrafikBarukang.addEventListener("click", function(){
    console.log('ini barukang')
    getAPI("grafikBarukanga")
});

btnGrafikCakalangPanampu.addEventListener("click", function(){
    console.log('ini cakalang')
    getAPI("grafikCakalangPanampu")
});

btnGrafikTataHaji.addEventListener("click", function(){
    console.log('ini tatahaji')
    getAPI("grafikTataHaji")
});

btnGrafikFlyover.addEventListener("click", function(){
    console.log('ini flyover')
    getAPI("grafikflyover")
});

btnGrafikKajaolaliddo.addEventListener("click", function(){
    console.log('ini kajaolaliddo')
    getAPI("grafikKajaolaliddo")
});


function showChart(datasetfromAPI, namaJalan){
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
              label: namaJalan,
              data: datasetfromAPI,
              backgroundColor : 'red',
              borderWidth: 1
            }]
        },
        options: {
            plugins:{
                legend:{
                 display : true,
                 maxHeight : 100,
                 maxWidth : 100,
                 labels: {
                    boxWidth : 0,
                    boxHeight : 0
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
    const AlauddinTalasalapang = barChartData.kemacetan.map( (x) => x.alauddin_talasalapang)
    const Amirullah = barChartData.kemacetan.map( (x) => x.amirullah)
    const BajiGau = barChartData.kemacetan.map( (x) => x.baji_gau)
    const Barukang = barChartData.kemacetan.map( (x) => x.barukang)
    const CakalangPanampu = barChartData.kemacetan.map( (x) => x.cakalang_panampu)
    const DgTataRSHaji = barChartData.kemacetan.map( (x) => x.dgtata_rshaji)
    const Flyover = barChartData.kemacetan.map( (x) => x.flyover)
    const KajaolaliddoKatedral = barChartData.kemacetan.map( (x) => x.kajaolaliddo_katedral)


    if(props == "grafikAdhyaksa"){
        dataAPI = AdhyaksaSirua
        namaJalan = "Jalan Adhyaksa"
        console.log(Tanggal)
    } else if (props == "grafikAbdKadir"){
        dataAPI = AbdulKadir
        namaJalan = "Jalan Abdul Kadir"
    }else if (props == "grafikAlauddin"){
        dataAPI = AlauddinTalasalapang
        namaJalan = "Jalan Alauddin Talasalapang"
    }else if (props == "grafikAmirullah"){
        dataAPI = Amirullah
        namaJalan = "Jalan Amirullah"
    }else if (props == "grafikBajigau"){
        dataAPI = BajiGau
        namaJalan = "Jalan Baji Gau"
    }else if (props == "grafikBarukanga"){
        dataAPI = Barukang
        namaJalan = "Jalan Barukang"
    }else if (props == "grafikCakalangPanampu"){
        dataAPI = CakalangPanampu
        namaJalan = "Jalan Cakalang Panampu"
    }else if (props == "grafikTataHaji"){
        dataAPI = DgTataRSHaji
        namaJalan = "Jalan Dg Tata RS Haji"
    }else if (props == "grafikflyover"){
        dataAPI = Flyover
        namaJalan = "Flyover"
    }else if (props == "grafikKajaolaliddo"){
        dataAPI = KajaolaliddoKatedral
        namaJalan = "Jalan Kajaolaliddon Katedral"
    }

    if(myChart){
        myChart.destroy()
    }

    console.log(dataAPI, namaJalan)
    showChart(dataAPI, namaJalan)

    
}




