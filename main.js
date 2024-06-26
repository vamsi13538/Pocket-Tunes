// Initializing variables
const allSongsListContainer = document.querySelector('.allSongsListContainer');
const genreFilter = document.querySelector('#genreFilter');
const songSearchInput = document.querySelector('#songSearchInput');
const previousBtn = document.querySelector('.previousBtn');
const nextBtn = document.querySelector('.nextBtn');
const audioPlayer = document.getElementById('audioInput'); // Reference to the audio player element
const songsData = [
    {
        "title": "Death Bed",
        "genre": "Hip Hop",
        "artist": "Powfu",
        "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
        "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
        "id": "1"
    },
    {
        "title": "Bad Liar",
        "genre": "Hip Hop",
        "artist": "Imagine Dragons",
        "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
        "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
        "id": "2"
    },
    {
        "title": "Faded",
        "genre": "Rock",
        "artist": "Alan Walker",
        "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
        "url": "https://samplesongs.netlify.app/Faded.mp3",
        "id": "3"
    },
    {
        "title": "Hate Me",
        "genre": "Pop",
        "artist": "Ellie Goulding",
        "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
        "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
        "id": "4"
    },
    {
        "title": "Solo",
        "genre": "Pop",
        "artist": "Clean Bandit",
        "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
        "url": "https://samplesongs.netlify.app/Solo.mp3",
        "id": "5"
    },
    {
        "title": "Without Me",
        "genre": "Rock",
        "artist": "Halsey",
        "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
        "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
        "id": "6"
    },
    {
        "title": "Death Bed",
        "genre": "Hip Hop",
        "artist": "Powfu",
        "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
        "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
        "id": "1"
    },
    {
        "title": "Bad Liar",
        "genre": "Hip Hop",
        "artist": "Imagine Dragons",
        "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
        "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
        "id": "2"
    },
    {
        "title": "Faded",
        "genre": "Rock",
        "artist": "Alan Walker",
        "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
        "url": "https://samplesongs.netlify.app/Faded.mp3",
        "id": "3"
    },
    {
        "title": "Hate Me",
        "genre": "Pop",
        "artist": "Ellie Goulding",
        "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
        "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
        "id": "4"
    },
    {
        "title": "Solo",
        "genre": "Pop",
        "artist": "Clean Bandit",
        "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
        "url": "https://samplesongs.netlify.app/Solo.mp3",
        "id": "5"
    },
    {
        "title": "Without Me",
        "genre": "Rock",
        "artist": "Halsey",
        "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
        "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
        "id": "6"
    }
];
let currentSongIndex = 0;

// Function to display songs based on genre and search query
function showSongs() {
    // Clear the container before adding songs
    allSongsListContainer.innerHTML = '';

    const selectedGenre = genreFilter.value.toLowerCase();
    const searchQuery = songSearchInput.value.toLowerCase();

    // Filter songs based on the selected genre and search query
    const filteredSongs = songsData.filter(song => {
        const matchesGenre = selectedGenre === 'all' || song.genre.toLowerCase() === selectedGenre;
        const matchesSearch = song.title.toLowerCase().includes(searchQuery);
        return matchesGenre && matchesSearch;
    });

    // Create an unordered list to hold song titles
    const ul = document.createElement('ul');

    // Iterate through filtered songs and create list items
    filteredSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.classList.add('eachSong');
        li.innerHTML = `${song.title} - <i>${song.artist}</i>`;

        // Add click event listener to each list item
        li.addEventListener('click', () => {
            // Update song details when a song is clicked
            updateSongDetails(song, index);
        });

        ul.appendChild(li);
    });

    // Append the unordered list to the container
    allSongsListContainer.appendChild(ul);

    // Display the first song initially
    if (filteredSongs.length > 0) {
        updateSongDetails(filteredSongs[currentSongIndex]);
    }
}

// Function to update song details in the HTML
function updateSongDetails(song) {
    // Update image, title, artist, and audio player with song details
    const songImage = document.querySelector('#songImage');
    const songName = document.querySelector('.songName');
    const songArtistName = document.querySelector('.songArtistName');

    songImage.src = song.artwork;
    songName.textContent = song.title;
    songArtistName.textContent = song.artist;

    // Update audio player source and load
    audioPlayer.src = song.url;
    audioPlayer.load();

    // Play the audio after loading
    audioPlayer.play();
}

// Event listeners
genreFilter.addEventListener('change', showSongs);
songSearchInput.addEventListener('input', showSongs);

// Event listener for previous button
previousBtn.addEventListener('click', () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songsData.length - 1; // Wrap around to the last song
    }
    updateSongDetails(songsData[currentSongIndex]);
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    currentSongIndex++;
    if (currentSongIndex >= songsData.length) {
        currentSongIndex = 0; // Wrap around to the first song
    }
    updateSongDetails(songsData[currentSongIndex]);
});

// Initial call to display songs on page load
showSongs();


// Adding event listener for toggling light and dark theme colors
const toggleOff = document.querySelector('#toggleOff');
const darkLetter = document.querySelector('.darkLetter');
const lightLetter = document.querySelector('.lightLetter');
const allSongsContainer = document.querySelector('.allSongsContainer');
const genreFilterclr = document.querySelector('#genreFilter');
const songSearchInputclr = document.querySelector('#songSearchInput');
const songsCardMainContainer = document.querySelector('.songsCardMainContainer');
const songCardContainer = document.querySelector('.songCardContainer');
const songCardTextContent = document.querySelector('.songCardTextContent');
const songCardImageContainer = document.querySelector('.songCardImageContainer');
const songPlaylistMainContainer = document.querySelector('.songPlaylistMainContainer');
const songPlaylistInputclr = document.querySelector('#songPlaylistInput');
const playlistSearchInput = document.querySelector('#playlistSearchInput');
// const songPlaylistContainerh3clr = document.querySelectorAll('.songPlaylistContainer');

toggleOff.addEventListener('click', function() {
    if (toggleOff.classList.contains('fa-toggle-off')) {
        toggleOff.classList.remove('fa-toggle-off');
        toggleOff.classList.add('fa-toggle-on');
        darkLetter.style.display = 'none';
        lightLetter.style.display = 'block';
        // Dark theme for allSongsContainer
        allSongsContainer.style.backgroundColor = 'black';
        allSongsContainer.style.color = 'white';
        genreFilterclr.style.backgroundColor = 'black';
        genreFilterclr.style.color = 'white';
        songSearchInputclr.style.backgroundColor = 'white';
        songSearchInputclr.style.border = '1px solid black';
        songSearchInputclr.style.caretColor = 'white';
        document.querySelectorAll('.eachSong').forEach((indvSong) => {
            indvSong.style.backgroundColor = 'white';
            indvSong.style.color = 'black';
        });
        // Dark theme for songsCardMainContainer
        songsCardMainContainer.style.backgroundColor = 'black';
        songCardContainer.style.backgroundColor = 'white';
        songCardTextContent.style.color = 'black';
        songCardImageContainer.style.border = '2px solid black';
         // Dark theme for songPlaylistMainContainer
         songPlaylistMainContainer.style.backgroundColor = 'black';
         songPlaylistMainContainer.style.color = 'white';
         songPlaylistInputclr.style.backgroundColor = 'white';
         songPlaylistInputclr.style.border = '1px solid black';
         playlistSearchInput.style.backgroundColor = 'white';
         playlistSearchInput.style.border = '1px solid black';
         document.querySelectorAll('.eachPlaylistSong').forEach((indvSong) => {
            indvSong.style.backgroundColor = 'black';
            indvSong.style.color = 'white';
         })
    } else {
        toggleOff.classList.remove('fa-toggle-on');
        toggleOff.classList.add('fa-toggle-off');
        darkLetter.style.display = 'block';
        lightLetter.style.display = 'none';
        // Light theme for allSongsContainer
        allSongsContainer.style.backgroundColor = '#6BB8DE';
        allSongsContainer.style.color = 'black';
        genreFilterclr.style.backgroundColor = '#1890CB';
        genreFilterclr.style.color = 'black';
        songSearchInputclr.style.backgroundColor = '#6BB8DE';
        songSearchInputclr.style.border = '1px solid grey';
        songSearchInputclr.style.caretColor = 'black';
        document.querySelectorAll('.eachSong').forEach((indvSong) => {
            indvSong.style.backgroundColor = '#0B80BC';
            indvSong.style.color = 'white';
        });
        // Light theme for songsCardMainContainer
        songsCardMainContainer.style.backgroundColor = '#6BB8DE';
        songCardContainer.style.backgroundColor = '#0573AB';
        songCardTextContent.style.color = 'black';
        songCardImageContainer.style.border = 'none';
        // Light theme for songPlaylistMainContainer
        songPlaylistMainContainer.style.backgroundColor = '#6BB8DE';
         songPlaylistMainContainer.style.color = 'black';
         songPlaylistInputclr.style.backgroundColor = 'white';
         songPlaylistInputclr.style.border = '1px solid black';
         playlistSearchInput.style.backgroundColor = '#6BB8DE';
         playlistSearchInput.style.border = '1px solid black';
    }
});
