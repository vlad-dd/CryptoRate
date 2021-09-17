import React from 'react'

const VideoComponent = () => {
    let videoArray = ['https://www.youtube.com/embed/XWDPh0-5LOA', 'https://www.youtube.com/embed/BqCF8fSLhdI', 'https://www.youtube.com/embed/81_cwKVDbdk']

    let dataToShow = videoArray.map((video) => {
        return  <iframe className='iframe_block'src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    })
    return (
        <div>
            <div className='video_data'>
                {dataToShow}
               
                
               
            </div>
        </div>
    )
}

export default VideoComponent
