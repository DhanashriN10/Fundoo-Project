import React, { useState } from "react";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
//import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Button from '@mui/material/Button';
import './note2.css'
import { InputBase } from "@mui/material";
import { postNote } from "../../services/dataService";
import ColorPopper from "../colorpopper/color";

function Note_second(props)
{
    const [userInput, setUserInput] = useState({title: '',description: '', color:'', isArchived:false})
    const closeTakeNoteTwo =() =>{
        props.buttonclick()
        console.log(userInput)
        postNote(userInput).then((response)=> {
            console.log(response)
            props.autoRefresh()
        }).catch((error) => console.log(error))
    }

    const takingTitle = (event) => {
        setUserInput(previousState => ({...previousState, title: event.target.value}))
    }

    const takingDescription = (event) => {
        setUserInput(previousState => ({...previousState,description: event.target.value}))
    }

    const listenToColorPopper= (colour) =>{
        setUserInput(previousState => ({...previousState, 
            color: colour
        }))
        console.log()

    }

     const archivedNote = () => {
         setUserInput(previousState => ({...previousState,
             isArchived:true
         }))
        console.log("Note Archived")
     }

    //  const deletedNote = () => {
    //     setUserInput(previousState => ({...previousState,
    //         isDeleted:true
    //     }))
    //    console.log("Note Deleted")
        
    //  }
    return(
        <div className="main_note2" style={{backgroundColor: userInput.color}}>
            <div className="block">
                {/* <p id="p" onChange={takingTitle}>Title</p> */}
                <InputBase id="p" placeholder="Title" onChange={takingTitle} />
            </div>
            <div className="block">
                {/* <p id="p1" onChange={takingDescription}>Take a note</p> */}
                <InputBase id="p" placeholder="Take a note" onChange={takingDescription} />
            </div>
            <div className="block">
                <div className="icons">
                    <AddAlertOutlinedIcon />
                </div>
                <div className="icons">
                    {/* <PersonAddAltIcon /> */}
                    <DeleteOutlineIcon />
                </div>
                <div className="icons">
                    {/* <ColorLensOutlinedIcon /> */}
                    <ColorPopper listenToColorPopper= {listenToColorPopper} action="create"/>
                </div>
                <div className="icons">
                    <ImageOutlinedIcon />
                </div>
                <div className="icons">
                    <ArchiveOutlinedIcon onClick={archivedNote}/>
                </div>
                <div className="icons">
                    <MoreVertOutlinedIcon />
                </div>
                <div className="icons">
                    <UndoOutlinedIcon />
                </div>
                <div className="icons">
                    <RedoOutlinedIcon />
                </div>
                <div className="blank3">

                </div>
                <div className="button">
                   <Button variant="text" onClick={closeTakeNoteTwo}>Close</Button>
                </div>


            </div>

        </div>
    )
}

export default Note_second