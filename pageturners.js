document.addEventListener('DOMContentLoaded', function() {
    const modalContainer = document.getElementById('modal-container');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const downloadBook = document.getElementById('download-book');
    const readOnline = document.getElementById('read-online');
    const downloadAudiobook = document.getElementById('download-audiobook');

    const books = {
        fiction: {
            'literary-fiction':// Example books for 'literary-fiction'
            [
                { 
                    title: 'Pride and Prejudice', 
                    image: 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg', 
                    description: 'A novel by Jane Austen.', 
                    downloadLink: 'https://www.gutenberg.org/cache/epub/1342/pg1342-h.zip', 
                    audiobookLink: 'https://librivox.org/pride-and-prejudice-by-jane-austen', 
                    readOnlineLink: 'https://www.gutenberg.org/ebooks/1342' },
                { title: 'To Kill a Mockingbird', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZk4myHqaGvS15MZvu_wz_VQ_fb54Blx82fdN6eghWs3oKFRIO6oYRRU9ArWUBs7UHnZQ&usqp=CAU',
                     description: 'A novel by Harper Lee.', downloadLink: 'https://archive.org/download/to-kill-a-mockingbird_202107/To_Kill_a_Mockingbird.pdf', audiobookLink: 'https://youtu.be/LL4qS_8tPrw?si=qRY_2NKJRSxUDieu', readOnlineLink: 'https://giove.isti.cnr.it/demo/eread/libri/angry/mockingbird.pdf' },
                { title: '1984', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxy0p0fAcBldzDx0o3I9yVidJZl4Pi-B2cQ&s', description: 'A novel by George Orwell.', downloadLink: 'https://example.com/1984.pdf',
                     audiobookLink: 'https://example.com/1984_audio.mp3', readOnlineLink: 'https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf' },
                
                { title: 'The Mysterious Affair at Styles', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK-qbLZJL4fZQNqk_q0tfsXthLAPX08b0dg&s', description: 'A crime novel by Agatha Christie.', 
                    downloadLink: 'https://dl.dropboxusercontent.com/sh/d6plg2q4oydvpcs/AAD7tJmE8haoOsgTNRxMq6nJa/Archivos%20Infobooks%20ING/Temas%20%28Continuaci%C3%B3n%29/712%20Novelas%20policiacas/2.%20The%20Murders%20in%20the%20Rue%20Morgue%20Author%20Edgar%20Allan%20Poe.pdf?dl=1', audiobookLink: 'https://example.com/the_great_gatsby_audio.mp3', 
                    readOnlineLink: 'https://www.infobooks.org/pdfview/10841-the-murders-in-the-rue-morgue-edgar-allan-poe/' },
                    { title: 'The Murders in the Rue Morgue', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aHUUcqyU4_os5QD8w30WWR7kzidzdeYxYA&s', description: 'A crime novel by Edgar Allan Poe.', 
                        downloadLink:'//dl.dropboxusercontent.com/sh/d6plg2q4oydvpcs/AAD7tJmE8haoOsgTNRxMq6nJa/Archivos%20Infobooks%20ING/Temas%20%28Continuaci%C3%B3n%29/712%20Novelas%20policiacas/2.%20The%20Murders%20in%20the%20Rue%20Morgue%20Author%20Edgar%20Allan%20Poe.pdf?dl=1', audiobookLink: 'https://example.com/the_great_gatsby_audio.mp3', 
                        readOnlineLink: 'https://www.infobooks.org/pdfview/10841-the-murders-in-the-rue-morgue-edgar-allan-poe/' },
                        { id: 1, title: 'Peer-e-Kamil-Eng', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxE_oRZHZQupIKI2PpdTsyr_70m23nrlvyw&s' ,  downloadLink: 'https://archive.org/embed/PeerEKamilEngPdfStuff.blogspot.com' },
                        { id: 2, title: 'মেঘের ওপর বাড়ি', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGW6-4k1FOqatO3zXU6LlO6eMuEsGNC5drw&s', downloadLink: 'https://bengaliebook.com/wp-content/uploads/2022/02/%E0%A6%AE%E0%A7%87%E0%A6%98%E0%A7%87%E0%A6%B0-%E0%A6%93%E0%A6%AA%E0%A6%B0-%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A6%BF.pdf' },
                        { id: 3, title: 'The Absent Father Effect on Daughters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7Q8sAZ2TQMUAvKG9mhQX1jgOIh0hsOsSHQ&s', downloadLink:'https://www.researchgate.net/publication/356616072_The_Absent_Father_Effect_on_Daughters' },
                        { id: 4, title: 'Quiet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURAkedx1cubK8yBmS6m0H1cBueEkVqbFk1A&s', downloadLink:'https://dn790003.ca.archive.org/0/items/quiet-the-power-of-introverts-in-a-world-that-cant-stop-talking-susan-cain_202007/Quiet-%20The%20Power%20of%20Introverts%20in%20a%20World%20That%20Can%27t%20Stop%20Talking%20-%20Susan%20Cain.pdf'},
                        { id: 5, title: 'Paradoxical Sajid ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77_P16ijw4BCMAkJBfjX7r1l_BGYFsF8n-A&s', downloadLink:'https://www.banglabookshelf.com/Story%20Books%202/Arif-Azad/1/Paradoxical%20Sajid%20by%20Arif%20Azad.pdf' }      
            ]
            
            // Repeat similar structure for other categories
            ,
            'mystery': [
                { title: 'The Great Mystery Life Beyond Death', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KQxmx1eZvc4cGhuu1EKpeyL6iLvwqqTZDA&s', description: 'A mystery novel by Stieg Larsson.',
                     downloadLink: 'https://www.forgottenbooks.com/en/download/TheGreatMysteryofLifeBeyondDeath_10855999.pdf', audiobookLink: 'https://example.com/dragon_tattoo_audio.mp3', readOnlineLink: 'https://example.com/dragon_tattoo_read' },
                // More books here
            ],
            'Thriller': [
                { title: 'The Girl with the Dragon Tattoo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KQxmx1eZvc4cGhuu1EKpeyL6iLvwqqTZDA&s', description: 'A mystery novel by Stieg Larsson.',
                     downloadLink: 'https://www.forgottenbooks.com/en/download/TheGreatMysteryofLifeBeyondDeath_10855999.pdf', audiobookLink: 'https://example.com/dragon_tattoo_audio.mp3', readOnlineLink: 'https://example.com/dragon_tattoo_read' },
               
            ],
           
        },
        'non-fiction': {
            'biography': [
                { title: 'Steve Jobs', image: 'https://example.com/steve_jobs.jpg', description: 'A biography of Steve Jobs by Walter Isaacson.', downloadLink: 'https://example.com/steve_jobs.pdf', audiobookLink: 'https://example.com/steve_jobs_audio.mp3', readOnlineLink: 'https://example.com/steve_jobs_read' },
                // More books here
            ],
            // More categories here
        },
        'children': {
            'picture-books': [
                { title: 'The Very Hungry Caterpillar', image: 'https://example.com/hungry_caterpillar.jpg', description: 'A children\'s book by Eric Carle.', downloadLink: 'https://example.com/hungry_caterpillar.pdf', audiobookLink: 'https://example.com/hungry_caterpillar_audio.mp3', readOnlineLink: 'https://example.com/hungry_caterpillar_read' },
                // More books here
            ],
            // More categories here
        },
        'audiobooks': [
            { title: 'Becoming', image: 'https://example.com/becoming.jpg', description: 'An audiobook by Michelle Obama.', downloadLink: 'https://example.com/becoming.pdf', audiobookLink: 'https://example.com/becoming_audio.mp3', readOnlineLink: 'https://example.com/becoming_read' },
            // More books here
        ],
        'other': {
            'textbooks': [
                { title: 'Introduction to Algorithms', image: 'https://example.com/algorithms.jpg', description: 'A textbook by Thomas H. Cormen.', downloadLink: 'https://example.com/algorithms.pdf', audiobookLink: 'https://example.com/algorithms_audio.mp3', readOnlineLink: 'https://example.com/algorithms_read' },
                // More books here
            ],
            // More categories here
        }
    };

    function displayBooks(category, books) {
        const categoryDiv = document.getElementById(category).querySelector('.book-grid');
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book');
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.description}</p>
            `;
            bookItem.addEventListener('click', () => {
                showModal(book);
            });
            categoryDiv.appendChild(bookItem);
        });
    }

    function showModal(book) {
        modalTitle.textContent = book.title;
        modalImage.src = book.image;
        modalDescription.textContent = book.description;
        downloadBook.href = book.downloadLink;
        readOnline.href = book.readOnlineLink;
        downloadAudiobook.href = book.audiobookLink;
        modalContainer.style.display = 'flex';
    }

    closeModalBtn.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });

    Object.keys(books).forEach(category => {
        if (Array.isArray(books[category])) {
            displayBooks(category, books[category]);
        } else {
            Object.keys(books[category]).forEach(subCategory => {
                displayBooks(subCategory, books[category][subCategory]);
            });
        }
    });

});
