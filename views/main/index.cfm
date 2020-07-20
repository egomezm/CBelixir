hello guys<br>
<h2>Custom CSS</h2>
<p>This is an example of using custom <span class="colorBG">CSS files.</span>  We are using class "colorBG" </p>


<h2>Custom JS</h2>
<div id="containercustomJS"></div>
<br>

<h2>Tetsing jQuery</h2>
<div id="containerjquery"></div>
<br>

<h2>Using BootStrap</h2>
<div class="jumbotron">
	<h1>BootStrap is Working</h1>
	<p>This example.</p>
	<p>
		<a class="btn btn-lg btn-primary" href="../../components/#navbar" role="button">View navbar docs »</a>
	</p>
	<div class="alert alert-danger" role="alert">
		<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
		<span class="sr-only">Error:</span>
		Enter a valid email address
	</div>
</div>

<h2>Using HighCharts</h2>
<div id="HighChartContainer" style="width:100%; height:400px;"></div>

<h2>Using DataTables</h2>
	<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
			</tr>
		</tbody>
	</table>



<script type="module" >
		$( document ).ready(function() {
			$( '#container').text( "hello there, Im a text string returned from a custom defined function" );
			$( '#containerjquery').text( "This Text was added using jQuery!" );

			//Custom JS

			$('#containercustomJS').text(user.talk("hi there, im a text string returned by a custom function"));

			//Datatables
			 $('#example').DataTable();

			// Highcharts
			Highcharts.chart('HighChartContainer', {
				title: {
					text: 'Solar Employment Growth by Sector, 2010-2016'
				},
				subtitle: {
					text: 'Source: thesolarfoundation.com'
				},
				yAxis: {
					title: {
						text: 'Number of Employees'
					}
				},
				xAxis: {
					accessibility: {
						rangeDescription: 'Range: 2010 to 2017'
					}
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle'
				},
				plotOptions: {
					series: {
						label: {
							connectorAllowed: false
						},
						pointStart: 2010
					}
				},
				series: [{
					name: 'Installation',
					data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
				}, {
					name: 'Manufacturing',
					data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
				}, {
					name: 'Sales & Distribution',
					data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
				}, {
					name: 'Project Development',
					data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
				}, {
					name: 'Other',
					data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
				}],
				responsive: {
					rules: [{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								layout: 'horizontal',
								align: 'center',
								verticalAlign: 'bottom'
							}
						}
					}]
				}
			});// END of Highcharts
		});
	</script>