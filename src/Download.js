import { useState } from "react";
import Display from "./Display";
import Welcome from "./Welcome";
import { start } from "./YoutubeDownload"; 


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
        if(e.target.value === "Youtube") {
            setBtnColor("red");
        } else if(e.target.value === "Spotify") {
            setBtnColor("green");
        } else if(e.target.value === "SoundCloud") {
            setBtnColor("blue");
        }
    }

    const handleDownload = (e) => {
        e.preventDefault();
        let serverURL = 'http://localhost:4000';
        console.log("get link");
        console.log("link:"+link);
        async function downloadMp4(link) {
            const res = await fetch(`${serverURL}/downloadmp4?url=${link}`);
            if(res.status == 200) {
                var a = document.createElement('a');
                  a.href = `${serverURL}/downloadmp4?url=${link}`;
                  a.setAttribute('download', '');
                a.click();
            } else if(res.status == 400) {
                alert('Invalid url');
            }
        }
        if(media === "Youtube") {
            downloadMp4(link);
        } else if(media === "Spotify") {
            console.log("spotify");
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
                                    <option value='Youtube'>Youtube</option>
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
                            }}/>
                        </div>
                        <div className="input-field third-wrap">
                            <button className="btn-search" type="submit" style={{
                                backgroundColor: btnColor,
                                height: '68px',
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