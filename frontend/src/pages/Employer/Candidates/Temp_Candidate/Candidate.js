import React, { useState } from 'react'
import candidatecss from './Candidate.css'
import { map } from 'leaflet';
import { FaBookmark } from "react-icons/fa";
import { useEffect } from 'react';
import axios from 'axios'
import { FaArrowUp } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";


function Candidate() {
    console.log(candidatecss)
    const [showBokkmarks, setBoomarks] = useState(true)
    const [showBkProfile, setshowBkProfile] = useState(true)
    const [toogleBookMark, setToggleBookmark] = useState(true)
    const [progress, setProgress] = useState(20);
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    const tableData = [
        {
            id: 2,
            name: "bywebuoCw",
            sName: "minub"
        },
        {
            id: 4,
            name: "bywebuoCw",
            sName: "minub"
        },
        {
            id: 5,
            name: "bywebuoCw",
            sName: "minub"
        },
        {
            id: 1,
            name: "bywebuoCw",
            sName: "minub"
        },
        {
            id: 3,
            name: "bywebuoCw",
            sName: "minub"
        },
    ]

    // to sort data based on the feilds

    // console.log("Before" + JSON.stringify(tableData))

    tableData.sort(function (a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    })


    // console.log("after" + JSON.stringify(tableData))

    const [testArr, setTstArr] = useState(
        [
            {
                "Candidate Name": "AA1d3fc1gnfg Sachdev",
                "Rating": 4,
                "Stages": "Full Satck",
                "Applied Role": "Web developer",
                "Application Date": "15.03.23",
                "Attachments": 3
            },
            {
                "Candidate Name": "ssss Sachdev",
                "Rating": 5,
                "Stages": "Full Satck",
                "Applied Role": "Web developer",
                "Application Date": "11.03.23",
                "Attachments": 3
            },
            {
                "Candidate Name": "NNNN Sachdev",
                "Rating": 3,
                "Stages": "Full Satck",
                "Applied Role": "Web developer",
                "Application Date": "03.03.23",
                "Attachments": 3
            },
            {
                "Candidate Name": "tepqwq Sachdev",
                "Rating": 1,
                "Stages": "Full Satck",
                "Applied Role": "Web developer",
                "Application Date": "25.03.23",
                "Attachments": 3
            },
            {
                "Candidate Name": "POEpwqd Sachdev",
                "Rating": 5,
                "Stages": "Full Satck",
                "Applied Role": "Web developer",
                "Application Date": "25.03.23",
                "Attachments": 3
            },
            {
                "Candidate Name": "DWQD Sachdev",
                "Rating": 2,
                "Stages": "Full Satck",
                "Applied Role": "Web developer",
                "Application Date": "12.03.23",
                "Attachments": 3
            },
        ])
    const testArrewrwrwer = [
        {
            "Candidate Name": "Ayush Sachdev",
            "Rating": 4,
            "Stages": "Full Satck",
            "Applied Role": "Web developer",
            "Application Date": "12.03.23",
            "Attachments": 3
        },
        {
            "Candidate Name": "ssss Sachdev",
            "Rating": 5,
            "Stages": "Full Satck",
            "Applied Role": "Web developer",
            "Application Date": "12.03.23",
            "Attachments": 3
        },
        {
            "Candidate Name": "NNNN Sachdev",
            "Rating": 3,
            "Stages": "Full Satck",
            "Applied Role": "Web developer",
            "Application Date": "12.03.23",
            "Attachments": 3
        },
        {
            "Candidate Name": "tepqwq Sachdev",
            "Rating": 1,
            "Stages": "Full Satck",
            "Applied Role": "Web developer",
            "Application Date": "12.03.23",
            "Attachments": 3
        },
        {
            "Candidate Name": "POEpwqd Sachdev",
            "Rating": 5,
            "Stages": "Full Satck",
            "Applied Role": "Web developer",
            "Application Date": "12.03.23",
            "Attachments": 3
        },
        {
            "Candidate Name": "DWQD Sachdev",
            "Rating": 2,
            "Stages": "Full Satck",
            "Applied Role": "Web developer",
            "Application Date": "12.03.23",
            "Attachments": 3
        },
    ]

    // useEffect(() => {
    //     setTstArr(testArrewrwrwer)
    // }, [])

    // console.log("before" + JSON.stringify(testArr))

    // const [keyWord, setKwyword] = useState()
    // useEffect(() => {
    //     console.log(keyWord)
    //     const newArr = testArr.sort((a, b) => b.Rating - a.Rating)
    //     console.log("after" + JSON.stringify(newArr))
    //     setTstArr(newArr)
    // }, [keyWord])

    // function sortData(e) {
    //     const testDtadtad = e.target.innerText
    //     setKwyword(testDtadtad)
    // }

    const [isAscending, setIsAscending] = useState(true)

    const toggleSortOrder = () => {
        const newArr = testArr.sort((a, b) => b.Rating - a.Rating)
        if (isAscending == false) {
            setTstArr(newArr)
            setIsAscending(true)
        }
        if (isAscending == true) {
            const tempArr = newArr.reverse()
            setTstArr(tempArr)
            setIsAscending(false)
        }
    };
    const [isStageAscending, setIsStageAscending] = useState(true)

    const toggleStagesSortOrder = () => {
        const newArr = testArr.sort((a, b) => b.Stages - a.Stages)
        if (isStageAscending == false) {
            setTstArr(newArr)
            setIsStageAscending(true)
        }
        if (isStageAscending == true) {
            const tempArr = newArr.reverse()
            setTstArr(tempArr)
            setIsStageAscending(false)
        }
    };
    const [isDatAscending, setIsDateAscending] = useState(true)

    const toggleDateSortOrder = () => {
        const newArr = testArr.sort((a, b) => new Date(b['Application Date']) - new Date(a['Application Date']))
        if (isDatAscending == false) {
            setTstArr(newArr)
            setIsDateAscending(true)
        }
        if (isDatAscending == true) {
            const tempArr = newArr.reverse()
            setTstArr(tempArr)
            setIsDateAscending(false)
        }
    };

    const [appliedPerc, setAppliedPerc] = useState(20)
    const [rejectedPerc, setRejectedPerc] = useState(99)
    const [pBkmedPerc, setPBMEDPerc] = useState(35)
    const [shortlistedPerc, setShortlistedPerc] = useState(17)

    const [applied, setApplied] = useState()
    const [rejected, setRejected] = useState()
    const [pBkmed, setPBMED] = useState()
    const [shortlisted, setShortlisted] = useState()

    // const [currentPage, setCurrentPage] = useState(1);

    // // Calculate total number of pages
    // const totalPages = Math.ceil(data.length / itemsPerPage);

    // // Function to handle page change
    // const handlePageChange = page => {
    //     setCurrentPage(page);
    // };

    // Filter items to display for the current page
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const itemsToShow = data.slice(startIndex, endIndex);

    useEffect(() => {
        setApplied(circumference - (appliedPerc / 100) * circumference)
        setRejected(circumference - (rejectedPerc / 100) * circumference)
        setPBMED(circumference - (pBkmedPerc / 100) * circumference)
        setShortlisted(circumference - (shortlistedPerc / 100) * circumference)
    }, [appliedPerc, rejectedPerc, pBkmedPerc, shortlistedPerc])

    useEffect(() => {
        const myDiv = document.querySelectorAll('.profile-map-div');
        console.log(myDiv)
        myDiv.forEach((i) => {
            i.addEventListener('click', function () {
                console.log('You clicked the div!');
                console.log(i.getAttribute('data-id'))
                const CID = i.getAttribute('data-id')
                console.log(CID)
                setshowBkProfile(false)
            })
        });
    }, [toogleBookMark])

    function toogleBookmarkDiv() {
        setBoomarks(false)
        setToggleBookmark(false)
    }

    function toogleBookmarkDiv2() {
        setBoomarks(true)
        setToggleBookmark(true)
        setshowBkProfile(true)
    }

    const itemsPerPage = 5;

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(testArr.length / itemsPerPage)
    const handlePageChange = page => {
        console.log(page)
        setCurrentPage(page);
    };
    const [newArr, setNewArr] = useState([])
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const tempArr = testArr.slice(startIndex, endIndex)
        console.log(tempArr)
        setNewArr(tempArr)
    }, [currentPage])

    return (
        <div>
            <div className='candidate-main'>
                <div className='candidate-sub-main-1'>
                    <div>
                        <p>Total Appliation</p>
                        <h2>5421</h2>
                    </div>
                    <svg className="progress-ring" width="120" height="120">
                        <circle
                            className="progress-ring-circle"
                            stroke="#dddddd"
                            strokeWidth="5"
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                        />
                        <circle
                            className="progress-ring-circle"
                            stroke="#ff9d56"
                            strokeWidth="5"
                            strokeDasharray={`${circumference} ${circumference}`}
                            style={{ strokeDashoffset: applied }}
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                        />
                        <text x="50%" y="55%" textAnchor="middle" fill="black" fontSize="20">
                            {appliedPerc}%
                        </text>
                    </svg>
                </div>
                <div className='candidate-sub-main-1'>
                    <div>
                        <p>Rejected Appliation</p>
                        <h2>5421</h2>
                    </div>
                    <svg className="progress-ring" width="120" height="120">
                        <circle
                            className="progress-ring-circle"
                            stroke="#dddddd"
                            strokeWidth="5"
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                        />
                        <circle
                            className="progress-ring-circle"
                            stroke="#b82d0f"
                            strokeWidth="5"
                            strokeDasharray={`${circumference} ${circumference}`}
                            style={{ strokeDashoffset: rejected }}
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                        />
                        <text x="50%" y="55%" textAnchor="middle" fill="black" fontSize="20">
                            {rejectedPerc}%
                        </text>
                    </svg>
                </div>
                <div className='candidate-sub-main-1'>
                    <div>
                        <p>Shortlisted Appliation</p>
                        <h2>5421</h2>
                    </div>
                    <svg className="progress-ring" width="120" height="120">
                        <circle
                            className="progress-ring-circle"
                            stroke="#dddddd"
                            strokeWidth="5"
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                        />
                        <circle
                            className="progress-ring-circle"
                            stroke="#52c02c"
                            strokeWidth="5"
                            strokeDasharray={`${circumference} ${circumference}`}
                            style={{ strokeDashoffset: shortlisted }}
                            fill="transparent"
                            r={radius}
                            cx="60"
                            cy="60"
                        />
                        <text x="50%" y="55%" textAnchor="middle" fill="black" fontSize="20">
                            {shortlistedPerc}%
                        </text>
                    </svg>
                </div>
                {
                    showBokkmarks ?
                        <div className='candidate-sub-main-1' id='bookmark-floating-2' onClick={toogleBookmarkDiv}>
                            <div>
                                <p>Profile Bookmarked</p>
                                <h2>5421</h2>
                            </div>
                            <svg className="progress-ring" width="120" height="120">
                                <circle
                                    className="progress-ring-circle"
                                    stroke="#dddddd"
                                    strokeWidth="5"
                                    fill="transparent"
                                    r={radius}
                                    cx="60"
                                    cy="60"
                                />
                                <circle
                                    className="progress-ring-circle"
                                    stroke="#1554f6"
                                    strokeWidth="5"
                                    strokeDasharray={`${circumference} ${circumference}`}
                                    style={{ strokeDashoffset: pBkmed }}
                                    fill="transparent"
                                    r={radius}
                                    cx="60"
                                    cy="60"
                                />
                                <text x="50%" y="55%" textAnchor="middle" fill="black" fontSize="20">
                                    {pBkmedPerc}%
                                </text>
                            </svg>
                        </div> :
                        <div className='candidate-sub-main-2' id='bookmark-floating-2' onClick={toogleBookmarkDiv2}>
                            <div>
                                <p>Profile Bookmarked</p>
                                <h2>5421</h2>
                            </div>
                            <svg className="progress-ring" width="120" height="120">
                                <circle
                                    className="progress-ring-circle"
                                    stroke="#dddddd"
                                    strokeWidth="5"
                                    fill="transparent"
                                    r={radius}
                                    cx="60"
                                    cy="60"
                                />
                                <circle
                                    className="progress-ring-circle"
                                    stroke="#1554f6"
                                    strokeWidth="5"
                                    strokeDasharray={`${circumference} ${circumference}`}
                                    style={{ strokeDashoffset: pBkmed }}
                                    fill="transparent"
                                    r={radius}
                                    cx="60"
                                    cy="60"
                                />
                                <text x="50%" y="55%" textAnchor="middle" fill="black" fontSize="20">
                                    {pBkmedPerc}%
                                </text>
                            </svg>
                        </div>
                }
            </div>
            {/* <div className='profile-map-div' data-id="1">
                    <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                        <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                        <div className="profile-map-text">
                            <h4>Ayush Sachdev</h4>
                            <p></p>
                        </div>
                        <p><FaBookmark /></p>
                    </div>
                    <div style={{ display: "flex" }} className='profile-map-div-loc'>
                        <p>Location - NY</p>
                        <p>Type - Remote</p>
                    </div>
                    <hr></hr>
                    <div className='profile-map-skills'>
                        <h4>Skills</h4>
                        <div style={{ display: "flex" }}>
                            <p>Ketch</p>
                            <p>Indesign</p>
                            <p>Adobe Suite</p>
                        </div>
                    </div>
                </div> */}
            {/* <div className='candidate-main-2'>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1%", marginTop: "1%" }}>
                    <h2>Candidates</h2>
                    <select>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                        <option>March 2023</option>
                    </select>
                </div>
                <div>
                    <table className='candidate-table'>
                        <thead style={{ backgroundColor: "#fa7902", height: "2%" }}>
                            <tr>
                                <th onClick={sortData}>Candidate Name</th>
                                <th onClick={toggleSortOrder}>{isAscending ? 'D Rating' : 'A Rating'}</th>
                                <th onClick={toggleStagesSortOrder}>{isStageAscending ? 'D Stages' : 'A Stages'}</th>
                                <th onClick={sortData}>Applied Role</th>
                                <th onClick={toggleDateSortOrder}>{isDatAscending ? 'D Date' : 'A Date'}</th>
                                <th onClick={sortData}>Attachments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                testArr.map((item) => (
                                    <tr>
                                        <td style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height="50px" /> <p>{item['Candidate Name']}</p></td>
                                        <td>&#9734; {item.Rating} </td>
                                        <td>{item.Stages}</td>
                                        <td>{item['Applied Role']}</td>
                                        <td>{item['Application Date']}</td>
                                        <td>{item.Attachments} files</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
            {/* <div className='profile-bookmark-div'>
                <h3>Profile Bookmarked</h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className='profile-map-div' data-id="1">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-map-div' data-id="2">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-map-div' data-id="3">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-map-div' data-id="4">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-map-div' data-id="5">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
            {/* <div className='bookmark-profile-div'>
                <div className='bookmark-profile-left-div'>
                    <div className='bookmark-profile-map-div' data-id="5">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='bookmark-profile-map-div' data-id="5">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='bookmark-profile-map-div' data-id="5">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='bookmark-profile-map-div' data-id="5">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                    <div className='bookmark-profile-map-div' data-id="5">
                        <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                            <div className="profile-map-text">
                                <h4>Ayush Sachdev</h4>
                                <p></p>
                            </div>
                            <p><FaBookmark /></p>
                        </div>
                        <div style={{ display: "flex" }} className='profile-map-div-loc'>
                            <p>Location - NY</p>
                            <p>Type - Remote</p>
                        </div>
                        <hr></hr>
                        <div className='profile-map-skills'>
                            <h4>Skills</h4>
                            <div style={{ display: "flex" }}>
                                <p>Ketch</p>
                                <p>Indesign</p>
                                <p>Adobe Suite</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bookmark-profile-right-div'>
                    <div className='bookmark-profile-info-div'>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"107px"} />
                            <p>Steve Morgan</p>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <p><FaBookmark /></p>
                            <p><FaBookmark /></p>
                        </div>
                    </div>
                    <p style={{ marginTop: "5%" }}>Had 5 years of working experience as design lead. Working for a reputated com.. See More</p>
                    <div className='bookmark-profile-details'>
                        <p><span>City</span> <br></br>NY</p>
                        <p><span>State</span><br></br>NY</p>
                        <p><span>Country</span><br></br>USA</p>
                    </div>
                    <div className='boomark-profile-map-skills'>
                        <h4>Skills</h4>
                        <div style={{ display: "flex" }}>
                            <p>Ketch</p>
                            <p>Indesign</p>
                            <p>Adobe Suite</p>
                        </div>
                    </div>
                    <div className='bookmark-profile-apllication'>
                        <h4>Application Note : </h4>
                        <p>Just saw your job application. I think i am perfect fit for all your requirements and can start from your desired time. Lets talk in details in a interview.</p>
                    </div>
                    <div className='bookmark-profile-button'>
                        <button>See Resume</button>
                        <button>Schedule Interview</button>
                    </div>
                </div>
            </div> */}
            <div>
                {
                    showBokkmarks ? <div><div className='candidate-main-2'>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1%", marginTop: "1%" }}>
                            <h2>Candidates</h2>
                            <select>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                                <option>March 2023</option>
                            </select>
                        </div>
                        <div>
                            <table className='candidate-table'>
                                <thead style={{ backgroundColor: "#fa7902", height: "2%" }}>
                                    <tr>
                                        <th>Candidate Name</th>
                                        <th onClick={toggleSortOrder}>{isAscending ? 'D Rating' : 'A Rating'}</th>
                                        <th onClick={toggleStagesSortOrder}>{isStageAscending ? 'D Stages' : 'A Stages'}</th>
                                        <th>Applied Role</th>
                                        <th onClick={toggleDateSortOrder}>{isDatAscending ? 'D Date' : 'A Date'}</th>
                                        <th>Attachments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        newArr.map((item, index) => (
                                            <tr key={index}>
                                                <td style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height="50px" /> <p>{item['Candidate Name']}</p></td>
                                                <td>&#9734; {item.Rating} </td>
                                                <td>{item.Stages}</td>
                                                <td>{item['Applied Role']}</td>
                                                <td>{item['Application Date']}</td>
                                                <td style={{ textAlign: "center" }}>{item.Attachments} files</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div className='table-button-div'>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button key={index} onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div></div> : null
                }
                {
                    toogleBookMark ? null :
                        <div>
                            {
                                showBkProfile ?
                                    <div className='profile-bookmark-div'>
                                        <h3>Profile Bookmarked</h3>
                                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                                            <div className='profile-map-div' data-id="1">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='profile-map-div' data-id="2">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Steve Morgan</h4>
                                                        <p>Had 5 years of working experience as design lead. Working for a reputated com.. See More</p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='profile-map-div' data-id="3">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='profile-map-div' data-id="4">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='profile-map-div' data-id="5">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='bookmark-profile-div'>
                                        <div className='bookmark-profile-left-div'>
                                            <div className='bookmark-profile-map-div' data-id="5">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bookmark-profile-map-div' data-id="5">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bookmark-profile-map-div' data-id="5">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bookmark-profile-map-div' data-id="5">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bookmark-profile-map-div' data-id="5">
                                                <div style={{ display: "flex", marginTop: "2%", marginLeft: "2%" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"80px"} />
                                                    <div className="profile-map-text">
                                                        <h4>Ayush Sachdev</h4>
                                                        <p></p>
                                                    </div>
                                                    <p><FaBookmark /></p>
                                                </div>
                                                <div style={{ display: "flex" }} className='profile-map-div-loc'>
                                                    <p>Location - NY</p>
                                                    <p>Type - Remote</p>
                                                </div>
                                                <hr></hr>
                                                <div className='profile-map-skills'>
                                                    <h4>Skills</h4>
                                                    <div style={{ display: "flex" }}>
                                                        <p>Ketch</p>
                                                        <p>Indesign</p>
                                                        <p>Adobe Suite</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bookmark-profile-right-div'>
                                            <div className='bookmark-profile-info-div'>
                                                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                                    <img src='https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png' height={"107px"} />
                                                    <h3>Steve Morgan</h3>
                                                </div>
                                                <div style={{ display: "flex", gap: "10px" }}>
                                                    <p><FaBookmark /></p>
                                                    <p><FaEllipsisVertical /></p>
                                                </div>
                                            </div>
                                            <p style={{ marginTop: "5%" }}>Had 5 years of working experience as design lead. Working for a reputated com.. See More</p>
                                            <div className='bookmark-profile-details'>
                                                <p><span>City</span> <br></br>NY</p>
                                                <p><span>State</span><br></br>NY</p>
                                                <p><span>Country</span><br></br>USA</p>
                                            </div>
                                            <div className='boomark-profile-map-skills'>
                                                <h4>Skills</h4>
                                                <div style={{ display: "flex" }}>
                                                    <p>Ketch</p>
                                                    <p>Indesign</p>
                                                    <p>Adobe Suite</p>
                                                </div>
                                            </div>
                                            <div className='bookmark-profile-apllication'>
                                                <h4>Application Note : </h4>
                                                <p>Just saw your job application. I think i am perfect fit for all your requirements and can start from your desired time. Lets talk in details in a interview.</p>
                                            </div>
                                            <div className='bookmark-profile-button'>
                                                <button>See Resume</button>
                                                <button>Schedule Interview</button>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Candidate