import { Link } from 'react-router-dom';
import './ImagePage.css';
//             //  
// TITLE PAGE //
//           //

const ImagePage = () => {
    return (
        <div className="title-container">
            <Link to="/home" className="image-link">
                <img
                    src="/assets/crazy8logo.jpeg" // current image path
                    alt="Click to enter"
                    className="title-img"
                />
            </Link>
            <h1 className="under-construction">
                This site is currently under construction. Check back soon!
            </h1>
        </div>
    );
};

export default ImagePage;
