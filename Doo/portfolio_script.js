document.addEventListener("DOMContentLoaded", () => {
    const portfolioContainer = document.getElementById("portfolioContainer");

    // Function to load images into the portfolio container
    function loadImages(imagePaths, titles, descriptions) {
        portfolioContainer.innerHTML = ''; // Clear previous content
        imagePaths.forEach((imagePath, index) => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = "Artwork"; // Set alt text for accessibility
            img.dataset.title = titles[index];
            img.dataset.description = descriptions[index];

            const div = document.createElement('div');
            div.className = 'grid_item';

            const info = document.createElement('div');
            info.className = 'info';

            const title = document.createElement('div');
            title.className = 'title';
            title.innerText = titles[index];

            const description = document.createElement('div');
            description.className = 'description';
            description.innerText = descriptions[index];

            info.appendChild(title);
            info.appendChild(description);

            div.appendChild(img);
            div.appendChild(info);
            portfolioContainer.appendChild(div);
        });
    }

    // Event listener for the Artworks button
    document.getElementById("artworksBtn").addEventListener("click", () => {
        const artworkImagePaths = [
            "image/artwork/artwork_1.jpg",
            "image/artwork/artwork_2.jpg",
            "image/artwork/artwork_3.jpg",
            "image/artwork/artwork_4.jpg",
            "image/artwork/artwork_5.jpg",
            "image/artwork/artwork_6.jpg",
            "image/artwork/artwork_7.jpg",
            "image/artwork/artwork_8.jpg",
            "image/artwork/artwork_9.jpg",
            "image/artwork/artwork_10.jpg"
        ];

        const artworkTitles = [
            "A Man (B&W)",
            "A Man (Colour)",
            "Dear Calla Lily",
            "A Tree",
            "A Girl With A Gun",
            "Fish Tank Kid",
            "Hang Tuah Illustration",
            "The Skateboard Boy",
            "Animals Drawing",
            "Poster Design"
        ];

        const artworkDescriptions = [
            "One of the most satisfied portrait drawing practice based on reference!",
            "Decided to add colour onto the drawing.",
            "A graceful flower I haven't seen around where I live.",
            "Landscape drawing for practice purposes.",
            "Figure drawing practice based on a reference photo from pinterest!",
            "One of the vector art we created based on a reference.",
            "Illustrated for Malaysia's Folklore based theme",
            "Another figure drawing practice based on a reference photo.",
            "Ain't that hedgehog cute? ^^",
            "The mascots seem to be enjoying themselves..."
        ];
        loadImages(artworkImagePaths, artworkTitles, artworkDescriptions);
    });

    // Event listener for the Photographs button
    document.getElementById("photographsBtn").addEventListener("click", () => {
        const photographImagePaths = [
            "image/photographs/photo_1.JPG",
            "image/photographs/photo_2.JPG",
            "image/photographs/photo_3.JPG",
            "image/photographs/photo_4.JPG",
            "image/photographs/photo_5.JPG",
            "image/photographs/photo_6.JPG",
            "image/photographs/photo_7.JPG",
            "image/photographs/photo_8.JPG",
            "image/photographs/photo_9.JPG",
            "image/photographs/photo_10.JPG"
        ];

        const photographTitles = [
            "Makan.Buzz Cafe",
            "The Tiny Moon",
            "Petronas Twin Towers",
            "Lantern Snow Globe",
            "Variation Of Signboard Design",
            "Vintage 1988",
            "Broken Door",
            "Flags",
            "Crane Water Fountain",
            "An Old Couple"
        ];
        
        const photographDescriptions = [
            "Location: River of Life, KL, Malaysia",
            "One of the awesome pictures we captured while we're at River of Life!",
            "Have you ever go near to the tower and look up? This is how it looks like.",
            "We were attracted by the lantern design so we took a picture!",
            "Location: Jalan Sultan, City Center, KL, Malaysia",
            "Location: Jalna Sultan, City Center, KL, Malaysia",
            "We're in love with the colour of the entire photo!",
            "Location: Sekinchan, Malaysia",
            "Location: Sekinchan, Malaysia",
            "Location: Pantai Redang, Sekinchan, Malaysia"
        ];
        loadImages(photographImagePaths, photographTitles, photographDescriptions);
    });

    // Load artworks by default
    document.getElementById("artworksBtn").click();

    // Get the modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Add event listener to dynamically added grid items
    portfolioContainer.addEventListener("click", (e) => {
        if (e.target.tagName === 'IMG') {
            document.body.classList.add('blur');
            modal.style.display = "block";
            modalImg.src = e.target.src;
            captionText.innerHTML = `<strong>${e.target.dataset.title}</strong><br>${e.target.dataset.description}`;
        }
    });

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        document.body.classList.remove('blur');
    }
});
