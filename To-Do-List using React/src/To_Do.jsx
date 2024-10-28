import React, { useState } from 'react'
import './To_Do.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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


    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    let [pendings, setPendings] = useState([]);

    let [completed, setCompleted] = useState([]);

    let Submit_task = (data) => {

        if (data.task_title === "" || data.task_description === "") {
            Show_error();
            return
        }

        let fd = new FormData();
        let dt = new Date();
        dt = dt.toLocaleDateString();

        fd.append("task_date", dt);
        fd.append("task_title", data.task_title);
        fd.append("task_description", data.task_description);

        let Task = Object.fromEntries(fd);
        setPendings([Task, ...pendings]);

        localStorage.setItem("Task", JSON.stringify(pendings));


        setValue("task_title", "");
        setValue("task_description", "");

        Show_success();
    }

    let Show_success = () => {
        toast.success("Task Added Successfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    let Show_error = () => {
        toast.error("Please Enter Title and Description both", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    let Pdel_task = (id) => {
        let c = pendings.filter((v) => pendings.indexOf(v) != id);
        setPendings(c)
    }

    let Cmpdel_task = (id) => {
        let c = completed.filter((v) => completed.indexOf(v) != id);
        setCompleted(c)
    }

    let comp_task = (id) => {
        let a = pendings.filter((v) => pendings.indexOf(v) != id);
        (a.length > 0) ? setPendings(a) : setPendings([])

        let b = pendings.find((v) => pendings.indexOf(v) == id);
        setCompleted([b, ...completed])

    }



    let Add_New = () =>
        <div className='modal'>
            <button className='close_btn' onClick={switch_taskpanel}>X</button>


            <div className="input_area">
                <form onSubmit={handleSubmit(Submit_task)}>
                    <input type="text" placeholder='Enter Title' className='title_input'
                        {...register("task_title")} />


                    <textarea
                        type="message"
                        placeholder='Enter Description'
                        className='description_input'
                        draggable="true"
                        {...register("task_description")} />

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
                        <p className="task_date">{v.task_date}</p>
                        <p className="task_title">{v.task_title}</p>
                        <p className="task_description">{v.task_description}</p>
                    </div>

                    <div className="button_container">
                        <button className="completed_btn" onClick={() => comp_task(index)}>
                            <TiTick className='tick_icon' />
                        </button>
                        <button className="delete_btn" onClick={() => Pdel_task(index)}>
                            <MdDelete className='dlt_icon' />
                        </button>
                    </div>
                </div>
            ))
            }
        </div >



    let Completed_task = () =>
        <div className="completed_list">
            {completed.map((v, index) => (

                <div className="task_box" key={index}>
                    <div className="task_content">
                        <p className="task_date">{v.task_date}</p>
                        <p className="task_title">{v.task_title}</p>
                        <p className="task_description">{v.task_description}</p>
                    </div>

                    <div className="button_container">

                        <button className="delete_btn" onClick={() => Cmpdel_task(index)}>
                            <MdDelete className='dlt_icon' />
                        </button>
                    </div>
                </div>
            ))}
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
            <ToastContainer />
        </div>
    )
}

export default To_Do
