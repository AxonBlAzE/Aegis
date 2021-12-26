import { useState } from "react";
import Welcome from "./Welcome";

const Download = () => {

    const [btnColor, setBtnColor] = useState("#e27a19");
    const [media, setMedia] = useState('');
    
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
        
    return ( 
        <div className="download">
            <div className="search-bar">
                <Welcome />
                <form>
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
                        <input id="search" type="text" placeholder="Enter a Link...." style={{
                            width: '400px',
                            height: '68px',
                            backgroundColor: 'transparent',
                            color: 'white',
                        }}/>
                    </div>
                    <div className="input-field third-wrap">
                        <button className="btn-search" type="button" style={{
                            backgroundColor: btnColor,
                            height: '68px',
                        }}>Search</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Download;