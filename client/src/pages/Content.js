
import React, { useState } from 'react';

import { ALL_NOTES } from '../utils/queries';
import { ADD_NOTE, DELETE_NOTE } from '../utils/mutations';
//import { LOGIN_USER } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import Notedisplay from '../components/Notedisplay';



//import "./App.css";



const Content = () => {
    const { loading, data } = useQuery(ALL_NOTES);
    const [addNote, { error }] = useMutation(ADD_NOTE);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [deleteNote, { error: deleteError }] = useMutation(DELETE_NOTE);



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

            {allNotes.map((note) => {
                return (
                    <Notedisplay note={note}/>
                )
            }
            )
            }

        </>

    );




};

export default Content;
