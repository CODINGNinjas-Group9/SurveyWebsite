// Load google charts
google.charts.load("current", { packages: ["corechart"] });
for (let i = 0; i < mydata.length; i++) {
  google.charts.setOnLoadCallback(drawChart);

  let data = [];
  let options = [];
  let chart = [];
  function drawChart() {
    data[i] = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      [
        mydata[i].res[0] != null ? mydata[i].res[0].resText : "",
        mydata[i].res[0] != null ? mydata[i].res[0].total : 0,
      ],
      [
        mydata[i].res[1] != null ? mydata[i].res[1].resText : "",
        mydata[i].res[1] != null ? mydata[i].res[1].total : 0,
      ],
      [
        mydata[i].res[2] != null ? mydata[i].res[2].resText : "",
        mydata[i].res[2] != null ? mydata[i].res[2].total : 0,
      ],
      [
        mydata[i].res[3] != null ? mydata[i].res[3].resText : "",
        mydata[i].res[3] != null ? mydata[i].res[3].total : 0,
      ],
      [
        mydata[i].res[4] != null ? mydata[i].res[4].resText : "",
        mydata[i].res[4] != null ? mydata[i].res[4].total : 0,
      ],
    ]);

    options[i] = {
      title: mydata[i].question,
    };

    chart[i] = new google.visualization.PieChart(
      document.getElementById("resChart" + i)
    );

    chart[i].draw(data[i], options[i]);
  }
}
