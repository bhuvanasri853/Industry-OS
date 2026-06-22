function ask() {
  const q = document.getElementById("question").value;

  document.getElementById("answer").innerHTML =
    "Demo Answer:<br><br>" +
    "Question: " + q +
    "<br><br>Check oil level, inspect bearings, and verify pressure before operation." +
    "<br><br><b>Source:</b> Pump Manual";
}
