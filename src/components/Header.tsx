import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`burger-icon ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>1 000 000 000 записей</li>
          <li>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="7.5" fill="url(#gradient1)" />
              <defs>
                <linearGradient id="gradient1" x1="2.7" y1="2.2" x2="13.7" y2="11.8">
                  <stop stopColor="#FFCC7A" />
                  <stop offset="1" stopColor="#E78B01" />
                </linearGradient>
              </defs>
            </svg>
          </li>
          <li>100₽ на пиксель</li>
          <li>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <circle cx="7.5" cy="7.5" r="7.5" fill="url(#gradient1)" />
            </svg>
          </li>
          <li>Обладай частью web 3.0 интернета</li>
        </ul>

        <div className="haeder-right">
          <button>
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H12.778M6.88901 1.11099V12.889" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <p>Добавить запись</p>
          </button>
          <div className="header-right_id">
            <p className="text-id">id:87740372</p>
            <p className="text-email">@evgeniyafreelancer</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
