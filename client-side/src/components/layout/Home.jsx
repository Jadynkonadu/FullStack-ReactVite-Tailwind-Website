import photo from "./images/profile-pic.png";
import nasaImage from "./images/NASA.png";
import { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";


const Home = () => {

// Functions and API Setup

    {/* Read More Functionality*/ }
    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);
    const [showFullText3, setShowFullText3] = useState(false);
    const [showFullText4, setShowFullText4] = useState(false);
    const [showFullText5, setShowFullText5] = useState(false);
    const [showFullText6, setShowFullText6] = useState(false);

    {/* Image Popup Functionality*/ }
    const [popupImage, setPopupImage] = useState(null);

    const openImagePopup = (imageUrl) => {
        setPopupImage(imageUrl);
    };

    const closeImagePopup = () => {
        setPopupImage(null);
    };

    { /* NASA API Setup */ }
    // Picture of the Day
    const [apodData, setApodData] = useState({
        pictureUrl: "",
        date: "",
        title: "",
        explanation: "",
    });

    // Discover
    const [nasaData1, setNasaData1] = useState({
        pictureUrl: "",
        date: "",
        title: "",
        explanation: "",
    });

    const [nasaData2, setNasaData2] = useState({
        pictureUrl: "",
        date: "",
        title: "",
        explanation: "",
    });

    const [nasaData3, setNasaData3] = useState({
        pictureUrl: "",
        date: "",
        title: "",
        explanation: "",
    });

    const [nasaData4, setNasaData4] = useState({
        pictureUrl: "",
        date: "",
        title: "",
        explanation: "",
    });

    const [nasaData5, setNasaData5] = useState({
        pictureUrl: "",
        date: "",
        title: "",
        explanation: "",
    });

    const [nasaData6, setNasaData6] = useState({
        pictureUrl: "",
        date: "",
        title: "",
        explanation: "",
    });

    {/*Use Effect Function*/ }
    useEffect(() => {
        const apiKey = "uyf5QUu6oM5TxTnB34m13gdaS1mFUsfSFLkgI9UH";
        // Key to access NASA API ^^^

        const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        // This should generate new APOD data daily ^^^
        const nasaUrl1 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2018-01-29`;
        const nasaUrl2 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2021-02-18`;
        const nasaUrl3 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-12-17`;
        const nasaUrl4 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2023-02-19`;
        const nasaUrl5 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-07-10`;
        const nasaUrl6 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2022-01-20`;
        // NASA information should remain the same on each visit ^^^
        // Changing the dates will change the information displayed

        {/*Fetch Statements*/ }
        fetch(apodUrl)
            .then((response) => response.json())
            .then((data) => {
                setApodData({
                    pictureUrl: data.url,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    author: data.copyright,
                });
            })
            .catch((error) => console.error("Error fetching APOD data:", error));

        fetch(nasaUrl1)
            .then((response) => response.json())
            .then((data) => {
                setNasaData1({
                    pictureUrl: data.url,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    author: data.copyright,
                });
            })
            .catch((error) => console.error("Error fetching NASA data:", error));

        fetch(nasaUrl2)
            .then((response) => response.json())
            .then((data) => {
                setNasaData2({
                    pictureUrl: data.url,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    author: data.copyright,
                });
            })
            .catch((error) => console.error("Error fetching NASA data:", error));

        fetch(nasaUrl3)
            .then((response) => response.json())
            .then((data) => {
                setNasaData3({
                    pictureUrl: data.url,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    author: data.copyright,
                });
            })
            .catch((error) => console.error("Error fetching NASA data:", error));

        fetch(nasaUrl4)
            .then((response) => response.json())
            .then((data) => {
                setNasaData4({
                    pictureUrl: data.url,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    author: data.copyright,
                });
            })
            .catch((error) => console.error("Error fetching NASA data:", error));

        fetch(nasaUrl5)
            .then((response) => response.json())
            .then((data) => {
                setNasaData5({
                    pictureUrl: data.url,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    author: data.copyright,
                });
            })
            .catch((error) => console.error("Error fetching NASA data:", error));

        fetch(nasaUrl6)
            .then((response) => response.json())
            .then((data) => {
                setNasaData6({
                    pictureUrl: data.url,
                    date: data.date,
                    title: data.title,
                    explanation: data.explanation,
                    author: data.copyright,
                });
            })
            .catch((error) => console.error("Error fetching NASA data:", error));
    }, []);


    { /* Personal API Setup */ }
    // Visitors
    const [visitorA, setVisitorA] = useState([]);
    const [visitorB, setVisitorB] = useState([]);
    const [visitorC, setVisitorC] = useState([]);
    const visitorUrl = "http://localhost:8080/visitors";

    // Explore
    const [topic1, setTopic1] = useState([])
    const [topic2, setTopic2] = useState([])
    const [topic3, setTopic3] = useState([])
    const [topic4, setTopic4] = useState([])
    const topicUrl = "http://localhost:8080/topic";

    {/*Function To Shuffle Visitors on Button Click*/ }
    const [shuffled, setShuffled] = useState(false);

    const handleShuffleClick = () => {
        setShuffled(true);
    };

    {/*Use Effect Functions*/ }
    useEffect(() => {
        fetchVisitorName("Hubert Gigglehumpty", setVisitorA);
        fetchVisitorName("Melissa Walnut", setVisitorB);
        fetchVisitorName("John Garvey", setVisitorC);
    }, []);

    useEffect(() => {
        if (shuffled) {
            fetchVisitorName("Clara Lawson", setVisitorA);
            fetchVisitorName("Tavion Jackson III", setVisitorB);
            fetchVisitorName("Amber Dickinson", setVisitorC);
        }
    }, [shuffled]);

    useEffect(() => {
        fetchTopic("Apollo 11: Landing on The Moon", setTopic1);
        fetchTopic("Mars Pathfinder Touches Down", setTopic2);
        fetchTopic("Columbia Makes History", setTopic3);
        fetchTopic("Apollo 13: Space Rescue", setTopic4);
    }, []);


    {/*Fetch Statements*/ }
    const fetchVisitorName = async (name, setDataFunction) => {
        let url = visitorUrl;
        if (name) {
            url += `/name/${name}`;
        } else {
            url += "/all";
        }

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();
            setDataFunction(data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchTopic = async (name, setDataFunction) => {
        let url = topicUrl;
        if (name) {
            url += `/name/${name}`;
        } else {
            url += "/all";
        }

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();
            setDataFunction(data);
        } catch (error) {
            console.log(error);
        }
    };

// Functions and API Setup Ends

{/* Home Page Starts*/ }
    return (
        <section className="bg-gradient-to-b from-black/10 to-black/90 pt-8"> {/* Background Styling*/}
            <div className="max-w-7xl p-2 mt-2 sm:m-auto sm:p-6 bg-gradient-to-t from-slate-50/90 to-slate-100/10 rounded-xl shadow-2xl"> {/* Page Styling*/}
                {/* Header Section */}
                <div className="flex container pt-2 pb-6 mx-auto mt-2 border-b-4 sm:block items-center">
                    <a>
                        <img src={nasaImage} className="h-40  " alt="NASA Logo" />
                        <h1 className="text-3xl font-bold pb-2">J.A.C. Enterprises</h1>
                    </a>
                    <div className="py-0.5 mb-10 bg-black/10" />
                    <h2 className="mb-12 text-2xl font-bold text-center">Explore</h2>
                    <div className="flex flex-wrap justify-center px-6 my-4 md:flex-row sm:w-auto">

                        {/*Explore Section (Topic API)*/}
                        <div className="sm:max-w-sm space-y-4 mx-4">
                            <img
                                className="w-full shadow-2xl rounded-lg transition-transform hover:scale-105 hover:animate-pulse cursor-pointer h-72"
                                src="https://airandspace.si.edu/sites/default/files/styles/callout_half/public/images/callouts/GPN-2001-000013h.jpg?h=0c4a277e&itok=cl62dvK1"
                                alt="Moon Landing"
                                onClick={() => openImagePopup("https://airandspace.si.edu/sites/default/files/styles/callout_half/public/images/callouts/GPN-2001-000013h.jpg?h=0c4a277e&itok=cl62dvK1")}
                            ></img>
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">
                                    {topic1.map((topic) => (
                                        <p key={topic.id}>{topic.name}</p>
                                    ))}
                                </div>
                                <p className="mb-4 text-base text-gray-600">
                                    {topic1.map((topic) => (
                                        <p key={topic.id}>{topic.topicDescription}</p>
                                    ))}
                                </p>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                        <div className="sm:max-w-sm space-y-4 mx-4">
                            <img
                                className="w-full shadow-2xl rounded-lg transition-transform hover:scale-105 hover:animate-pulse cursor-pointer h-72"
                                src="https://www.nasa.gov/sites/default/files/thumbnails/image/sts1-0586-80pc-704-12.29.80.jpg"
                                alt="Columbia Shuttle"
                                onClick={() => openImagePopup("https://www.nasa.gov/sites/default/files/thumbnails/image/sts1-0586-80pc-704-12.29.80.jpg")}
                            ></img>
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">
                                    {topic3.map((topic) => (
                                        <p key={topic.id}>{topic.name}</p>
                                    ))}
                                </div>
                                <p className="mb-4 text-base text-gray-600">
                                    {topic3.map((topic) => (
                                        <p key={topic.id}>{topic.topicDescription}</p>
                                    ))}
                                </p>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                        <div className="sm:max-w-sm space-y-4 mx-4">
                            <img
                                className="w-full shadow-2xl rounded-lg transition-transform hover:scale-105 hover:animate-pulse cursor-pointer h-72"
                                src="https://imgix.bustle.com/uploads/image/2022/6/30/fb85ed9b-af22-49f9-919e-80f212067e7f-pathfinder.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
                                alt="Mars Rover Landing"
                                onClick={() => openImagePopup("https://imgix.bustle.com/uploads/image/2022/6/30/fb85ed9b-af22-49f9-919e-80f212067e7f-pathfinder.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg")}
                            ></img>
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">
                                    {topic2.map((topic) => (
                                        <p key={topic.id}>{topic.name}</p>
                                    ))}
                                </div>
                                <p className="mb-4 text-base text-gray-600">
                                    {topic2.map((topic) => (
                                        <p key={topic.id}>{topic.topicDescription}</p>
                                    ))}
                                </p>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                        <div className="sm:max-w-sm space-y-4 mx-4">
                            <img
                                className="w-full shadow-2xl rounded-lg transition-transform hover:scale-105 hover:animate-pulse cursor-pointer h-72"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Apollo13_CommandModule_Kansas.JPG/1280px-Apollo13_CommandModule_Kansas.JPG"
                                alt="Picture"
                                onClick={() => openImagePopup("https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Apollo13_CommandModule_Kansas.JPG/1280px-Apollo13_CommandModule_Kansas.JPG")}
                            ></img>
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">
                                    {topic4.map((topic) => (
                                        <p key={topic.id}>{topic.name}</p>
                                    ))}
                                </div>
                                <p className="mb-4 text-base text-gray-600">
                                    {topic4.map((topic) => (
                                        <p key={topic.id}>{topic.topicDescription}</p>
                                    ))}
                                </p>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}
                    </div>
                </div>
                <div className="py-0.5 mb-4 bg-black/20" />

                {/*Discover Section*/}
                <div className="container pt-6 pb-2 mx-auto mt-2 border-b-4 sm:block">
                    <h2 className="mb-10 text-2xl font-bold text-center">Discover</h2>
                    <div className="flex justify-center px-6 my-4 flex-row sm:w-auto">
                        <div className="sm:max-w-sm flex-grow mr-4">
                            <img
                                className="w-full h-60 shadow-2xl rounded-xl cursor-pointer transition-transform hover:scale-105 hover:animate-pulse"
                                src={nasaData1.pictureUrl}
                                alt="Picture"
                                onClick={() => openImagePopup(nasaData1.pictureUrl)}
                            />
                            <div className="px-6 py-4">
                                <div className=" text-xl font-bold">{nasaData1.title}</div>
                                <p className="text-sm text-gray-700 italic mb-2">
                                    {nasaData1.date}
                                </p>
                                <p
                                    className={`mb-4 text-base text-gray-600 ${showFullText1 ? "max-h-full" : "max-h-20 overflow-hidden"
                                        }`}
                                >
                                    {nasaData1.explanation}
                                </p>
                                <button
                                    onClick={() => setShowFullText1(!showFullText1)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform hover:scale-105 hover:animate-pulse"
                                >
                                    {showFullText1 ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                        <div className="sm:max-w-sm flex-grow mr-4">
                            <img
                                className="w-full h-60 shadow-2xl rounded-xl cursor-pointer transition-transform hover:scale-105 hover:animate-pulse"
                                src={nasaData2.pictureUrl}
                                alt="Picture"
                                onClick={() => openImagePopup(nasaData2.pictureUrl)}
                            />
                            <div className="px-6 py-4">
                                <div className=" text-xl font-bold">{nasaData2.title}</div>
                                <p className="text-sm text-gray-700 italic mb-2">
                                    {nasaData2.date}
                                </p>
                                <p
                                    className={`mb-4 text-base text-gray-600 ${showFullText2 ? "max-h-full" : "max-h-20 overflow-hidden"
                                        }`}
                                >
                                    {nasaData2.explanation}
                                </p>
                                <button
                                    onClick={() => setShowFullText2(!showFullText2)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform hover:scale-105 hover:animate-pulse"
                                >
                                    {showFullText2 ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                        <div className="sm:max-w-sm flex-grow">
                            <img
                                className="w-full h-60 shadow-2xl rounded-xl cursor-pointer transition-transform hover:scale-105 hover:animate-pulse"
                                src={nasaData3.pictureUrl}
                                alt="Picture"
                                onClick={() => openImagePopup(nasaData3.pictureUrl)}
                            />
                            <div className="px-6 py-4">
                                <div className=" text-xl font-bold">{nasaData3.title}</div>
                                <p className="text-sm text-gray-700 italic mb-2">
                                    {nasaData3.date}
                                </p>
                                <p
                                    className={`mb-4 text-base text-gray-600 ${showFullText3 ? "max-h-full" : "max-h-20 overflow-hidden"
                                        }`}
                                >
                                    {nasaData3.explanation}
                                </p>
                                <button
                                    onClick={() => setShowFullText3(!showFullText3)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform hover:scale-105 hover:animate-pulse"
                                >
                                    {showFullText3 ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}
                    </div>

                    <div className="flex justify-center px-6 my-4 flex-row sm:w-auto pt-4">
                        <div className="sm:max-w-sm flex-grow mr-4">
                            <img
                                className="w-full h-60 shadow-2xl rounded-xl cursor-pointer transition-transform hover:scale-105 hover:animate-pulse"
                                src={nasaData4.pictureUrl}
                                alt="Picture"
                                onClick={() => openImagePopup(nasaData4.pictureUrl)}
                            />
                            <div className="px-6 py-4">
                                <div className=" text-xl font-bold">{nasaData4.title}</div>
                                <p className="text-sm text-gray-700 italic mb-2">
                                    {nasaData4.date}
                                </p>
                                <p
                                    className={`mb-4 text-base text-gray-600 ${showFullText4 ? "max-h-full" : "max-h-20 overflow-hidden"
                                        }`}
                                >
                                    {nasaData4.explanation}
                                </p>
                                <button
                                    onClick={() => setShowFullText4(!showFullText4)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform hover:scale-105 hover:animate-pulse"
                                >
                                    {showFullText4 ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                        <div className="sm:max-w-sm flex-grow mr-4">
                            <img
                                className="w-full h-60 shadow-2xl rounded-xl cursor-pointer transition-transform hover:scale-105 hover:animate-pulse"
                                src={nasaData5.pictureUrl}
                                alt="Picture"
                                onClick={() => openImagePopup(nasaData5.pictureUrl)}
                            />
                            <div className="px-6 py-4">
                                <div className=" text-xl font-bold">{nasaData5.title}</div>
                                <p className="text-sm text-gray-700 italic mb-2">
                                    {nasaData5.date}
                                </p>
                                <p
                                    className={`mb-4 text-base text-gray-600 ${showFullText5 ? "max-h-full" : "max-h-20 overflow-hidden"
                                        }`}
                                >
                                    {nasaData5.explanation}
                                </p>
                                <button
                                    onClick={() => setShowFullText5(!showFullText5)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform hover:scale-105 hover:animate-pulse"
                                >
                                    {showFullText5 ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                        <div className="sm:max-w-sm flex-grow">
                            <img
                                className="w-full h-60 shadow-2xl rounded-xl cursor-pointer transition-transform hover:scale-105 hover:animate-pulse"
                                src={nasaData6.pictureUrl}
                                alt="Picture"
                                onClick={() => openImagePopup(nasaData6.pictureUrl)}
                            />
                            <div className="px-6 py-4">
                                <div className=" text-xl font-bold">{nasaData6.title}</div>
                                <p className="text-sm text-gray-700 italic mb-2">
                                    {nasaData6.date}
                                </p>
                                <p
                                    className={`mb-4 text-base text-gray-600 ${showFullText6 ? "max-h-full" : "max-h-20 overflow-hidden"
                                        }`}
                                >
                                    {nasaData6.explanation}
                                </p>
                                <button
                                    onClick={() => setShowFullText6(!showFullText6)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform hover:scale-105 hover:animate-pulse"
                                >
                                    {showFullText6 ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                        {popupImage && (
                            <ImagePopup imageUrl={popupImage} onClose={closeImagePopup} />
                        )}

                    </div>
                </div>
                <div className="py-0.5 mb-10 bg-black/20" />

                {/*NASA API Section*/}
                <h3 className="mb-3 text-2xl font-extrabold leading-tight text-center">
                    Astronomy Photo of the Day
                </h3>

                <h4 className="mb-3 text-sm italic leading-tight text-center text-gray-600">
                    Powered By NASA A.P.O.D. API
                </h4>
                <div className="px-5 mx-auto">
                    <hr className="w-64 h-1 p-0 m-0 mx-auto mb-10 opacity-25 gradient" />
                    <div className="flex justify-center items-center flex-col">
                        <a
                            href="https://apod.nasa.gov/apod/astropix.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={apodData.pictureUrl}
                                alt={apodData.title}
                                className="max-w-md shadow-2xl rounded-xl cursor-pointer transition-transform hover:scale-105"
                            />
                        </a>
                        <h4 className="mt-6 text-xl font-bold">{apodData.title}</h4>
                        <h4 className="mt-1 text-lg text-gray-800 italic">
                            {apodData.author}
                        </h4>
                        <p className="mt-2 text-gray-600">{apodData.date}</p>
                        <p className="mt-2 text-gray-800 text-center">
                            {apodData.explanation}
                        </p>
                        <p className="mt-6 text-gray-600/75 text-sm italic">
                            Click the image above to visit NASA A.P.O.D.
                        </p>
                    </div>
                </div>

                {/*Visitor API Section*/}
                <div className="py-0.5 mt-10 mb-5 bg-black/10" />
                <div className="py-16 mt-14 bg-gradient-to-r from-gray-50/10 to-gray-500/50 rounded-xl shadow-2xl ">
                    <div className="px-5 mx-auto">
                        <h3 className="mb-3 text-3xl font-extrabold leading-tight text-center">
                            What People Are Saying About J.A.C Enterprises
                        </h3>
                        <hr className="w-64 h-1 p-0 m-0 mx-auto mb-10 opacity-25 gradient" />
                        <div className="flex flex-wrap justify-center -mx-4">
                            <div className="w-full px-4 lg:w-1/3">
                                <div className="flex -mx-2">
                                    <div className="px-4 ">
                                        <div className="p-4 bg-white rounded-lg shadow-2xl italic opacity-75 transition-transform hover:scale-105">
                                            <ul>
                                                {visitorA.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.quote}</p>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold mt-6 pl-6">
                                                {visitorA.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.name}</p>
                                                ))}
                                            </p>
                                            <p className="text-lg text-gray-600 mt-2 italic pl-6">
                                                {visitorA.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.description}</p>
                                                ))}
                                            </p>
                                            <img
                                                src={photo}
                                                className="h-20 mr-3 mt-3 pl-6"
                                                alt="Visitor Photo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/3">
                                <div className="flex -mx-2">
                                    <div className="px-4 ">
                                        <div className="p-4 bg-white rounded-lg shadow-2xl italic opacity-75 transition-transform hover:scale-105">
                                            <ul>
                                                {visitorB.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.quote}</p>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold mt-6 pl-6">
                                                {visitorB.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.name}</p>
                                                ))}
                                            </p>
                                            <p className="text-lg text-gray-600 mt-2 italic pl-6">
                                                {visitorB.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.description}</p>
                                                ))}
                                            </p>
                                            <img
                                                src={photo}
                                                className="h-20 mr-3 mt-3 pl-6"
                                                alt="Visitor Photo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-1/3">
                                <div className="flex -mx-2">
                                    <div className="px-4 ">
                                        <div className="p-4 bg-white rounded-lg shadow-2xl italic opacity-75 transition-transform hover:scale-105">
                                            <ul>
                                                {visitorC.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.quote}</p>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold mt-6 pl-6">
                                                {visitorC.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.name}</p>
                                                ))}
                                            </p>
                                            <p className="text-lg text-gray-600 mt-2 italic pl-6">
                                                {visitorC.map((visitor) => (
                                                    <p key={visitor.id}>{visitor.description}</p>
                                                ))}
                                            </p>
                                            <img
                                                src={photo}
                                                className="h-20 mr-3 mt-3 pl-6"
                                                alt="Visitor Photo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Shuffle Visitors Button*/}
                            <div className="w-full px-4 flex justify-center">
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mt-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-transform hover:scale-105 hover:animate-pulse"
                                    onClick={handleShuffleClick}
                                >
                                    More...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10"></div>
        </section>
    );
// Home Page Ends
};
export default Home;

// WE DID IT !!!