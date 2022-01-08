import ExploreList from "./ExploreList";

const Explore = () => {
    return ( 
        <div className="explore">
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
                }}>Explore Whats Popular Right Now</h1>
            </div>
            <br />
            <ExploreList />
        </div>
     );
}
 
export default Explore;
