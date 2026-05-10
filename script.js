const video =
document.getElementById("video");

const previewImage =
document.getElementById("previewImage");

async function startCamera(){

    try{

        const stream =
        await navigator.mediaDevices.getUserMedia({

            video:{
                facingMode:"environment"
            }

        });

        video.srcObject = stream;

    }catch(e){

        alert("เปิดกล้องไม่ได้");

    }

}

function captureImage(){

    const canvas =
    document.createElement("canvas");

    canvas.width =
    video.videoWidth;

    canvas.height =
    video.videoHeight;

    const ctx =
    canvas.getContext("2d");

    ctx.drawImage(
        video,
        0,
        0
    );

    const img =
    canvas.toDataURL(
        "image/png"
    );

    previewImage.src = img;

}

startCamera();
