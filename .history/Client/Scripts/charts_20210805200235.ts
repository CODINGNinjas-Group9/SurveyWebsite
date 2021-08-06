// Load google charts
google.charts.load("current", { packages: ["corechart"] });
for (let i = 0; i < chartsData.length; i++) {
  google.charts.setOnLoadCallback(drawChart);

  let data = [];
  let options = [];
  let chart = [];
  function drawChart() {
    data[i] = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      [
        chartsData[i].res[0] != null ? chartsData[i].res[0].resText : "",
        chartsData[i].res[0] != null ? chartsData[i].res[0].total : 0,
      ],
      [
        chartsData[i].res[1] != null ? chartsData[i].res[1].resText : "",
        chartsData[i].res[1] != null ? chartsData[i].res[1].total : 0,
      ],
      [
        chartsData[i].res[2] != null ? chartsData[i].res[2].resText : "",
        chartsData[i].res[2] != null ? chartsData[i].res[2].total : 0,
      ],
      [
        chartsData[i].res[3] != null ? chartsData[i].res[3].resText : "",
        chartsData[i].res[3] != null ? chartsData[i].res[3].total : 0,
      ],
      [
        chartsData[i].res[4] != null ? chartsData[i].res[4].resText : "",
        chartsData[i].res[4] != null ? chartsData[i].res[4].total : 0,
      ],
    ]);

    options[i] = {
      title: chartsData[i].question,
    };

    chart[i] = new google.visualization.PieChart(
      document.getElementById("resChart" + i)
    );

    chart[i].draw(data[i], options[i]);
  }
}
