import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                message='yoo this is a message'
                timestamp='1601493943737'
                imgName='imgName'
                username='Frankie'
            />
            {/* {
                postsData.map(entry => (
                    <Post 
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user} 
                    />
                ))
            } */}
        </div>
    )
}

export default Feed
