<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Date Calculator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>
        <div class="bg-dark">
            <div class="container">
                <div class="row">
                    <nav class="col navbar navbar-expand-lg navbar-dark">
                        <a class="navbar-brand" href="date_calculator.html">Date Calculator</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                               <span class="navbar-toggler-icon"></span>
                           </button>
                        <div id="navbarContent" class="collapse navbar-collapse">
                           
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="container mt-5 mb-5">
            <div class="card">
                <div class="card-header text-center">
                    <h1>Date Calculator</h1>
                </div>
                <div class="card-body">
                    <form id="date_form">
                        <div class="form-group">
                            <label for="date_from">Date From:</label>
                            <input type="date" id="date_from" class="form-control" value="1900-01-01">
                        </div>
                        <div class="form-group">
                            <label for="date_to">Date To:</label>
                            <input type="date" id="date_to" class="form-control" value="2020-01-01">
                        </div>
                        <button class="btn btn-success" onclick="getdateValue()" type="button">Calculate</button>
                    </form>
                    <div class="form_group">
                        <p ><h1 id="getter"></h1></p>
                        <p id="total_days" class="text-muted"></p>
                        <p id="total_hours" class="text-muted"></p>
                        <p id="total_minutes" class="text-muted"></p>
                        <p id="total_seconds" class="text-muted"></p>
                    </div>
                </div>
            </div>
        </div>
        <footer class="bg-dark py-5 text-muted text-center">
            <div class="container">
                <small>
                    <p>&copy;Bamidele Oluwatobi</p>
                    <p>&ldquo;Making Date Calculation very easy for Users&rdquo;</p>
                </small>
            </div>
        </footer>
        <script src="script/validate.js"></script>
    </body>
</html>
