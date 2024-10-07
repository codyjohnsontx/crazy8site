import { Link } from 'react-router-dom';
import '../App.css'; //  import the CSS file

const ImagePage = () => {
    return (
        <div className="title-container">
            <Link to="/home">
                <img
                    src="/assets/crazy8logo.jpeg" // current image path
                    alt="Click to enter"
                    className="title-img" // Apply the class for styling
                />
            </Link>
        </div>
    );
};

export default ImagePage;
