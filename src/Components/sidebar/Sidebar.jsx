import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUp from "@mui/icons-material/TrendingUp";
import PermIdentity from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link className="link" to="/">
                <li className="sidebarListItem active">
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">QuickMenu</h3>
            <ul className="sidebarList">
              <Link className="link" to="/users">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  User
                </li>
              </Link>
              <Link className="link" to="/newUser">
                <li className="sidebarListItem">
                  <PermIdentity className="sidebarIcon" />
                  New User
                </li>
              </Link>
              <Link className="link" to="/products">
                <li className="sidebarListItem">
                  <StorefrontIcon className="sidebarIcon" />
                  Production
                </li>
              </Link>
              <li className="sidebarListItem">
                <AttachMoneyIcon className="sidebarIcon" />
                Transaction
              </li>
              <li className="sidebarListItem">
                <BarChartIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutlineIcon className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeedIcon className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutlineIcon className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutlineIcon className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
