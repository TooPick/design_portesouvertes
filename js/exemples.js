
      google.load('visualization', '1.0', {'packages':['corechart']});
      google.setOnLoadCallback(Circulaire);
	  google.setOnLoadCallback(Histogramme);
	  google.setOnLoadCallback(Aire);
	  google.setOnLoadCallback(Map);
	  
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
		['Formation',''],
        ['Info 1', 60],
		['Info 2', 30],
		['MMI 1', 50],
		['MMI 2', 20],
		['LPs ATC', 50],
		['LP SIL IN', 40]		
      ]);

      var options = {'orientation':'horizontal',
					// 'hAxis':{title:'Formations', titleTextStyle:{color: '#AAAAAA'}},
					 'legend':'none',
					 };

      var chart = new google.visualization.BarChart(document.getElementById('histogramme'));
      chart.draw(data, options);
    }
	
	/*****Aire*****/
	 function Aire() {
        var data = google.visualization.arrayToDataTable([
          ['Année', 'Arles','Marseille'],
          ['2012',  50, 100],
          ['2013',  110, 90],
          ['2014',  90, 120],
          ['2015',  120, 130]
        ]);

        var options = {
          hAxis: {title: 'Années',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('aire'));
        chart.draw(data, options);
      }
	  
	/*****Carte*****/
	function Map() {
      var data = google.visualization.arrayToDataTable([
        ['Ville',   'Population'],
        ['Arles',  100],
        ['Marseille', 42],
        ['Paris', 3],
        ['Aix',  66]
      ]);

      var options = {
        sizeAxis: { minValue: 0, maxValue: 100 },
        region: 'FR', // Western Europe
        displayMode: 'markers',
        colorAxis: {colors: ['#2222EE', '#EE2222']} // bleu au rouge
      };

      var chart = new google.visualization.GeoChart(document.getElementById('map'));
      chart.draw(data, options);
    };