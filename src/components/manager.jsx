import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef();
    const passref = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passarray, setpassarray] = useState([])

    const openSite = (url) => {
        if (!url.startsWith("http")) {
            url = "https://" + url;
        }
        window.open(url, "_blank");
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.info('copied to Clipboard', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
                    .catch((err) => {
                        console.error("Failed to copy:", err);
                    });


            });
    };


    useEffect(() => {
        const passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpassarray(JSON.parse(passwords))
        }
    }, [])

    const showpassword = () => {
        passref.current.type = "text"
        if (ref.current.src.includes("/eye-icon-1472.png")) {
            ref.current.src = "/eye_cross.png"
            passref.current.type = "password"
        }
        else {
            ref.current.src = "/eye-icon-1472.png"
            passref.current.type = "text"
        }
    }

    const savepass = () => {
        if (!form.site || !form.username || !form.password) return;

        const newEntry = {
            id: uuidv4(),
            ...form,
        };

        const updated = [...passarray, newEntry];
        setpassarray(updated);
        localStorage.setItem("passwords", JSON.stringify(updated));
        setform({
            site: "",
            username: "",
            password: "",
        });
    };

    const deletepass = (id) => {
        const updated = passarray.filter(item => item.id !== id);
        setpassarray(updated);
        localStorage.setItem("passwords", JSON.stringify(updated));
        toast.success("Password deleted");
    };



    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (

        <div className='flex justify-center md:mycontainer'>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
                </div>
            </div>

            <div className="flex flex-col items-center mt-7 mb-10">
                <div className="logo font-bold text-4xl flex items-center pb-1">
                    <span>P@ss</span>
                    <span className="text-purple-800">Fil~</span>
                </div>
                <div className="text-2xl font-medium text-gray-700 mb-6">
                    Your own secure password manager
                </div>
            </div>


            <div className="container absolute mx-auto mt-20 p-10 max-w-4xl flex justify-center ">
                <div className="flex flex-col p-6 w-full max-w-2xl space-y-5 ">

                    <input
                        name="site"
                        onChange={handlechange}
                        value={form.site}
                        className="border w-full p-3 rounded-3xl bg-purple-100 text-purple-400 placeholder:text-gray-600
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
               transition"
                        type="text"
                        placeholder="Enter Webite"
                    />

                    <input
                        name="username"
                        onChange={handlechange}
                        value={form.username}
                        className="border w-full p-3 rounded-3xl  text-purple-400 placeholder:text-gray-600
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                        transition"
                        type="text"
                        placeholder="Enter Username"
                    />

                    <input
                        ref={passref}
                        name="password"
                        onChange={handlechange}
                        value={form.password}
                        className="border w-full p-3 rounded-3xl  text-purple-400 placeholder:text-gray-600
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                        transition
                        mb-0"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <span className='w-10 relative bottom-11 left-140 ' onClick={showpassword}><img ref={ref} src="/eye_cross.png" alt="" /></span>




                    <button onClick={savepass} className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-xl max-w-xs mx-auto mt-0 flex items-center justify-center gap-2">
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{ width: "24px", height: "24px" }}
                        ></lord-icon>
                        <span>Add Password</span>
                    </button>

                </div>
            </div>

            <div className="flex absolute top-132 w-full justify-center">
                <div className="max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-200">

                    {passarray.length === 0 && (
                        <div className="text-gray-500 text-lg text-center">
                            No passwords saved yet.
                        </div>
                    )}

                    {passarray.length !== 0 && (
                        <table className="table-auto  overflow-hidden rounded-xl">
                            <thead className="bg-purple-800 text-white text-lg sticky top-0">
                                <tr>
                                    <th>Site</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody className="bg-purple-100">
                                {passarray.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-center min-w-75 pt-2">
                                            <div className="flex items-center justify-center gap-2">
                                                {item.site}
                                                <img className="w-5 cursor-pointer"
                                                    onClick={() => openSite(item.site)} src="/maximize.png" alt="" />
                                            </div>
                                        </td>

                                        <td className="text-center min-w-75 pt-2">
                                            <div className="flex items-center justify-center gap-2">
                                                {item.username}
                                                <img className="w-5 cursor-pointer"
                                                    onClick={() => copyText(item.username)}
                                                    src="copy-link-icon.png" alt="" />
                                            </div>
                                        </td>

                                        <td className="text-center min-w-75 pt-2">
                                            <div className="flex items-center justify-center gap-2 font-mono tracking-widest">
                                                {"•".repeat(item.password.length)}
                                                <img className="w-5 cursor-pointer"
                                                    onClick={() => copyText(item.password)}
                                                    src="copy-link-icon.png" alt="" />
                                            </div>
                                        </td>

                                        <td className="text-center min-w-75 pt-2">
                                            <div className="flex items-center justify-center gap-2 font-mono tracking-widest">
                                                <img className="w-5 cursor-pointer" 
                                                onClick={()=> deletepass(item.id)}
                                                src="delete.png" alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                </div>
            </div>



            <ToastContainer
                position="top-right"
                autoClose={5000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"

            />
        </div>
    )
}

export default Manager
