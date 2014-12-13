
      google.load('visualization', '1.0', {'packages':['corechart']});
      google.setOnLoadCallback(Circulaire);
	  google.setOnLoadCallback(Histogramme);
	  
	  /*****Circulaire*****/
      function Circulaire() {

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

      var options = {'title':'',
					 'width':900,
					 'height':400,
					 'chartArea':'0',
					 'chartArea	':'0',
					 'legend':'right',
					 'is3D':'true'
					 };

      var chart = new google.visualization.PieChart(document.getElementById('circular'));
      chart.draw(data, options);
    }
	
	/*****Histogramme*****/
      function Histogramme() {

      var data = new google.visualization.arrayToDataTable([
		['Formation','Nombre'],
        ['Info 1', 6],
		['Info 2', 3],
		['MMI 1', 5],
		['MMI 2', 1],
		['LPs ATC', 5],
		['LP SIL IN', 4]		
      ]);

      var options = {'orientation':'vertical',
					 'hAxis':{title:'Formations', titleTextStyle:{color: '#AAAAAA'}},
					 'legend':'none',
					 };

      var chart = new google.visualization.Histogram(document.getElementById('histogramme'));
      chart.draw(data, options);
    }