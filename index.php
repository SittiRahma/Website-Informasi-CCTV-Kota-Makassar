<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Diskominfo</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">


  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg" style="background-color: #ffffff;">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="img/diskominfo.png" alt="Logo" width="80" height="24" class="d-inline-block align-text-top">
            </a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Berita</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CCTV</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Profil</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <!-- Akhir Navbar -->

    <!-- Jumbotron -->
    <section class="jumbotron">
      <div class = "container">
        <div class="row">
          <div class="col">
            <h1 class="display-4">Statistik <span>Lalu Lintas</span> <br> <span>Kota</span> Makassar</h1>
            <!-- <h1 class="display-4"><span>Kota</span> Makassar</h1> -->
            <p class="lead">Publikasi Statistik Lalu Lintas menyajikan data mengenai keadaan lalu lintas transportasi darat di seluruh wilayah Kota Makassar yang bersumber dari hasi pantauan CCTV milik Kominfo.</p>
          </div>
          <div class="col">
            <img src="img/cctvcamera.jpg" width="300" class="rounded float-end" alt="...">
          </div>
        </div>
      </div>
    </section>
    <!-- Akhir Jumbotron -->

    <!-- Data -->
    <section id="data">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card text-center mb-2">
              <div class="card-body">
                <h5 class="card-title">Kemacetan</h5>
                <h1 class="card-text text-danger">9</h1>
                <h6 class="card-title2">Hari ini</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center mb-2">
              <div class="card-body">
                <h5 class="card-title">Kemacetan</h5>
                <h1 class="card-text text-warning">9</h1>
                <h6 class="card-text2">Hari ini</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center mb-2">
              <div class="card-body">
                <h5 class="card-title">Kemacetan</h5>
                <h1 class="card-text text-success">9</h1>
                <h6 class="card-text2">Hari ini</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center mb-2">
              <div class="card-body">
                <h5 class="card-title">Kemacetan</h5>
                <h1 class="card-text" style="color: #7466A5">9</h1>
                <h6 class="card-text2">Hari ini</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-center mb-2">
              <div class="card-body">
                <h5 class="card-title">Kemacetan</h5>
                <h1 class="card-text" style="color: #0074E9">9</h1>
                <h6 class="card-text2">Hari ini</h5>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <!-- Akhir Data -->

    <!-- dropdown -->
    <section id="dropdown">
      <div class="container">
        <div class="dropdown mt-3">
          <button class="btndropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kemacetan
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Akhir dropdown -->

    <!-- maps -->
    <section id="maps">
      <div class="container">
        <div class="card">
          <div class="row">
            <div class="col-3 ms-5 mt-4 container">
              <div class="row">
                <h4>Search Bar</h4>
              </div>
              <div class="row scrollBar">
                <ol class="list-group list-group-numbered">
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">Subheading</div>
                      Content for list item
                    </div>
                    <span class="badge bg-primary rounded-pill">14</span>
                  </li>
                </ol>
              </div>
            </div>
            <div class="col-4 mt-4 judul-statistik container"> 
              <div class="row">
                <h4>Statistik Kemacetan</h4> 
              </div>
              <div class="row">
                <div class="col">
                  <a class="btn" href="#" role="button">1H</a>
                </div>
                <div class="col">
                  <button class="btn" type="submit">1P</button>
                </div>
                <div class="col">
                  <button class="btn" type="submit">1B</button>
                </div>
                <div class="col">
                  <input class="btn" type="button" value="2B">
                </div>
                <div class="col">
                  <input class="btn" type="submit" value="3B">
                </div>
                <div class="col">
                  <input class="btn" type="reset" value="4B">
                </div>
              </div>
              <div class="row">
                <h3 class="judul2">Periode : 11 Oktober</h3>
              </div>
              <div class="row">
                <img src="img/grafik batang.png" alt="Logo" width="500" height="300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- akhir maps -->

    <!-- Footer -->
    <!-- Akhir Footer -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
  </body>
</html>
