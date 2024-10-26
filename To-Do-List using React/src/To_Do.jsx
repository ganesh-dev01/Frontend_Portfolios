import React, { useState } from 'react'
import './To_Do.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useForm } from 'react-hook-form';

function To_Do() {

    // switch and control --------------------------------------------------

    let [add_box, setAdd_Box] = useState(false);
    let [pending_box, setPending_Box] = useState(true);

    let switch_taskpanel = () => {
        (add_box ? setAdd_Box(false) : setAdd_Box(true))
    }

    let switch_pendingpanel = () => {
        setPending_Box(true)
    }

    let switch_completedpanel = () => {
        setPending_Box(false)
    }
    //-------------------------------------------------------------------------


    const { register, handleSubmit } = useForm();

    let [pendings, setPendings] = useState([]);

    let [completed, setCompleted] = useState([]);

    let Submit_task = (data) => {
        let fd = new FormData();
        fd.append("task_title", data.task_title);
        fd.append("task_description", data.task_description);

        let Task = Object.fromEntries(fd)
        setPendings([Task, ...pendings])

    }

    let Add_New = () =>
        <div className='modal'>
            <button className='close_btn' onClick={switch_taskpanel}>X</button>


            <div className="input_area">
                <form onSubmit={handleSubmit(Submit_task)}>
                    <input type="text" placeholder='Enter Title' className='title_input'
                        {...register("task_title", { required: true })} />
                    <textarea
                        type="message"
                        placeholder='Enter Description'
                        className='description_input'
                        draggable="true"
                        rows="3"
                        {...register("task_description", { required: true })}
                    />
                    <div className="btn_area">
                        <button className='submit_btn' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>


    let Pending_task = () =>

        <div className="pending_list">
            {pendings.map((v, index) => (

                <div className="task_box" key={index}>
                    <div className="task_content">
                        <p className="task_date">25-10-2024</p>
                        <p className="task_title">{v.task_title}</p>
                        <p className="task_description">{v.task_description}</p>
                    </div>

                    <div className="button_container">
                        <button className="completed_btn">
                            <TiTick className='tick_icon' />
                        </button>
                        <button className="delete_btn">
                            <MdDelete className='dlt_icon' />
                        </button>
                    </div>
                </div>
            ))}
        </div>



    let Completed_task = () =>
        <div className="completed_list">
            <div className="task_box">
                <div className="task_content">
                    <p className="task_date">25-10-2024</p>
                    <p className="task_title">playing chess</p>
                    <p className="task_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quam temporibus corrupti tempora reiciendis rem optio beatae, accusantium tempore ullam!</p>
                </div>

                <div className="button_container">
                    <button className="completed_btn"><TiTick className='tick_icon' /></button>
                    <button className="delete_btn"><MdDelete className='dlt_icon' /></button>
                </div>
            </div>
        </div>




    return (
        <div>
            <div className="container">
                <div className="head">
                    <h4>To-Do-List</h4>
                </div>


                {add_box && <Add_New />}

                <div className="Nav_bar">
                    <button className='pending_btn' onClick={switch_pendingpanel}>
                        Pending
                        <span className='pending_count' >{pendings.length}</span>
                    </button>
                    <button className='completed_btn' onClick={switch_completedpanel}>Completed</button>
                    <div className='add_btn_area'>
                        <button className='add_btn' onClick={switch_taskpanel}>
                            <IoIosAddCircleOutline className='add_icon' />
                            Add New
                        </button>
                    </div>
                </div>

                <div className="list_area">

                    {pending_box && <Pending_task />}

                    {!pending_box && <Completed_task />}
                </div>


            </div>
        </div>
    )
}

export default To_Do
