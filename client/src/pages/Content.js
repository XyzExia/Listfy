
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

            <div class="d-flex justify-content-center mt-5">
                <div class="col">
                    <div class="row ">

                        <div class="card ">
                            <div class="">
                                <form class="card-body" onSubmit={handleFormSubmit}>

                                    <div class="col d-flex flex-row justify-content-center mt-1">
                                        <div class="d-flex flex-column">

                                            <div class="p-2">
                                                <h4>
                                                Title
                                                </h4>
                                                <div>
                                                    <div class="">
                                                        <input type="text" placeholder="Note Title"
                                                            value={title}
                                                            onChange={(event) => setTitle(event.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="p-2">
                                                <h4>
                                                Content
                                                </h4>
                                                <div>
                                                    <div class="">
                                                        <input type="text" placeholder="Note Title"
                                                            value={content}
                                                            onChange={(event) => setContent(event.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="p-2">
                                                <div class="">
                                                    <button class="btn btn-primary">Submit</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* form */}
            {/* 2 input btn content title*/}
            {/* save btn Submit mutation */}
            {/*  */}

            {allNotes.map((note) => {
                return (
                    <div class="d-flex justify-content-center mt-2">

                    <Notedisplay note={note} />
                    </div>
                )
            }
            )
            }

        </>

    );




};

export default Content;
