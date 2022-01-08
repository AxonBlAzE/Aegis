const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const fs = require('fs');
const app = express();
const PORT = 4000;

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server Works !!! At port ${PORT}`);
});

app.get('/youtube-downloadmp3', async (req, res, next) => {
	try {
		var url = req.query.url;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}
		let title = 'audio';

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			if (err) throw err;
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		ytdl(url, {
			format: 'mp3',
			filter: 'audioonly',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/youtube-downloadmp4', async (req, res, next) => {
	try {
		let url = req.query.url;
		if(!ytdl.validateURL(url)) {
			return res.sendStatus(400);
		}
		let title = 'aegis-youtube-downloaded-video';

		await ytdl.getBasicInfo(url, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
		ytdl(url, {
			format: 'mp4',
		}).pipe(res);

	} catch (err) {
		console.error(err);
	}
});

app.get('/spotify-downloadmp3', async (req, res, next) => {
    try {
        const spotify = new Spotify({
            id: 'CLIENT_ID_HERE',
            secret: 'CLIENT_SECERT_HERE',
            defaultLimit: 10 // default track limit for playlist & album
        }) 
        let url = req.query.url;
        if(!spotify.validateURL(url)) {
            return res.sendStatus(400);
            
        }
        let title = 'aegis-spotify-downloaded-track';
        let track = await spotify.getTrack(url);
        title = track.name;
        res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
        spotifydl(url, {
            format: 'mp3',
            quality: '0',
            output: '-'
        }).pipe(res);
    } catch (err) {
        console.error(err);
    }
});
//         const TRACK_URL = 'https://open.spotify.com/track/25yup6WYnPoITrfzhkBLmt'

//         console.log(Spotify.validate(TRACK_URL, 'TRACK')) // true

//         const track = await spotify.getTrack(TRACK_URL)

//         console.log([
//             `name = ${track.name}`,
//             `artists = ${track.artists.join(' - ')}`,
//             `duration = ${track.duration}ms`
//         ].join('\n'))


//         console.log(track.stream()) // Promise<Stream.Readable>

//         // To Download/Save track in your PC...

//         // const stream = await track.stream()

//         // stream
//         //     .pipe(fs.createWriteStream('song.webm'))
//         //     .on('end', () => console.log('Saved!'))

//         spotifydl(track, {
//             format: 'mp3',
//             quality: '0'
//         })
//             .pipe(fs.createWriteStream('song.mp3'))
//             .on('end', () => console.log('Saved!'))

        
//     } catch (err) {
//         console.error(err);
//     }
// });