import React from 'react';

const VideoBlock = () => {
    return (
        <div className='media_block'>
            <div className='frame'>
                <iframe
                    width='400'
                    height='240'
                    src='https://www.youtube.com/embed/EYProajMbhc'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
            </div>
            <div className='frame'>
                <iframe
                    width='400'
                    height='240'
                    src='https://www.youtube.com/embed/adNSEoq000Q'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default VideoBlock;
