document.getElementById('btn1').addEventListener("click", processJSONXML, false);
document.getElementById('btn2').addEventListener("click", processJSONFetch, false);


function processJSONXML()
{
    //Read and render a JSON file with XMLHttpRequest
    let request = new XMLHttpRequest();
    request.open('GET', 'myjson.json');
    request.send();
    request.onload = function () 
    {  
        let data = JSON.parse(this.response);
        processData('XMLHttpRequest', data);
    }
}

function processJSONFetch()
{
    //Read and render a JSON file with fetch
    fetch('https://api.npoint.io/e372749f9be2abdafcb8')
    .then(response => response.json())
    //And store in the variable 'data'
    .then(data => 
    {
        processData('fetch', data)
    });
}

function processData(type, data)
{
    //Be able to trace this back to 
    document.write("Processing data obtained with " + type + '<br/>');
    document.write('<br/>' + data.type + ' ' + data.name + ' ' + data.batters.batter[2].type + ' ' + data.topping[4].type);
}