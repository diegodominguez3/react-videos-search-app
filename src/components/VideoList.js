import React from 'react'; 
import VideoItem from './VideoItem'; 

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return (
        <VideoItem
            key={video.id.videoId} 
            video={video}
            onVideoSelect = {onVideoSelect}
         />
         ); 
    });

    return (
    <div className="ui segment relaxed divided list" style={{padding: '10px'}}>
        {renderedList}
    </div>
    );
}

export default VideoList; 