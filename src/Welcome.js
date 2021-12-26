const Welcome = () => {
    return ( 
        <div className="welcome" style={{
            width: '764px',
            height: '100%',
            backgroundColor: 'transparent',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            marginTop: '20px',
            marginBottom: '20px',
        }}>
            <h1 style={{
                alignSelf: 'center',
            }}>Welcome to Aegis</h1>
            <p style={{
                color: '#e6e6e6',
            }}>Aegis is a web application that allows you to download and explore audio from Youtube,Spotify and SoundCloud.</p>
        </div>
     );
}
 
export default Welcome;