import "./page404.scss";
import error from "../../error/error.gif";
import {Link} from "react-router-dom";

function Page404 () {
    return (
        <div className="page404">
            <img src={error} alt="Страница не найдена" className="error404" />
            <p>Ошибка 404</p>
            <Link to="/">Вернуться на главную</Link>
        </div>
    )
}

export default Page404