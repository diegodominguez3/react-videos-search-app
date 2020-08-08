import React from 'react'; 

const VideoDetail = ({video, autoplay}) => {
    if(!video) {
        return (
            <div class="ui">
                <div class="ui active inverted dimmer">
                    <div class="ui text loader">Loading</div>
                </div>
            </div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=${autoplay}`; 
    return (
    <div className="ui segment">
        <div className="ui embed">
        <iframe title={video.snippet.title} src={videoSrc}/>
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
    </div>
    );
}

export default VideoDetail; 