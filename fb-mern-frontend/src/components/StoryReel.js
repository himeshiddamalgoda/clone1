import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story 
                image='https://i.pinimg.com/564x/b8/03/78/b80378993da7282e58b35bdd3adbce89.jpg'
                profileSrc='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                title='Himesh Thanushka'
            />
            <Story 
                image='https://data.whicdn.com/images/322027365/original.jpg?t=1541703413'
                profileSrc='https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg'
                title='Ruwan Chanaka'
            />
            <Story 
                image='https://wallpaperaccess.com/full/2213424.jpg'
                profileSrc='https://1.bp.blogspot.com/-NiNaLUVIuaE/XdP7uYpCD_I/AAAAAAAAbu8/j1n9UFpof_QqchUqFqJO2ZNcu6wRToLpwCLcBGAsYHQ/s16000-rw/24%2BHearts%2BDP%2BProfile%2BPictures%2Bcollection%2B2019%2B-facebookdp%2B%252817%2529.jpg'
                title='Sandun Nayana'
            />
        </div>
    )
}

export default StoryReel
