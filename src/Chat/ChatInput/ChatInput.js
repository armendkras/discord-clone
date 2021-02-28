import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function ChatInput({input, channelId, channelName, sendMessage, setInput}) {
    return (
        <div>
            <div className="chat__input">
            <AddCircleIcon fontSize="large"/>
            <form>
                <input 
                value={input} 
                disabled={!channelId} 
                onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
                <button 
                disabled={!channelId} 
                className="chat__inputButton"
                 type="submit"
                 onClick={sendMessage}
                 >
                    Send Message
                </button>
            </form>
            <div className="chat__inputIcons">
                <CardGiftcardIcon fontSize="large"/>
                <GifIcon fontSize="large"/>
                <EmojiEmotionsIcon fontSize="large"/>
            </div>
            </div>
        </div>
    )
}

export default ChatInput
