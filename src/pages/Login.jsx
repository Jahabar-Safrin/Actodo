import { Link } from 'react-router-dom';
import { useState }  from 'react'
import { useNavigate } from 'react-router-dom';


function Login(props)
{
    const navigate = useNavigate()
    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()
    const [ruser,setRuser] = useState(true)

    const users=props.users

    function handleUInput(evt){
        setEusername(evt.target.value)
    }

    function handlePInput(evt){
        setEpassword(evt.target.value)
    }

    function checkUser(){

        var userfound = false

        users.forEach(function(item)
    {
        if(item.UserName === eusername && item.Password === epassword)
        {
            console.log("Login Successfull")
            userfound = true
            navigate("/Landing",{state:{user:eusername}})
        }
       
    })

        if(userfound === false)
        {
            console.log("login Failed")
            setRuser(false)
        }

    }

    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hii!</h1>
                {ruser? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before you Login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input 
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="UserName"
                        onChange={handleUInput}>
                    </input>

                    <input 
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePInput}>
                    </input>

                    <button onClick={checkUser} className="bg-[#B272DA] w-24 p-1 rounded-md">Login</button>

                    <p>Don't have an Account? <Link to={"/Signup"} className='underline'>Sign Up</Link></p>

                </div>
            
            </div>
        </div>
    )
}

export default Login