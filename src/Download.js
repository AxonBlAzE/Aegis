import { useState } from "react";
import Display from "./Display";
import Welcome from "./Welcome";


const Download = () => {

    const [btnColor, setBtnColor] = useState("#e27a19");
    const [media, setMedia] = useState('');
    const [link, setLink] = useState('');
    
    const dropdownStyle = {marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
        height: '68px',
        borderColor: 'white',
        borderSize: '1px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '0px',
    }
    

    const handleMediaChange = (e) => {
        setMedia(e.target.value);
        // console.log(media);
        if(e.target.value === "Youtube4") {
            setBtnColor("red");
        } else if(e.target.value === "Spotify") {
            setBtnColor("green");
        } else if(e.target.value === "SoundCloud") {
            setBtnColor("blue");
        } else if (e.target.value === "Youtube3") {
            setBtnColor("darkred");
        }
    }

    const handleDownload = (e) => {
        e.preventDefault();
        let serverURL = 'http://localhost:4000';

        console.log("get link");
        console.log("link:"+link);

        async function YoutubeDownloadMp4(link) {
            const res = await fetch(`${serverURL}/youtube-downloadmp4?url=${link}`);
            if(res.status == 200) {
                var a = document.createElement('a');
                  a.href = `${serverURL}/youtube-downloadmp4?url=${link}`;
                  a.setAttribute('download', '');
                a.click();
            } else if(res.status == 400) {
                alert('Invalid url');
            }
        }

        async function YoutubeDownloadMp3(link) {
            const res = await fetch(`${serverURL}/youtube-downloadmp3?url=${link}`);
            if(res.status == 200) {
                var a = document.createElement('a');
                    a.href = `${serverURL}/youtube-downloadmp3?url=${link}`;
                    a.setAttribute('download', '');
                a.click();
            } else if(res.status == 400) {
                alert('Invalid url');
            }
        }


        // function to get the spotify mp3 file from server
        async function SpotifyDownloadMp3(link) {
            const res = await fetch(`${serverURL}/spotify-downloadmp3?url=${link}`);
            if(res.status == 200) {
                var a = document.createElement('a');
                    a.href = `${serverURL}/spotify-downloadmp3?url=${link}`;
                    a.setAttribute('download', '');
                a.click();
            } else if(res.status == 400) {
                alert('Invalid url');
            }
        }



        if(media === "Youtube4") {
            YoutubeDownloadMp4(link);
        } else if(media === "Youtube3") {
            YoutubeDownloadMp3(link);
        } else if(media === "Spotify") {
            SpotifyDownloadMp3(link);
            console.log("Spotify");
        } else if(media === "SoundCloud") {
            console.log("soundcloud");
        }
    }

    return ( 
        <div className="download">
            <div className="search-bar">
                <Welcome />
                <form onSubmit={handleDownload}>
                    <div className="inner-form">
                        <div className="input-field first-wrap">
                            <div className="input-select">
                                <select style={dropdownStyle} value={media} onChange={(e)=> handleMediaChange(e)}>
                                    <option value="">Select...</option>
                                    <option value='Youtube4'>Youtube-MP4</option>
                                    <option value='Youtube3'>Youtube-MP3</option>
                                    <option value='Spotify'>Spotify</option>
                                    <option value='SoundCloud'>SoundCloud</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-field second-wrap">
                            <input id="search" type="text" placeholder="Enter a Link...." required value={link} onChange={(e)=> setLink(e.target.value)} style={{
                                width: '400px',
                                height: '68px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                borderRadius: '5px',
                            }}/>
                        </div>
                        <div className="input-field third-wrap">
                            <button className="btn-search" type="submit" style={{
                                backgroundColor: btnColor,
                                height: '68px',
                                // curved button
                                borderRadius: '5px',
                            }} >Search</button>
                        </div>
                    </div>
                </form>
                <br />
                {/* {link && <Display link={link} media={media}/>} */}
            </div>
        </div>
     );
}
 
export default Download;