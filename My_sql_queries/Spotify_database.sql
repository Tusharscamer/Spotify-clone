use spotify

CREATE TABLE Library (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) UNIQUE NOT NULL,
    type ENUM('playlist', 'artist') NOT NULL
);

CREATE TABLE Playlist (
    playlistName VARCHAR(100) PRIMARY KEY,
    imgpath VARCHAR(100),
    playlistLabel VARCHAR(100),
    library_id INT,
    FOREIGN KEY (library_id) REFERENCES Library(id) ON DELETE CASCADE
);

CREATE TABLE Artist (
    artistName VARCHAR(100) PRIMARY KEY,
    imgpath VARCHAR(100),
    artistLabel VARCHAR(100),
    library_id INT,
    FOREIGN KEY (library_id) REFERENCES Library(id) ON DELETE CASCADE
);

-- data for insertion on Library 
INSERT INTO Library (Name, type) VALUES 
('Liked Songs', 'playlist'),
('English Mashup', 'playlist'),
('Hindi Playlist', 'playlist'),
('Japanese Songs', 'playlist'),
('Decent Punjabi Songs', 'playlist'),
('Anuv Jain', 'artist'),
('Arijit Singh', 'artist'),
('Carry Minati', 'artist'),
('Eminem', 'artist'),
('Emiway Bantai', 'artist'),
('Justin Bieber', 'artist');

-- data for insertion on Playlist 
INSERT INTO Playlist (playlistName, imgpath, playlistLabel, library_id) VALUES 
('Liked Songs', './playlist/liked.png', '20 songs', 1),
('English Mashup', './playlist/english.png', 'The_tushar_dhakad', 2),
('Hindi Playlist', './playlist/hindi.png', 'The_tushar_dhakad', 3),
('Japanese Songs', './playlist/japanese.png', 'The_tushar_dhakad', 4),
('Decent Punjabi Songs', './playlist/punjabi.png', 'The_tushar_dhakad', 5);

-- data for insertion in Artist table 
INSERT INTO Artist (artistName, imgpath, artistLabel, library_id) VALUES 
('Anuv Jain', './artists/anuv_jain.png', 'Artist', 6),
('Arijit Singh', './artists/arijit.png', 'Artist', 7),
('Carry Minati', './artists/carryMinati.png', 'Artist', 8),
('Eminem', './artists/Eminem.png', 'Artist', 9),
('Emiway Bantai', './artists/Emiway_Bantai.png', 'Artist', 10),
('Justin Bieber', './artists/justin_biber.png', 'Artist', 11);
