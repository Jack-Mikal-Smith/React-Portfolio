import React from 'react';

export default function ProjectCard() {
    return (
        <div className='w-75 p-3 m-3 align-items-center'>
            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Project #1</h2>
                <img className='card-img' src='https://placehold.co/600x400'></img>
                <p className='card-text'>Description of Project #1</p>
            </div>
            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Project #2</h2>
                <img className='card-img' src='https://placehold.co/600x400'></img>
                <p className='card-text'>Description of Project #2</p>
            </div>
            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Project #3</h2>
                <img className='card-img' src='https://placehold.co/600x400'></img>
                <p className='card-text'>Description of Project #3</p>
            </div>
            <div className='card border-info border-rounded border-3 m-3 p-3'>
                <h2 className='card-title'>Project #4</h2>
                <img className='card-img' src='https://placehold.co/600x400'></img>
                <p className='card-text'>Description of Project #4</p>
            </div>
        </div>
    );
}