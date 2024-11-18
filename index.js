// -----------Trailer toggle code--------------

// * When called, this function will toggle the visibility of a video trailer element on the webpage.

function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}

// when click the slider tha background image change and data change !
// ! here i used to changeContent to this website

function changeContent(bgImage, titleImg, videoSrc, year, rating, seasons, genre, description) {
    // Update the background image
    const banner = document.querySelector('.banner');
    banner.style.background = `url('image/${bgImage}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
  
    // Update the movie title image
    const movieTitle = document.querySelector('.movie-title');
    movieTitle.src = titleImg;
  
    // Update the trailer video
    const trailerVideo = document.querySelector('.trailer video');
    trailerVideo.src = videoSrc;
  
    // Update the year, rating, seasons, and genre
    const h4Spans = document.querySelectorAll('.banner .content.active h4 span');
    h4Spans[0].textContent = year;
    h4Spans[1].textContent = rating;
    h4Spans[2].textContent = seasons;
    h4Spans[3].textContent = genre;
  
    // Update the description
    const descriptionParagraph = document.querySelector('.banner .content.active p');
    descriptionParagraph.textContent = description;
}
function updateWatchLink(element) {
    // Get the value of data-watch attribute
    const watchLink = element.dataset.watch;

    // Find the Watch button
    const watchButton = document.querySelector('a.watch');

    // Update the href of the Watch button
    watchButton.href = watchLink;
}
  

