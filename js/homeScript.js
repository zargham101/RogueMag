
const video = document.getElementById('promo-video');
const watchNowBtn = document.getElementById('watch-now-btn');

watchNowBtn.addEventListener('click', function () {
    // Check if the video is paused, and if so, play it
    if (video.paused) {
        video.play();
        watchNowBtn.innerHTML = 'Pause'; // Change the button text to "Pause"
    } else {
        // If the video is playing, pause it
        video.pause();
        watchNowBtn.innerHTML = 'Watch Now'; // Change the button text back to "Watch Now"
    }
});

video.addEventListener('ended', function () {
    video.currentTime = 0; // Rewind the video to the beginning
    watchNowBtn.innerHTML = 'Watch Now'; // Change the button text back to "Watch Now"
});
