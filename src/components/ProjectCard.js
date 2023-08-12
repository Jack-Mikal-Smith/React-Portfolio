import React from 'react';
import { fullstackConnectImg, noteTakerImg, techBlogImg, textEditorImg } from '../screenshots';

export default function ProjectCard() {
    return (
        <div className='w-75 p-3 m-3 align-items-center'>
            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Fullstack Connect</h2>
                <img className='card-img' src={fullstackConnectImg}></img>
                <p className='card-text'>Blog site for Fullstack Development Bootcamp alum to post updates, job opportunities and project ideas.</p>
                <a href='https://fullstack-connect.herokuapp.com/' className='btn btn-outline-info stretched-link'></a>
            </div>

            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Note Taker</h2>
                <img className='card-img' src={noteTakerImg}></img>
                <p className='card-text'>Application that saves user notes in local storage to be referenced at a later time.</p>
                <a href='https://sheltered-basin-84759.herokuapp.com/' className='btn btn-outline-info stretched-link'></a>
            </div>

            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Blog Site</h2>
                <img className='card-img' src={techBlogImg}></img>
                <p className='card-text'>Blog site that allows users to create accounts, post updates, and comment on other users posts.</p>
                <a href='https://tech-blog-jack-smith-cb8d889e8b7e.herokuapp.com/' className='btn btn-outline-info stretched-link'></a>
            </div>
            
            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Text Editor</h2>
                <img className='card-img' src={textEditorImg}></img>
                <p className='card-text'>Progressive Web Application that saves user inputs in a markdown format. Great for saving lines of code.</p>
                <a href='https://fatidique-moliere-27194-a5f852bdf5d6.herokuapp.com/' className='btn btn-outline-info stretched-link'></a>
            </div>
        </div>
    );
}