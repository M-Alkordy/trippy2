export default function ChangeCount(props) {
  return (
    <div>
        <button onClick={()=>{props.count(prev => prev+1)}}>click</button>
    </div>
  )
}
