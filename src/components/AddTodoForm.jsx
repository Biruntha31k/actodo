import { useState } from "react"

function AddTodoForm(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity, setNewactivity] = useState("")

    function handleChange(evt) {
        setNewactivity(evt.target.value)
    }

    function addActivity() {
        setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newactivity }])
        setNewactivity("")
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">Manage Activities</h1>

            <div>
                <input value={newactivity} className="border border-black bg-transparent p-1" onChange={handleChange} placeholder="Next Activity" type="text" />
                <button onClick={addActivity} className="bg-black text-white p-1 border border-black" >Add</button>
            </div>

        </div>
    )
}

export default AddTodoForm