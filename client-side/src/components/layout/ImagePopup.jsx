import PropTypes from 'prop-types';
function ImagePopup({ imageUrl, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 p-1 bg-white/30 rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white/50 hover:text-red-800 text-xl cursor-pointer hover:animate-pulse"
                >
                    &times;
                </button>
                <img src={imageUrl} alt="Expanded Picture" className="max-h-screen max-w-screen" />
            </div>
        </div>
    );

}

ImagePopup.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagePopup;
