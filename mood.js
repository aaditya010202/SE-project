let start_cam = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

start_cam.addEventListener("click", async () => {
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = stream;
  } catch (err) {
    alert("device not found");
  }
});

click.addEventListener("click", () => {
  canvas
    .getContext("2d")
    .drawImage(video, 0, 0, canvas.clientWidth, canvas.height);
  let image_data_url = canvas.toDataURL("image/jpeg");
  console.log(image_data_url);
});
