import React from 'react'

export default function Contact(props) {
    return (
        <>
            <div className="container">
                <h4 className='my-3'>{props.heading}</h4>
                <ul class="list-group">
                    <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </>
    )
}
