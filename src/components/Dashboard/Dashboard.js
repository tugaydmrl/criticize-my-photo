import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getPhoto } from "../../store/actions/actions";
import "./Dashboard.scss";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoto());
  }, []);

  const photoDetails = useSelector((state) => state.photosReducer.data[0]);

  return (
    <>
      <h2 className="title">Criticize My Photo!</h2>
      <div className="dashboard">
        {photoDetails &&
          photoDetails.map((item) => (
            <div className="dashboard-photo">
              <span className="author">{item.author}</span>
              <img id={item.id} src={item.download_url} alt="a nice photo" />
              <Link
                className="router"
                to={{
                  pathname: "/Comments",
                  state: { id: item.id, url: item.download_url },
                }}
              >
                See comments...
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default withRouter(Dashboard);
