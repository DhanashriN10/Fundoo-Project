import React from "react";

import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import './header.css'


function Header(props)
{
    const openMenu = () => {
        props.listenToHeader()
    }
    return (
        <div className="main_header">
            <div className="part101">
                <div className="list">
                    <MenuIcon onClick={openMenu}/>
                </div>
                <div className="logo">
                    <img id="img" src="../../Assets/keep_logo.png"/>
                    <span id="sp10">Keep</span>

                </div>
                <div className="blank"></div>
                <div className="search_field">
                    <SearchIcon id="search_icon"/>
                  <input id="txt" placeholder="Search" name="Search"/>
                </div>
            </div>
            <div className="part102">
                <div className="blank1"></div>
                <div className="symbols">
                    <div className="s1">
                        <RefreshIcon></RefreshIcon>
                    </div>
                    <div className="s1">
                        <ViewStreamSharpIcon />
                    </div>
                    <div className="s1">
                        <SettingsIcon />
                    </div>
                    <div className="blank2">

                    </div>
                    <div className="s1">
                        <AppsIcon />
                    </div>
                    <div>
                    <img id="im" src="../../Assets/gmail1.jpg"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header;
