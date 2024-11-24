import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const users = props.users
    const navigate = useNavigate()

    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)



    function handleUInput(evt) {
        seteusername(evt.target.value)
    }

    function handlePInput(evt) {
        setepassword(evt.target.value)
    }

    function checkUser() {

        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login Successful")
                userfound = true
                navigate("/Landing",{state:{user:eusername}})
            }
        })

        if (userfound === false) {
            console.log("Login Failed")
            setruser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Signup before you Login :)</p>}


                <div className="flex flex-col gap-2 my-2">
                    <input onChange={handleUInput} type="text" className="w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Username" />
                    <input onChange={handlePInput} type="text" className="w-52 border border-black p-1 bg-transparent rounded-md" placeholder="Password" />
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/Signup"} className="underline text-blue-600">Signup</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Login