const images = [
"memo1.jpg",
"memo2.jpeg",
"memo4.jpeg",
"memo5.jpeg"
];

let currentIndex = 0;

function showSlide(index){
	const imgElement = document.querySelector('.slideshow-img');
	if ( index >= images.length) currentIndex = 0;
	else if(index<0) currentIndex=images.length - 1;
	else currentIndex=index;
	imgElement.src=images[currentIndex];
}

function changeSlide(n){
    showSlide(currentIndex+n);

}

