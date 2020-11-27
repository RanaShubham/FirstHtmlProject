document.querySelector("button").addEventListener("click", handleSubmitClick);

function handleSubmitClick()
{
    name = document.querySelector(".inputName").value;
    message = document.querySelector(".inputMessage").value;

    if (!name || !message)
    {
        alert("Please enter name and message.")
        return
    }
    var cardObject = document.getElementById("card");
    var element = document.createElement("div");

    // element.style.height = "3cm";
    // element.style.width = "5cm";
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.border = "solid";
    element.style.borderStyle = "groove";
    element.style.borderColor = "gold";
    element.style.borderWidth = "4px";
    // element.style.textAlign = "center";
    // element.style.verticalAlign = "center"
    element.style.margin = "20px";
    element.style.overflow = "hidden";
    element.style.backgroundColor = "#66ffff";
    element.innerHTML = `Welcome ${name} <br><br> ${message}`;

    cardObject.appendChild(element);

    document.querySelector(".inputName").value = null;
    document.querySelector(".inputMessage").value = null;
}