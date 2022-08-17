import React from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import './note1.css';

function Note_first(props)
{
    const openTakeNoteTwo = () =>{
            props.listenToTakeNoteOne()
    }
    return(
       
        <div onClick={openTakeNoteTwo}>
        <div className="main_note1">
            <div className="take">
                <p id="p">Take a note....</p>
            </div>
            <div className="btn">
                <div className="pic">
                    <CheckBoxOutlinedIcon />
                </div>
                <div className="pic">
                    <BrushOutlinedIcon />
                </div>
                <div className="pic">
                    <ImageOutlinedIcon />
                </div>

            </div>

        </div>
        </div>
    )
}

export default Note_first