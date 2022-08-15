
import React, { useState } from 'react';

import { ALL_NOTES } from '../utils/queries';
import { ADD_NOTE } from '../utils/mutations';
//import { LOGIN_USER } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';


//import AllNotes from "../functions/AllNotes";
//import NewNote from "../functions/NewNote";
//import EditNote from "../functions/EditNote";
//import "./App.css";



const Content = () => {
    const { loading, data } = useQuery(ALL_NOTES);
    const [addNote, { error }] = useMutation(ADD_NOTE);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
        try {
            // Execute mutation and pass in defined parameter data as variables
            const { data } = await addNote({
                variables: { title, content }, //title 
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return (
            <>
                Loading...
            </>
        )
    }

    const allNotes = data?.allNotes || []

    return (
        <>
            {allNotes.map((note) => {
                return (
                    <div>
                        <p>Profile Page
                            Id: {note._id}
                            <br />
                            Title of Note: {note.title}
                            <br />
                            Content: {note.content}
                        </p>
                    </div>
                )
            }

            )
            }
            <div className="container m-t-20">

                <div className="newnote-page m-t-20">
                    <form
                        onSubmit={handleFormSubmit}
                    >
                        <div className="field">
                            <label className="label">Note Title</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Note Title"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Note Content</label>
                            <div class="control">
                                <textarea class="textarea" rows="10" placeholder="Note Content here..."
                                    value={content}
                                    onChange={(event) => setContent(event.target.value)}
                                >
                                </textarea>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button class="button is-link">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            {/* form */}
            {/* 2 input btn content title*/}
            {/* save btn Submit mutation */}
            {/*  */}

        </>

    );




};

export default Content;
