// Load google charts
google.charts.load("current", { packages: ["corechart"] });
for (let i = 0; i < chartData.length; i++) {
  google.charts.setOnLoadCallback(drawChart);

  let data = [];
  let options = [];
  let chart = [];
  function drawChart() {
    data[i] = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      [
        chartData[i].res[0] != null ? chartData[i].res[0].resText : "",
        chartData[i].res[0] != null ? chartData[i].res[0].total : 0,
      ],
      [
        chartData[i].res[1] != null ? chartData[i].res[1].resText : "",
        chartData[i].res[1] != null ? chartData[i].res[1].total : 0,
      ],
      [
        chartData[i].res[2] != null ? chartData[i].res[2].resText : "",
        chartData[i].res[2] != null ? chartData[i].res[2].total : 0,
      ],
      [
        chartData[i].res[3] != null ? chartData[i].res[3].resText : "",
        chartData[i].res[3] != null ? chartData[i].res[3].total : 0,
      ],
      [
        chartData[i].res[4] != null ? chartData[i].res[4].resText : "",
        chartData[i].res[4] != null ? chartData[i].res[4].total : 0,
      ],
    ]);

    options[i] = {
      title: chartData[i].question,
    };

    chart[i] = new google.visualization.PieChart(
      document.getElementById("resChart" + i)
    );

    chart[i].draw(data[i], options[i]);
  }
}
