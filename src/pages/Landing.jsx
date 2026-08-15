import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/todocontainer";
import { useLocation } from "react-router-dom"

function Landing() 
{
    const data = useLocation()

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md gap-7 my-5 flex-wrap">
                {/*Header*/}
                <Header username={data.state.user} />
                {/*Card*/}
                <div className="flex justify-between flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"August"} subtitle={"14:23:08"} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                </div>
                {/*TodoList*/}
                <Todocontainer />
            </div>
        </div>
    );
}

export default Landing