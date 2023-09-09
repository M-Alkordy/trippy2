import { useContext } from "react";
import { UserName } from "../../App";

export default function Child() {
  const name = useContext(UserName);
  return (
    <div><h1>{name}</h1></div>
  )
}
