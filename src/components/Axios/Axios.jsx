import './Axios.css'
import axios from "axios";
import { useEffect, useRef, useState } from "react";
const Test = () => {
    const [data, setdata] = useState([]);
    const [SelectTitle, setSelectTitle] = useState("");
    const [SelectId, setSelectId] = useState(0);
    useEffect(() => {
        FetchData()
    }, []);
    useEffect(() => {
        UpdateData(SelectId)
    }, [SelectTitle]);
    async function FetchData() {
        await axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            });
    }
    function updateTitle(id) {
        console.log(id)
        let test = data.filter(element => { return element.id == id })
        setSelectTitle(test)
        setSelectId(id)
        console.log("done")
    }
    async function UpdateData(event) {
        event.preventDefault()
        await axios.put("https://jsonplaceholder.typicode.com/todos/" + SelectId, {
            title: SelectTitle,
        })
            .then(res => {
                console.log(res.data);
                const input = useRef()
                input.current.value=""
            });
        FetchData()
    }
    return (
        <div>
            <input type="text" placeholder='update here' value={SelectTitle[0]?.title} ref={input} onChange={(e) => {
                setSelectTitle(e.target.value);
            }} />
            <input type="submit" value="update" />
            <div>
                {data?.map((e, i) => {
                    return (<div key={i} className="card">
                        <h1>{e?.title}</h1>
                        <button onClick={() => updateTitle(e.id)}>update</button>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Test