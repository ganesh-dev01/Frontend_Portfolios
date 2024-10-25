import React from 'react'
import './To_Do.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
function To_Do() {
    return (
        <div>
            <div className="container">
                <div className="head">
                    <h4>To-Do-List</h4>
                </div>


                {/* <div className='modal'>
                    <button className='close_btn'>X</button>

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
                </div> */}

                <div className="Nav_bar">
                    <button className='pending_btn'>
                        Pending
                        <span className='pending_count'>10</span>
                    </button>
                    <button className='completed_btn'>Completed</button>
                    <div className='add_btn_area'>
                        <button className='add_btn'> <IoIosAddCircleOutline className='add_icon' />Add New</button>
                    </div>
                </div>

                <div className="list_area">

                    <div className="pending_list">


                        <div className="task_box">
                            <div className="task_content">
                                <p className="task_date">25-10-2024</p>
                                <p className="task_title">Playing games</p>
                                <p className="task_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quam temporibus corrupti tempora reiciendis rem optio beatae, accusantium tempore ullam!</p>
                            </div>

                            <div className="button_container">
                                <button className="completed_btn"><TiTick className='tick_icon' /></button>
                                <button className="delete_btn"><MdDelete className='dlt_icon' /></button>
                            </div>
                        </div>



                    </div>

                    {/* <div className="completed_list">
                    </div> */}
                </div>


            </div>
        </div>
    )
}

export default To_Do
