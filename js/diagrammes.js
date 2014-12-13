
      // Chargement de l'API
      google.load('visualization', '1.0', {'packages':['corechart']});
      
      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart1);
	  google.setOnLoadCallback(drawChart2);
	  google.setOnLoadCallback(drawChart3);
	  google.setOnLoadCallback(drawChart4);

	  /*****PARTICIPANTS*****/
      function drawChart1() {

      // Crée le tableau
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'situation');
      data.addColumn('number', 'nombre');
      data.addRows([
        ['étudiants', 3],
        ['chomage', 1],
        ["demandeur d'emploi", 1],
        ['Professeur', 1],
        ['Famille', 2]
      ]);

      // Options
      var options = {'title':'',
					 'chartArea':'0',
					 'chartArea	':'0',
					 'legend':'none',
					 'is3D':'true'
					 };

      // Instancie et dessine la charte
      var chart = new google.visualization.PieChart(document.getElementById('participants'));
      chart.draw(data, options);
    }
	
	/*****AGE*****/
	 function drawChart2() {

      // Crée le tableau
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'age');
      data.addColumn('number', 'nombre');
      data.addRows([
        ['17 ans', 1],
        ['18 ans', 2],
        ['19 ans', 1],
        ['20 ans', 1],
      ]);

      // Options
      var options = {'title':'',
					 'legend':'none',
					 'is3D':'true'
					 };

      // Instancie et dessine la charte
      var chart = new google.visualization.PieChart(document.getElementById('age'));
      chart.draw(data, options);
    }
	
	/*****VILLE*****/
	 function drawChart3() {

      // Crée le tableau
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'ville');
      data.addColumn('number', 'nombre');
      data.addRows([
        ['Avignon', 1],
        ['Marseille', 2],
        ['Arles', 1],
        ['Nîmes', 1],
        ['Terre', 1],
      ]);

      // Options
      var options = {'title':'',
					 'legend':'none',
					 'is3D':'true'
					 };

      // Instancie et dessine la charte
      var chart = new google.visualization.PieChart(document.getElementById('ville'));
      chart.draw(data, options);
    }
	
	/*****INTERET*****/
	 function drawChart4() {

      // Crée le tableau
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'promo');
      data.addColumn('number', 'nombre');
      data.addRows([
        ['Info1', 1],
        ['Info2', 2],
        ['MMI1', 1],
        ['MMI2', 1],
        ['LP', 1],
      ]);

      // Options
      var options = {'title':'',
					 'legend':'none',
					 'is3D':'true'
					 };

      // Instancie et dessine la charte
      var chart = new google.visualization.PieChart(document.getElementById('interet'));
      chart.draw(data, options);
    }