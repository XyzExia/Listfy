import React, { useState } from 'react';
import { DELETE_NOTE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { isExecutableDefinitionNode } from 'graphql';



const Notedisplay = ({ note }) => {
    const [deleteNote, { error: deleteError }] = useMutation(DELETE_NOTE);
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div>

            <p>Notes

                Id: {note._id}
                <br />
                Title of Note: {isEditing ? (

                    <div className="control">
                        <input className="input" type="text" placeholder="Note Title"
                        //value={title}
                        //onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                ) : (
                    note.title
                )}

                <br />
                Content:

                {isEditing ? (

                    <div className="control">
                        <input className="input" type="text" placeholder="Note Title"
                        //value={title}
                        //onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                ) : (
                    note.content
                )}
                
            </p>



            <button
                onClick={() => setIsEditing(true)}>
                {isEditing ?(
                    <div
                    //isediting save/ edit
                    >
                        Save
                        
                    </div>
                ):(

                    <div>Edit</div>

                )}
            </button>
            <button
                onClick={async () => {
                    try {
                        // Execute mutation and pass in defined parameter data as variables
                        const { data } = await deleteNote({
                            variables: { id: note._id }, //title 
                        });

                        window.location.reload();
                    } catch (err) {
                        console.error(err);
                    }
                }}
            >
                Delete
            </button>




        </div>

    )

}

export default Notedisplay;
