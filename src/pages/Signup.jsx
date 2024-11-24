import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()

    function handleUInput(evt) {
        seteusername(evt.target.value)
    }

    function handlePInput(evt) {
        setepassword(evt.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Signup here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input onChange={handleUInput} type="text" className="w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Username" />
                    <input onChange={handlePInput} type="text" className="w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Password" />
                    <input type="text" className="w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Confirm Password" />
                    <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">Signup</button>
                    <p>Already have account? <Link to={"/"} className="underline text-blue-600">Login</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Signup