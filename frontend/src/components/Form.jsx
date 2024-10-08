import {useState} from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../contants"
import "../styles/form.css"


const Form = ({route, method}) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method == 'login' ? "Zaloguj się" : "Zarejestruj się"

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        
        try {
            const response = await api.post(route, {username, password})
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, response.data.access)
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh)
                navigate("/")

            } else {
                navigate("/login")
            }

        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }

    }

    return <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input 
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)} 
            placeholder="Nazwa użytkownika"
        />
        <input 
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Hasło"
        />

        <button className="form-button" type="submit">
            {name}
        </button>

    </form>

}


export default Form