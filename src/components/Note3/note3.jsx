import React from "react";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './note3.css'
import ColorPopper from "../colorpopper/color";
import { archiveNotes } from "../../services/dataService";
import { trashNotes } from "../../services/dataService";

function Note_three(props)
{

    const listenToColorUpdate=()=>{
         props.autoRefresh()
    }
    console.log(props,'props printed')

    const updateArchive = (id) => {
        let archiveObj = {noteIdList: [id], isArchived: true}
        archiveNotes(archiveObj).then((response) => {
            console.log(response)
             props.autoRefresh()
        }).catch((error) => console.log(error))
    }

    const updateDelete = (id) => {
        let deleteObj = {noteIdList: [id], isDeleted: true}
        trashNotes(deleteObj).then((response) => {
            console.log(response)
             props.autoRefresh()
        }).catch((error) => console.log(error))
    }
    return(
        <div className="main_note3" style={{backgroundColor:props.note.color}}>
            <div className="box">
                <div className="col1">
                    <p id="p1">{props.note.title}</p>
                </div>
                <div className="col2">
                      <PushPinOutlinedIcon />
                </div>
            </div>

            <div className="box">
                <p id="p1">{props.note.description}</p>
            </div>

            <div className="box">
                <div className="picture">
                    <AddAlertOutlinedIcon />
                </div>
                <div className="picture">
                    {/* <PersonAddAltIcon /> */}
                    <DeleteOutlineIcon onClick={() => updateDelete(props.note.id)}/>
                </div>
                <div className="picture">
                    {/* <ColorLensOutlinedIcon /> */}
                    <ColorPopper id={props.note.id} action="update" listenToColorUpdate={listenToColorUpdate} autoRefresh={props.autoRefresh}/>
                </div>
                <div className="picture">
                    <ImageOutlinedIcon />
                </div>
                <div className="picture">
                    <ArchiveOutlinedIcon onClick={() => updateArchive(props.note.id)}/>
                </div>
                <div className="picture">
                    <MoreVertOutlinedIcon />
                </div>


            </div>
            

        </div>
    )
}

export default Note_three