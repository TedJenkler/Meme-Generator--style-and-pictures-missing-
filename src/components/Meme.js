import React from "react";
import memesData from "../memeData"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setMemeImages] = React.useState(memesData)

   function handleClick() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })) 
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
            <main>
                <div className="form">
                    <input type="text" className="form--input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange} />
                    <input type="text" className="form--input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                    <button className="form--button" onClick={handleClick} >Get a new meme imgage</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} alt="meme is going here" className="meme--image" />
                    <h2 className="meme--text--top">{meme.topText}</h2>
                    <h2 className="meme--text-bottom">{meme.bottomText}</h2>
                </div>
            </main>
        )
    }