const VideoBlock = () => {
    return (
        <div className='media_block'>
            <div className='frame'>
                <iframe
                    width='400'
                    height='240'
                    src='https://www.youtube.com/embed/EYProajMbhc'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen></iframe>
            </div>
            <div className='frame'>
                <iframe
                    width='400'
                    height='240'
                    src='https://www.youtube.com/embed/adNSEoq000Q'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen></iframe>
            </div>
            <div className='frame'>
                <iframe
                    width='400'
                    height='240'
                    src='https://www.youtube.com/embed/86R23o65cHA'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default VideoBlock;
