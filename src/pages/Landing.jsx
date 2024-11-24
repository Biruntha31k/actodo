import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">

                {/*Header*/}
                <Header name={data.state.user} />

                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={23} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"November 22"} subtitle={"14:20:13"} />
                    <Card bgcolor={"#FDA201"} title={"Built Using"} subtitle={"React"} />
                </div>

                {/*Todo Container*/}
                <TodoContainer />

            </div>
        </div>
    )
}

export default Landing