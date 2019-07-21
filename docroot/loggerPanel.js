// Logger
function logger(message) {
    var aTextarea = document.getElementById('log');
    aTextarea.value += "\n> " + message;
    aTextarea.scrollTop = aTextarea.scrollHeight;
}
function clearLog() {
    log.value = "+ Ready";
}
window.onload = function () {
    log.value = "+++ Start.";
    initializePage();
};
// document.write('<div id="logBox">');
document.write('<div id="logBox" style="visibility:hidden;height:0px;margin-top:0px;padding:0px;">');
document.write('<div class="panelTitle">');
document.write('    Log messages');
document.write('</div>');
document.write('<div class="panelArea">');
document.write('    <textarea id="log"></textarea>');
document.write('</div>');
document.write('<div class="panelArea">');
document.write('    <table>');
document.write('        <tr>');
document.write('            <td><button id="clearLog" onclick="clearLog();">Clear</button></td>');
document.write('        </tr>');
document.write('    </table>');
document.write('</div>');
document.write('</div>');
