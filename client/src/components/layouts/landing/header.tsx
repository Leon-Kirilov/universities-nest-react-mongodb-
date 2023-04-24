import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const menus = [
  {
    title: "Home",
    url: '/'
  },
  {
    title: "Universities",
    url: '/universities'
  },
  {
    title: "Scholarships",
    url: '/scholarships'
  },
  {
    title: "Students Life",
    url: '/students-life'
  },
  {
    title: "Majors",
    url: '/majors'
  },
  {
    title: "More",
    url: '/more'
  }
]
const Header = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(false)
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogIn(true)
    }
  }, [navigate])

  const handleLogOut = () => {
    localStorage.removeItem('token');
    setIsLogIn(false)
  }

  return (
    <div className="bg-[#2a1c52] px-2 py-4 w-3/4 mx-auto grid grid-cols-2 h-48">
      <div className="text-white mt-2">
        <h1 className="text-[36px] pb-4">UniGhana</h1>
        <h6>Educational Consultant</h6>
      </div>
      <div>
        {
          !isLogIn ? (
            <div className="flex justify-end pr-4 gap-8">
              <Link to="signin" className="text-white">
                Sign In
              </Link>
              <Link to="signup" className="text-white">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex justify-end pr-4 gap-8">
              <button className="text-white" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          )
        }

        <ul className="flex gap-4 text-white mt-6">
          {
            menus.map((menu, index) => (
              <li key={menu.title}>
                <Link to={menu.url} className="hover:text-[#d2c5fc]">
                  {menu.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header;