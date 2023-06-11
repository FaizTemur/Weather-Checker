function cel()
{
    let a = +document.querySelector("#TemperatureInCelcius").value;
    if(a==27||a==28)
    {
        alert("Temperature Is Moderate");
        document.querySelector("#change").innerHTML=`Temperature Is:${a}`;
    }
    else if(a<27)
    {
        alert("Temperature Is Cold");
    }
    else if(a>28)
    {
        alert("Temperature Is Hot");
    }
}
function fer()
{
    let b = document.querySelector("#TemperatureInFahrenheit").value;
    if(b==80)
    {
        alert("Temperature Is Moderate");
    }
    else if(b<80)
    {
        alert("Temperature Is Cold");
    }
    else if(b>80)
    {
        alert("Temperature Is Hot");
    }
}