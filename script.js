function upDate(previewPic)
{
    console.log("Mouse over triggered");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage="url('"+previewPic.src +"')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo()
{
    console.log("Mouse out triggeres");
    const imageDiv= document.getElementById("image");
    imageDiv.style.backgroundImage="url('')";
    imageDiv.innerHTML="Hover over an image below to display here.";
}
