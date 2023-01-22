const apiUrl = 'https://script.google.com/macros/s/AKfycbyG8FAUlwjlnZGqh6wVYLnHRXVazlRlaDWvJ6OXLzwcr4b-pp8ATuJm4ZgREsqz7dnU/exec?action=getUsers';
const ctx = document.getElementById('myChart');

let label = ['08.00-10.00', '10.00-12.00', '12.00-14.00', '14.00-16.00', '16.00-18.00', '18.00-20.00', '20.00-22.00', '22.00-00.00', '00.00-02.00', '02.00-04.00', '04.00-06.00', '06.00-08.00'];

let myChart;

let label1, dataset1;
let chartJlKadir = []
let tanggalJlKadir = []
let DataJlKadir = []

const preloader = document.getElementById("preloader");
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
let btnHari = document.getElementById('satuhari')
let btnPekan = document.getElementById('pekan')
let btnSatuBulan = document.getElementById('bulan')
let btnDuaBulan = document.getElementById('duabulan')
let btnTigaBulan = document.getElementById('tigabulan')
let btnEmpatBulan = document.getElementById('empatbulan')
let datepicker = document.getElementById('dateid')
let inibuttonPekan = document.getElementById('inibuttonpekan')
let val;
let newDate;


$('#dateid').on("change", function(){
    val = $('#dateid').val()
    console.log(val)
    let dateArr = val.split("/");
    newDate = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0];
    console.log(jumlahMacet)
})

 $('#dateid').on("change", function(){
    getAPI("jumlahMacet");
 })
let namaJalan;

btnSatuBulan.addEventListener("click", function(){
    console.log('ini adalah percobaan button 1 bulan')
 })

 btnDuaBulan.addEventListener("click", function(){
    console.log('ini adalah percobaan button 2 bulan')
 })

 btnTigaBulan.addEventListener("click", function(){
    console.log('ini adalah percobaan button 3 bulan')
 })

 btnEmpatBulan.addEventListener("click", function(){
    console.log('ini adalah percobaan button 4 bulan')
 })

 btnPekan.addEventListener("click", function(){
    console.log('ini adalah percobaan button 1 pekan')
 })

 btnHari.addEventListener("click", function(){
    console.log('ini adalah percobaan button 1 hari')
 })

// const tombolPekan = inibuttonPekan.addEventListener("click", function(){
//     console.log('ini adalah percobaan button 1 pekan')
//     //getAPI("grafikSatuPekan")
// })

//Percobaan button 1 pekan
btnGrafikAmirullah.addEventListener("click", handleButtonAmirullah);
btnHari.addEventListener("click", handleButtonHarian);
btnPekan.addEventListener("click", handleButtonPekanan);
btnSatuBulan.addEventListener("click", handleButtonSatuBulan);
btnDuaBulan.addEventListener("click", handleButtonDuaBulan);
btnTigaBulan.addEventListener("click", handleButtonTigaBulan);
btnEmpatBulan.addEventListener("click", handleButtonEmpatBulan);

let btnCobaAmirullah = false;
let btnCobaHarian = false;
let btnCobaPekanan = false;
let btnCobaSatuBulan = false;
let btnCobaDuaBulan = false;
let btnCobaTigaBulan = false;
let btnCobaEmpatBulan = false;

function setFalse(){
    btnCobaPekanan = false;
    btnCobaSatuBulan = false;
    btnCobaDuaBulan = false;
    btnCobaTigaBulan = false;
    btnCobaEmpatBulan = false;
}

function loader(){
    preloader.style.display = "block";
        if(myChart) {
            myChart.destroy();
        }
}

function handleButtonAmirullah() {
    btnCobaAmirullah = true;
    checkButtons();
}
  
function handleButtonHarian() {
    btnCobaHarian = true;
    checkButtons();
}

function handleButtonPekanan() {
    btnCobaPekanan = true;
    checkButtons();
}

function handleButtonSatuBulan() {
    btnCobaSatuBulan = true;
    checkButtons();
}

function handleButtonDuaBulan() {
    btnCobaDuaBulan = true;
    checkButtons();
}

function handleButtonTigaBulan() {
    btnCobaTigaBulan = true;
    checkButtons();
}

function handleButtonEmpatBulan() {
    btnCobaEmpatBulan = true;
    checkButtons();
}

function checkButtons() {
    if (btnCobaAmirullah && btnCobaPekanan) {
      // menampilkan data
      loader()
      console.log('Ini grafik pekanan Amirullah')
      getAPI("grafikpekananAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
      setFalse()
     }
     else if (btnCobaAmirullah && btnCobaSatuBulan) {
        // menampilkan data
        loader()
        console.log('Ini grafik Satu Bulan Amirullah')
        getAPI("grafikSatuBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
    else if (btnCobaAmirullah && btnCobaDuaBulan) {
        // menampilkan data
        loader()
        console.log('Ini grafik Dua Bulan Amirullah')
        getAPI("grafikDuaBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }else if (btnCobaAmirullah && btnCobaTigaBulan) {
        // menampilkan data
        loader()
        console.log('Ini grafik Tiga Bulan Amirullah')
        getAPI("grafikTigaBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }else if (btnCobaAmirullah && btnCobaEmpatBulan) {
        // menampilkan data
        loader()
        console.log('Ini grafik Empat Bulan Amirullah')
        getAPI("grafikEmpatBulanAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }else if (btnCobaAmirullah && btnCobaHarian) {
        // menampilkan data
        loader()
        console.log('Jalan Amirullah')
        getAPI("grafikAmirullah").then(() => {
            preloader.style.display = "none";
        }).catch((error) => {
            console.log(error)
            preloader.style.display = "none";
        })
        setFalse()
    }
  }
    
// });
btnGrafikAdhayksa.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini adhyaksa')
    getAPI("grafikAdhyaksa").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })

    if (tombolPekan == true){
        getAPI("grafikSatuPekan");
    }
});
btnGrafikAbdKadir.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini abdKadir')
    getAPI("grafikAbdKadir").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikAlauddin.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini Alauddin')
    getAPI("grafikAlauddin").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikAmirullah.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini amirulllah')
    getAPI("grafikAmirullah").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikBajiGau.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini bajigau')
    getAPI("grafikBajigau").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikBarukang.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini barukang')
    getAPI("grafikBarukanga").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikCakalangPanampu.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini cakalang')
    getAPI("grafikCakalangPanampu").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikTataHaji.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini tatahaji')
    getAPI("grafikTataHaji").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikFlyover.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    console.log('ini flyover')
    getAPI("grafikflyover").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnGrafikKajaolaliddo.addEventListener("click", function(){
    preloader.style.display = "block";
    if(myChart) {
        myChart.destroy();
    }
    
    console.log('ini kajaolaliddo')
    getAPI("grafikKajaolaliddo").then(() => {
        preloader.style.display = "none";
    }).catch((error) => {
        console.log(error)
        preloader.style.display = "none";
    })
});

btnPekan.addEventListener("click", function(){
    console.log("ini button Pekan")
})

// btnHari.addEventListener("click", function(){
//     console.log('ini satu hari')
//     getAPI("grafikSatuHari")
// });

// btnPekan.addEventListener("click", function(){
//     console.log('ini satu pekan')
//     getAPI("grafikSatuPekan")
// });

// btnSatuBulan.addEventListener("click", function(){
//     console.log('ini dua bulan')
//     getAPI("grafikDuaBulan")
// });

// btnTigaBulan.addEventListener("click", function(){
//     console.log('ini tiga bulan')
//     getAPI("grafikTigaBulan")
// });

// btnEmpatBulan.addEventListener("click", function(){
//     console.log('ini dua bulan')
//     getAPI("grafikEmpatBulan")
// });

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
    const TotalAbdulKadir = barChartData.kemacetan.map( (x) => x.akumulasi_abdul_kadir)
    const TotalAdhyaksa = barChartData.kemacetan.map( (x) => x.akumulasi_adhyaksa_sirua)
    const TotalAlauddin = barChartData.kemacetan.map( (x) => x.akumulasi_alauddin)
    const TotalAmirullah = barChartData.kemacetan.map( (x) => x.akumulasi_amirullah)

    // Buat indeks
    let indexPekan = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let indexSatuBulan = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    let indexDuaBulan = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
    let indexTigaBulan = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
    let indexEmpatBulan = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
    // ubah format data Tanggal
    let newTanggal = Tanggal.map(d => d.slice(0,10));

    // Ambil index pada data tertentu
    let indexes = newTanggal.reduce((acc, n, i) => {
        if (n == newDate) {
            acc.push(i);
        }
        return acc;
    }, []);

    function dataJalan(values){
       let nilai = indexes.map(i => values[i]);
       return nilai
    }

    function totalMacet(){
        let filterIndex = newTanggal.filter(n => n == newDate);
        let indexTotal = filterIndex.map(n =>  newTanggal.indexOf(n));
        
        let totalmacet = indexTotal.map(i => TotalKemacetan[i]);
        return totalmacet[0];
    }
    
    function dataPekan(values){
        let nilai = indexPekan.map(i => values[i]);
        return nilai
    }

    function dataSatuBulan(values){
        let nilai = indexSatuBulan.map(i => values[i]);
        return nilai
    }

    function dataDuaBulan(values){
        let nilai = indexDuaBulan.map(i => values[i]);
        return nilai
    }

    function dataTigaBulan(values){
        let nilai = indexTigaBulan.map(i => values[i]);
        return nilai
    }

    function dataEmpatBulan(values){
        let nilai = indexEmpatBulan.map(i => values[i]);
        return nilai
    }

    // Ambil tanggal hari ini dan ubah format
    let today = new Date();

    if(props == "grafikAdhyaksa"){
        console.log(newDate)
        console.log(totalMacet())
        $('#periode').html(val)
        dataAPI = dataJalan(AdhyaksaSirua)
        namaJalan = "Jalan Adhyaksa"
        console.log(newTanggal)
        console.log(dataPekan(TotalAbdulKadir))
        if (props == "grafikSatuPekan"){
            console.log("data pekan terpilih")
            dataAPI = dataPekan(TotalAbdulKadir)
        }
        console.log(dataAPI)
        
    } else if (props == "grafikAbdKadir"){
        dataAPI = dataJalan(AbdulKadir)
        namaJalan = "Jalan Abdul Kadir"
    }else if (props == "grafikAlauddin"){
        dataAPI = dataJalan(AlauddinTalasalapang)
        namaJalan = "Jalan Alauddin Talasalapang"
    }else if (props == "grafikAmirullah"){
        $('#periode').html(val)
        dataAPI = dataJalan(Amirullah) 
        namaJalan = "Jalan Amirullah"
        console.log(dataPekan(TotalAmirullah))
        console.log(dataSatuBulan(TotalAmirullah))
        console.log(dataDuaBulan(TotalAmirullah))
        console.log(dataTigaBulan(TotalAmirullah))
        console.log(dataEmpatBulan(TotalAmirullah))
    }else if (props == "grafikBajigau"){
        $('#periode').html(val)
        dataAPI = dataJalan(BajiGau) 
        namaJalan = "Jalan Baji Gau"
    }else if (props == "grafikBarukanga"){
        dataAPI = dataJalan(Barukang) 
        namaJalan = "Jalan Barukang"
    }else if (props == "grafikCakalangPanampu"){
        dataAPI = dataJalan(CakalangPanampu) 
        namaJalan = "Jalan Cakalang Panampu"
    }else if (props == "grafikTataHaji"){
        dataAPI = dataJalan(DgTataRSHaji) 
        namaJalan = "Jalan Dg Tata RS Haji"
    }else if (props == "grafikflyover"){
        dataAPI = dataJalan(Flyover) 
        namaJalan = "Flyover"
    }else if (props == "grafikKajaolaliddo"){
        dataAPI = dataJalan(KajaolaliddoKatedral) 
        namaJalan = "Jalan Kajaolaliddon Katedral"
    }else if (props == "grafikpekananAmirullah"){
        $('#periode').html(val)
        dataAPI = dataPekan(TotalAmirullah) 
        namaJalan = "Grafik Pekanan Jalan Amirullah"
        console.log(dataAPI)
    }else if (props == "grafikSatuBulanAmirullah"){
        $('#periode').html(val)
        dataAPI = dataSatuBulan(TotalAmirullah) 
        namaJalan = "Grafik Satu Bulan Jalan Amirullah"
        console.log(dataAPI)
    }else if (props == "grafikDuaBulanAmirullah"){
        $('#periode').html(val)
        dataAPI = dataDuaBulan(TotalAmirullah) 
        namaJalan = "Grafik Dua Bulan Jalan Amirullah"
        console.log(dataAPI)
    }else if (props == "grafikTigaBulanAmirullah"){
        $('#periode').html(val)
        dataAPI = dataTigaBulan(TotalAmirullah) 
        namaJalan = "Grafik Tiga Bulan Jalan Amirullah"
    }else if (props == "grafikEmpatBulanAmirullah"){
        $('#periode').html(val)
        dataAPI = dataEmpatBulan(TotalAmirullah) 
        namaJalan = "Grafik Empat Bulan Jalan Amirullah"
    }
    else if (props == "jumlahMacet"){
        $('#jumlahMacet').html(totalMacet())
    }


    if(myChart){
        myChart.destroy()
    }

    showChart(dataAPI, namaJalan)

    
}


