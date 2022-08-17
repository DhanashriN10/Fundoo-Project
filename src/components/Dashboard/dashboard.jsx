import { Drawer } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { getNotesList } from "../../services/dataService";
import Header from "../Header/header";
import Note_first from "../Note1/note1";
import Note_second from "../Note2/note2";
import Note_three from "../Note3/note3";
import Drawer1 from "../Drawer/drawer";


function DashBoard()
{
    const [toggle, setToggle] = useState(false)
    const [notesList, setNotesList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [currentNoteOption,setCurrentNoteOption] = useState('Notes')

   const listenToDrawer = (noteOptionListener) => {
    setCurrentNoteOption(noteOptionListener)
   }
   
    const listenToTakeNoteOne = () => {
        setToggle(true)
    }

    const getNote = () => {
        getNotesList().then((response) => {
            let filterNotes =[]
            if(currentNoteOption === 'Notes'){
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === false){
                        return notes
                    }
                })
            }
            else if(currentNoteOption === 'Archive'){
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === true && notes.isDeleted === false){
                        return notes
                    }
                })
            }
            else if(currentNoteOption === 'Trash'){
                filterNotes = response.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === true){
                        return notes
                    }
                })
            }
            console.log(response)
            // setNotesList(response.data.data.data)
            setNotesList(filterNotes)
        }).catch((error) => console.log(error))
    }

    const buttonclick = () => {
        setToggle(false)
    }

   

    const autoRefresh = () =>{
        getNote()
    }

    useEffect(() => {
        getNote()
    }, [currentNoteOption])
    console.log(notesList,'printed')

    const listenToHeader = () => {
        setDrawerToggle(!drawerToggle)
    }

    return(
        <div>

            <Header listenToHeader = {listenToHeader}/>
            <Drawer1 drawerToggle={drawerToggle} listenToDrawer={listenToDrawer}/>
            <div>
                
            {
                toggle ? <Note_second buttonclick = {buttonclick} autoRefresh={autoRefresh}/> : <Note_first listenToTakeNoteOne = {listenToTakeNoteOne} />
            }

            </div>
             <div style={{width: '70vw', height: 'auto', border: '1px solid white', margin: '100px',
                display:'flex',flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around',marginLeft:'300px'}}> 
                {
                    notesList.map((note) => (<Note_three note = {note} autoRefresh = {autoRefresh}/>))
                }

            </div>
            
        </div>

    )
}

export default DashBoard