import React, { useState } from 'react';
import { DELETE_NOTE, UPDATE_NOTE } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { isExecutableDefinitionNode } from 'graphql';
import { GET_NOTE } from '../utils/queries';



const Notedisplay = ({ note }) => {
    const [deleteNote, { error: deleteError }] = useMutation(DELETE_NOTE);
    const [updateNote, { error: UpdateError }] = useMutation(UPDATE_NOTE)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isEditing, setIsEditing] = useState(false)

    const { loading, data } = useQuery(GET_NOTE);



    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
        try {
            // Execute mutation and pass in defined parameter data as variables
            console.log("working")
            const { data } = await updateNote({
                variables: { id: note._id, input: { title, content } }, //title 
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };




    return (
        <div>
            <form

                onSubmit={handleFormSubmit}

            >
                <p>Notes

                    Id: {note._id}
                    <br />
                    Title of Note: {isEditing ? (


                        <div className="control">
                            <input className="input" type="text" placeholder="Note Title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}


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
                            <input className="input" type="text" placeholder="Note Content"
                                //value={title}
                                //onChange={(event) => setTitle(event.target.value)}
                                value={content}
                                onChange={(event) => setContent(event.target.value)}


                            />
                        </div>


                    ) : (
                        note.content
                    )}

                </p>



                <button>
                    {isEditing ? (
                        <div 
                            onClick={handleFormSubmit}
                        //isediting save/ edit
                        >
                            Submit
                        </div>
                    ) : (

                        <div
                            onClick={(event) => {
                                event.preventDefault();
                                setIsEditing(true);
                            }}

                        >Edit</div>

                    )}
                </button>
            </form>



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
