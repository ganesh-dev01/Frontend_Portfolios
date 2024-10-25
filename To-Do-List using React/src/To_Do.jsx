import React from 'react'
import './To_Do.css'
import { IoIosAddCircleOutline } from "react-icons/io";
function To_Do() {
    return (
        <div>
            <div className="container">
                <div className="head">
                    <h4>To-Do-List</h4>
                </div>



                <div className="input_area">
                    <input type="text" placeholder='Enter Title' className='title_input' />
                    <textarea
                        type="message"
                        placeholder='Enter Description'
                        className='description_input'
                        draggable="true"
                        rows="3"
                    />


                    <div className="btn_area">
                        <button className='submit_btn'>Submit</button>
                    </div>
                </div>

                <div className="Nav_bar">
                    <button className='pending_btn'>Pending</button>
                    <button className='completed_btn'>Completed</button>
                    <div className='add_btn_area'>
                    <button className='add_btn'> <IoIosAddCircleOutline  className='add_icon'/>Add New</button>
                </div>
                </div>

                {/* <div className="list_area">

                    <div className="pending_list">

                        <div className='task_box'>
                            <p className='task_date'>Date</p>
                            <p className='task_title'>Title</p>
                            <p className='task_description'>Description</p>
                            <button className='completed_btn'>Completed</button>
                            <button className='delete_btn'>Delete</button>
                        </div>

                    </div>

                    <div className="completed_list">

                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default To_Do
