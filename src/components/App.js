import React from 'react'; 
import youtube from '../apis/youtube'; 
import Searchbar from './Searchbar';
import VideoList from './VideoList'; 
import VideoDetail from './VideoDetail';  

const KEY = process.env.REACT_APP_API_KEY; 

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        autoplay: 0
    }
    
    componentDidMount () {
        this.onTermSubmit('Paramore'); 
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            type: 'video', 
            maxResults: 5,
            key: KEY
          }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],  
            autoplay: 0}); 
      };

      onVideoSelect = (video) => {
          this.setState({selectedVideo: video, autoplay: 1}); 
      }

    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <Searchbar onFormSubmit= {this.onTermSubmit}/>
                <div className="ui stackable two column grid">
                    <div className="eleven wide computer sixteen wide tablet column">
                        <VideoDetail video={this.state.selectedVideo} autoplay={this.state.autoplay}/>
                    </div>
                    <div className="five wide computer sixteen wide tablet column">
                        <VideoList 
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App; 