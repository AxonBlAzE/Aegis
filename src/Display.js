const Display = (props) => {

    const link = props.link;
    const media = props.media;

    if(media === "Youtube") {
    return ( 
        <div className="display">
            {/* card to display youtube video  with a download button*/}
            <div className="card">
                <div
                    className="video"
                    style={{
                        position: "relative",
                        paddingBottom: "56.25%" /* 16:9 */,
                        paddingTop: 25,
                        height: 0
                    }}>
                    <iframe style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                        }} src={link} frameBorder="0"/>
                </div>
            </div>
        </div>
     );
    } else if(media === "Spotify") {
        return ( 
            <div className="display">
                {/* card to display spotify track with a download button*/}
                <div className="card">
                    <iframe src={link} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
         );
    } else if(media === "SoundCloud") {
        return ( 
            <div className="display">
                {/* card to display soundcloud track with a download button*/}
                <div className="card">
                    <iframe width="300" height="380" scrolling="no" frameborder="no" allow="autoplay" src={link}></iframe>
                </div>
            </div>
         );
    }
}
 
export default Display;
